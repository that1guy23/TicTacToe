function playerTurn(player){
    let currentPlayer=player
    let nextPlayer
    if (currentplayer=='X'){
        nextPlayer='O'
    } else {
        nextPlayer='X'
    }
    document.querySelector('boxes').addEventListener('click', addMark())
    checkIfWin()? gameEnd(currentPlayer): playerTurn(nextPlayer)
}

function gameEnd(player){
    alert(`Congrats player ${player} you have won!`)
    document.querySelector('#startGame').addEventListener('click', startGame())
}

function gameEnd(player){
    alert(`Congrats player ${player} you have won!`)
    document.querySelector('#startGame').addEventListener('click', startGame())
}
