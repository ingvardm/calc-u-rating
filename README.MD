Instalation
===========

npm i calc-u-rating -S

Usage
=====
### Two players game:
```
import { processSession } from 'calc-u-rating'

gameRasult = [
    { //player 1
        rating:1100,
        place: 2
    },
    { //player 2
        rating:1500,
        place: 1
    }
]

console.log(processSession(gameRasult))
```

### Teams:
```
import * as calculator from 'calc-u-rating'

calculator.configure({
    RSDF: 800,
    K: () => 16
})

let teams = [
    { //team 1
        rating:[1100,1200],
        place: 3
    },
    { //team 2
        rating:[1250,1350],
        place: 2
    },
    { //team 3
        rating:[1450,1550],
        place: 1
    },
    { //team 4
        rating:[1211,1341],
        place: 2
    }
];

console.log(calculator.processSession(teams))
```