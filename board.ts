const boardSize: number = 8;

for (let i: number = 0; i < boardSize; i++) {
    let cell: string = '';
    for (let j: number = 0; j < boardSize; j++) {
        if ((i + j) % 2 === 0) {
            cell += '██';
        } else {
            cell += '  ';
        }
    }
    console.log(cell);
}

