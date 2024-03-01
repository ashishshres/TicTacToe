let boxes = document.querySelectorAll(".box");
let remarks = document.querySelector(".remarks");
let board = document.querySelector(".board");
let playAgain = document.querySelector(".play-again");
let restartGame = document.querySelector(".restart-game");
let isTurnO = true;

const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (isTurnO) {
            box.innerText = "O";
            isTurnO = false;
        }
        else {
            box.innerText = "X";
            isTurnO = true;
        }
        box.style.pointerEvents = "none";
        checkWinner();
    });
})

function checkWinner() {
    for (pattern of winnerPatterns) {
        let firstPattern = boxes[pattern[0]].innerText;
        let secondPattern = boxes[pattern[1]].innerText;
        let thirdPattern = boxes[pattern[2]].innerText;

        if (firstPattern != "" && secondPattern != "" && thirdPattern != "") {
            if (firstPattern == secondPattern && secondPattern == thirdPattern) {
                boxes[pattern[0]].style.backgroundColor = "skyblue";
                boxes[pattern[1]].style.backgroundColor = "skyblue";
                boxes[pattern[2]].style.backgroundColor = "skyblue";
                remarks.innerText = `🎉Player${firstPattern} won!`;
                playAgain.style.display = "block";
                restartGame.style.display = "none";
                board.style.pointerEvents = "none";
                for (box of boxes) {
                    box.style.pointerEvents = "none";
                }
            }
        }
    }
}

function reset() {
    isTurnO = true;
    for (box of boxes) {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor = "lemonchiffon";
    }
    remarks.innerText = "";
    playAgain.style.display = "none";
    restartGame.style.display = "block";
    board.style.pointerEvents = "auto";
}

playAgain.addEventListener("click", reset);
restartGame.addEventListener("click", reset);