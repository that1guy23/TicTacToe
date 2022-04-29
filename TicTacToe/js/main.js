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

function checkWin(){
    const topLeft = document.getElementById("#TopLeft");
    const topMiddle = document.getElementById("#TopMiddle");
    const topRight = document.getElementById("#TopRight");
    const leftMiddle = document.getElementById("#LeftMiddle");
    const middleMiddle = document.getElementById("#MiddleMiddle");
    const rightMiddle = document.getElementById("#RightMiddle");
    const bottomLeft = document.getElementById("#BottmeLeft");
    const bottomMiddle = document.getElementById("#BottomMiddle");
    const bottomRight = document.getElementById("#BottomRight");

    //Row Check
    if ((topLeft.value == topMiddle.value) && (topMiddle.value == topRight.value)){
        return true;
    }
    if ((leftMiddle.value == middleMiddle.value) && (middleMiddle.value == rightMiddle.value)){
        return true;
    }
    if ((bottomLeft.value == bottomMiddle.value) && (bottomMiddle.value == bottomRight.value)){
        return true;
    }

    //Column Check
    if ((topLeft.value == leftMiddle.value) && (leftMiddle.value == bottomLeft.value)){
        return true;
    }
    if ((topMiddle.value == middleMiddle.value) && (middleMiddle.value == bottomMiddle.value)){
        return true;
    }
    if ((topRight.value == rightMiddle.value) && (rightMiddle.value == bottomRight.value)){
        return true;
    }

    //Diagonal Check
    if((topLeft.value == middleMiddle.value) && (middleMiddle.value == bottomRight.value)){
        return true
    }
    if ((topRight.value == middleMiddle.value) && (middleMiddle.value == bottomLeft.value)){
        return true;
    }

    return false;
}
