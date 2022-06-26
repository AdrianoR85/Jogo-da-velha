let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['symbol-o', 'symbol-x'];
let gameOver = false;
let seqWin;

function addSymbol(position) {

    if (gameOver) {
        return
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];
        
        gameOver = IsWin();

        if (!gameOver) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    } 
}

function IsWin() {

    let winState = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winState.length; i++) {
        let state = winState[i]

        let pos1 = state[0];
        let pos2 = state[1];
        let pos3 = state[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''  ) {
                seqWin = winState[i];
                console.log(seqWin)
            return true;
        }
    }

    return false;
}

function restart() {
    
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    symbols = ['symbol-o', 'symbol-x'];
    gameOver = false;
    seqWin;
}
