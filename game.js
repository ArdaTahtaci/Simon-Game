

var queueGame = [];
var queueInput = [];

var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");


document.addEventListener("keydown", function (e) {
    $("h1").text("Level " + queueGame.length + 1);
    setTimeout(() => {
        continueGame();
    }, 300);

});




document.querySelector(".green").addEventListener("click", function () {
    greenSound.play();
    queueInput.push(0);
    buttonAnimation(".green");

    if (queueInput.length == queueGame.length && check()) {
        setTimeout(() => {
            continueGame();
        }, 500);
        queueInput = [];
    }

    if (!check())
        reset();

});


document.querySelector(".red").addEventListener("click", function () {
    redSound.play();
    queueInput.push(1);
    buttonAnimation(".red");
    if (queueInput.length == queueGame.length && check()) {
        setTimeout(() => {
            continueGame();
        }, 500);
        queueInput = [];
    }

    if (!check())
        reset();

});


document.querySelector(".yellow").addEventListener("click", function () {
    yellowSound.play();
    queueInput.push(2);
    buttonAnimation(".yellow");
    if (queueInput.length == queueGame.length && check()) {
        setTimeout(() => {
            continueGame();
        }, 500);
        queueInput = [];
    }

    if (!check())
        reset();
});


document.querySelector(".blue").addEventListener("click", function () {
    blueSound.play();
    queueInput.push(3);
    buttonAnimation(".blue");
    if (queueInput.length == queueGame.length && check()) {
        setTimeout(() => {
            continueGame();
        }, 500);
        queueInput = [];
    }

    if (!check())
        reset();
});



function check() {
    for (var i = 0; i < queueInput.length; i++) {
        if (queueGame[i] != queueInput[i])
            return false;
    }
    return true;
}

function continueGame() {

    var rand = Math.random() * 4;
    rand = parseInt(rand);
    queueGame.push(rand);
    makeSound(rand);
    $("h1").text("Level " + queueGame.length);

}

function reset() {
    queueGame = [];
    queueInput = [];
    wrongSound.play();
    $("h1").text("Press a key to start again !");

}


function makeSound(num) {
    switch (num) {
        case 0:
            greenSound.play();
            buttonAnimation(".green");
            break;
        case 1:
            redSound.play();
            buttonAnimation(".red");
            break;
        case 2:
            yellowSound.play();
            buttonAnimation(".yellow");
            break;
        case 3:
            blueSound.play();
            buttonAnimation(".blue");
            break;
    }
}


function buttonAnimation(currentButton) {
    var activeButton = document.querySelector(currentButton);
    activeButton.classList.add("pressed");


    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

