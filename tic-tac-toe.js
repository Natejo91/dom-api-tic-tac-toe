let currentPlayerSymbol = 'x';
let squareValues = ['', '', '', '', '', '', '', '', ''];
let gameStatus = '';

let checkGameStatus = array => {
    let diagonalWinner = []
    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (squareValues[i] !== ''
            && squareValues[i] === squareValues[i + 1]
            && squareValues[i] === squareValues[i + 2]) {
            gameStatus = squareValues[i];
            break;
        }
    }
    //check columns
    for (let i =0; i < 3; i +=1) {
        if (squareValues[i] !== ''
            && squareValues[i] === squareValues[i + 3]
            && squareValues[i] === squareValues[i + 6]) {
            gameStatus = squareValues[i];
            break;
        }
    }
    //check diagonals
    if (squareValues[0] !== ''
            && squareValues[0] === squareValues[4]
            && squareValues[0] === squareValues[8]) {
            gameStatus = squareValues[0];
    }
    if (squareValues[2] !== ''
        && squareValues[2] === squareValues[4]
        && squareValues[2] === squareValues[6]) {
            gameStatus = squareValues[2];
    }
    //Check for a tie
    let boardIsFilled = true;
    for (let i =0; i < 9; i += 1) {
        if (squareValues[i] === '') {
            boardIsFilled = false;
            break;
        }
    }
    if (boardIsFilled) {
        gameStatus = 'None';
    }

    if (gameStatus !== '') {
        let header = document.getElementById('game-status');
        header.innerHTML = `Winner: ${gameStatus.toUpperCase()}`;
    }

}
window.addEventListener('DOMContentLoaded', event => {
    let board = document.getElementById('tic-tac-toe-board');






    board.addEventListener('click', event => {
        if (gameStatus !== '') {
            return;
        }
        const targetId = event.target.id;

        if (!targetId.startsWith('square-')) {
            return;
        }

        const squareIndex = Number.parseInt(targetId[targetId.length - 1]);
        const img = document.createElement('img');
        img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`
        event.target.appendChild(img);

        squareValues[squareIndex] = currentPlayerSymbol;

        if (currentPlayerSymbol === 'x') {
            currentPlayerSymbol = 'o';
        } else {
            currentPlayerSymbol = 'x';
        }

        checkGameStatus();
    })
});
