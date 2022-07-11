// events listeners sequence... event listeners are called to a particular event to happen (an event could be a mouse click, window resizing, etc)
// 1. wait for the DOM to finish loading before running the game
// 2. get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {                  // DOMContentLoaded = fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    let buttons = document.getElementsByTagName("button");                  // returns all 5 elements of buttons - see index.HTML
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {              // "this" will refer to a specific button, iw next button is clicked, then this button turns into the specific
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }

})

//  this below are docstrings - very useful to create explanatory strings of functions, in this case - runGame
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;                          // generates a random number between 1 and 25
    let num2 = Math.floor(Math.random() * 25) + 1;
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}