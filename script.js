// Get the display element from the DOM
const display = document.getElementById("display");

/**
 * Append the given input to the display
 * @param {string} input - The input to be appended
 */
function appendToDisplay(input) {
    display.value += input;
}

/**
 * Clear the display
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Calculate the expression in the display
 * and update the display with the result
 */
function calculate() {
    try {
        // Evaluate the expression and update the display
        display.value = eval(display.value);
    } catch (error) {
        // If there is an error, show "Error" in the display
        display.value = "Error";
    }
}
