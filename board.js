"use strict";
const boardSize = 8;
for (let i = 0; i < boardSize; i++) {
    let cell = '';
    for (let j = 0; j < boardSize; j++) {
        if ((i + j) % 2 === 0) {
            cell += '██';
        }
        else {
            cell += '  ';
        }
    }
    console.log(cell);
}
