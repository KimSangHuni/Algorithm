function solution(board) {

    const tictacto = [ 
        [0, 1, 2], [0, 3, 6], [0, 4, 8], 
        [1, 4, 7], [2, 5, 8], [2, 4, 6], 
        [3, 4, 5], [6, 7, 8],
    ];

    const players = [0, 0];
    let victoryPlayer = undefined;
    const boardArr = [...board.join('')];

    for (const b of boardArr) {
        if (b === 'O') players[0]++;
        else if (b === 'X') players[1]++;
    }

    for (const [a, b, c] of tictacto) {
        if (boardArr[a] === boardArr[b] && boardArr[b] === boardArr[c] && boardArr[a] !== '.') {
            if (!victoryPlayer) victoryPlayer = boardArr[a];
            else {
                return players[0] === 5 && players[1] === 4 && boardArr[a] == 'O' && victoryPlayer === 'O' ? 1 : 0;
            }
        }
    }
    
    if (!victoryPlayer) {
        return players[0] === players[1] || players[0] === players[1] + 1 ? 1 : 0;
    }
    
    
    if (victoryPlayer === 'O') {
        return players[0] === players[1] + 1 ? 1 : 0;
    }

    if (victoryPlayer === 'X') {
        return players[0] === players[1] ? 1 : 0;
    }
}