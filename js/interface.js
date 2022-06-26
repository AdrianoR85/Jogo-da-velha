const players = document.querySelectorAll('.show-players > div')
const squares = document.querySelectorAll('.square');
const msg = document.querySelector('.WinnerMsg');

window.addEventListener('DOMContentLoaded', () => {

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let position = event.target.id
    
    addSymbol(position);
    updatePlayerTime();
    updateSquare(position);
    
    if (gameOver) showWinner();
    newGame()
}

function updateSquare(position) {

    let symbol = board[position]

    if (symbol != '') {
        squares[position].innerHTML = `<div class="${symbol}"></div>`
    }

}

function updatePlayerTime()  { 

    if (playerTime == 0) {
        players[1].classList.remove('playerActive');
        players[0].classList.add('playerActive')
    } else {
        players[0].classList.remove('playerActive');
        players[1].classList.add('playerActive')
    }

}

function showWinner() {

    msg.textContent = `Jogador ${playerTime+1} foi o Vencendor`

    seqWin.forEach(seq => {
        squares[seq].classList.add('squareWin')
    })

}

function newGame() {

    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        squares.forEach(square => {
            square.innerHTML = ''
            square.classList.remove('squareWin')
        })
        msg.textContent = ''
        restart()
        updatePlayerTime();
    })
    
}

