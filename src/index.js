// possible actual scores
const WIN = 1
const DRAW = 0.5

// rating system division factor (USCF uses 400)
// lower numbers yeild smaller deltas
// https://en.wikipedia.org/wiki/Elo_rating_system#Mathematical_details
const RSDF = 400

// K factor used to determine max delta
// https://en.wikipedia.org/wiki/Elo_rating_system#Most_accurate_K-factor
const K = rating => {
    if(rating < 2100) return 32
    if(rating < 2400) return 24
    return 16
}

var config = { RSDF, K }

const configure = cfg => config = Object.assign(config, ...cfg)

// returns the expected score of player/team A against player/team B
// https://en.wikipedia.org/wiki/Elo_rating_system#/media/File:Elo_rating_graph.svg
const getExpectedScore = (a, b) => 1 / (1 + Math.pow(10, (b - a) / (config.RSDF || RSDF)))

// returns the rating delta based on player/team expected and final(actual) score
// https://en.wikipedia.org/wiki/Elo_rating_system#Mathematical_details
const getRatingDelta = (expectedScore, actualScore, rating) => (config.K || K)(rating) * (actualScore - expectedScore)

const processSession = session => {
    let teams = [].concat(session)

    // get avarage rating
    teams.forEach(team => {
        if(team.rating.length)
            team.avarageRating = team.rating.reduce((p, c) => c += p) / team.rating.length
    })

    teams.forEach(team => {
        let actualScore = 0
        let expectedScore = 0

        teams.forEach(otherTeam => {
            if(team === otherTeam) return
            expectedScore += getExpectedScore((team.avarageRating || team.rating), (otherTeam.avarageRating || otherTeam.rating))
            if(team.place < otherTeam.place) actualScore += WIN
            else if(team.place == otherTeam.place) actualScore += DRAW
        })

        actualScore /= teams.length - 1
        expectedScore /= teams.length - 1

        let delta = getRatingDelta(expectedScore, actualScore, team.avarageRating)

        team.delta = delta
        team.actualScore = actualScore
        team.expectedScore = expectedScore
    })

    return teams
}

module.exports = {processSession, configure}