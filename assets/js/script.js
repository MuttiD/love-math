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
                runGame(gameType);                                         //           original code here (just for testing): alert(`You clicked ${gameType}`);
            }
        })
    }

    runGame("addition");                                                    // default game, as soon as the page is loaded


})

//  this below are docstrings - very useful to create explanatory strings of functions, in this case - runGame
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;                          // generates a random number between 1 and 25
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);

    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;                  // throw statement will stop the game from running. see more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    }
}

runGame();

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);     // using parseInt to get an integer number 
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = (document.getElementById('operator').innerText);

    if (operator === "+") {
        return [operand1 + operand2, "addition"];

    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}