/**
 * This script handles a simple number guessing game.
 * The user has to guess a randomly generated number between 1 and 20 within a limited number of attempts.
 */

window.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const form = document.querySelector("form");
    const input = document.querySelector(".input-box");
    const btn = document.querySelector(".btn");
    const startBtn = document.querySelector(".start-btn");
    const guessesDisplay = document.querySelector(".guesses");
    const attemptsDisplay = document.querySelector(".attempts-left");
    const msgDisplay = document.querySelector(".indicator");

    // Game state variables
    let guesses = [];
    let attempts = 10;
    let targetNumber;

    /**
     * Starts a new game by resetting the game state and generating a new target number.
     */

    const startNewGame = () => {
        targetNumber = Math.floor(Math.random() * 20 + 1);
        guesses = [];
        attempts = 10;
        input.disabled = false;
        btn.disabled = false;
        attemptsDisplay.innerText = attempts;
        guessesDisplay.innerText = "";
        msgDisplay.innerText = "";
        startBtn.classList.remove("active");
    }

    // Initial game setup
    startNewGame();
    startBtn.addEventListener("click", startNewGame);

    /**
     * Handles the form submission when the user makes a guess.
     * Validates the input, updates game state, and provides feedback to the user.
     */
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        input.focus();
        let inputValue = parseInt(input.value);

        if (input.value !== "") {
            if (attempts > 0) {
                attempts--;
                guesses.push(input.value);
                guessesDisplay.innerText = guesses.join(", ");
                attemptsDisplay.innerText = attempts;

                if (inputValue < targetNumber) {
                    msgDisplay.innerText = "Guessing value is low";
                } else if (inputValue > targetNumber) {
                    msgDisplay.innerText = "Guessing value is high";
                } else {
                    msgDisplay.innerText = "Congratulations! You win 😘😘";
                    input.disabled = true;
                    btn.disabled = true;
                    startBtn.classList.add("active");
                }

                input.value = "";
            } else {
                input.disabled = true;
                btn.disabled = true;
                startBtn.classList.add("active");
            }
        } else {
            msgDisplay.innerText = "Input field is blank!";
        }
    });
});