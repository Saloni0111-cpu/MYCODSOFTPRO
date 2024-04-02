let output = document.getElementById('output');
let expression = '';

function clearOutput() {
    expression = '';
    output.innerText = '';
}

function appendToOutput(value) {
    expression += value;
    output.innerText = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        output.innerText = result;
        expression = result.toString(); // Store the result for further calculations
    } catch (error) {
        output.innerText = 'Error';
        expression = ''; // Reset expression on error
    }
}
