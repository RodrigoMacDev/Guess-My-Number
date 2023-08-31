"use strict";

const initFunc = () => {
    let number = Math.trunc(Math.random() * 20 + 1);
    let score = 20;
    let highscore = 0;
    console.log(number);

    const displayMessage = (message) =>
        (document.querySelector(".message").textContent = message);

    const backgroundColor = (color) =>
        (document.querySelector("body").style.backgroundColor = color);

    const domNumberContent = (number) =>
        (document.querySelector(".number").textContent = number);

    const domNumberWidth = (number) =>
        (document.querySelector(".number").style.width = number);

    const domScoreContent = (score) =>
        (document.querySelector(".score").textContent = score);

    const domGuessValue = (value) =>
        (document.querySelector(".guess").value = value);

    const checkFunc = () => {
        let guess = Number(document.querySelector(".guess").value);

        if (!guess) {
            displayMessage("Do a guess first");
        } else if (guess === number) {
            displayMessage("Correct number, you have won!");
            backgroundColor("#60b347");
            domNumberWidth("30rem");
            domNumberContent(number);

            if (score > highscore) {
                highscore = score;
                domHighscore(highscore);
            }
        } else if (guess !== number) {
            if (score > 1) {
                displayMessage(
                    guess > number
                        ? "Too high, try again!"
                        : "Too low, try again!"
                );
                score--;
                domScoreContent(score);
            } else {
                displayMessage("You Lost the Game :(");
                domScoreContent(0);
            }
        }
    };

    const againFunc = () => {
        number = Math.trunc(Math.random() * 20 + 1);
        console.log(number);
        score = 20;
        displayMessage("Start Guessing...");
        domScoreContent(score);
        domNumberContent("?");
        backgroundColor("#222");
        domNumberWidth("15rem");
        domGuessValue("");
    };
    const domHighscore = highscore;

    document.querySelector(".highscore").textContent = highscore;

    document.querySelector(".check").addEventListener("click", checkFunc);

    document.querySelector(".again").addEventListener("click", againFunc);
};

initFunc();
