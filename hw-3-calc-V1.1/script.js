let operation = prompt('Choose operation: (+, -, /, *, %, cos, sin, pow)');
let angle;
let base;
let exponent;
let firstOperand;
let secondOperand;
let result;

if (operation == 'cos') {
    angle = +prompt('Enter angle value:');
    result = Math.cos(angle);
}
    else if (operation == 'sin') {
        angle = +prompt('Enter angle value:');
        result = Math.sin(angle);
    }
    else if (operation == 'pow') {
        base = +prompt('Enter base :');
        exponent = +prompt('Enter exponent :');
        result = Math.pow(base, exponent);
    }
    else {
        firstOperand = +prompt('Enter first operand:');
        secondOperand = +prompt('Enter second operand:');

        if (operation == '+') {
            result = firstOperand + secondOperand;
        }  
            else if (operation == '-') {
                result = firstOperand - secondOperand;
            }
            else if (operation == '*') {
                result = firstOperand * secondOperand;
            }
            else if (operation == '/') {
                result = firstOperand / secondOperand;
            }
            else if (operation == '%') {
                result = firstOperand / 100 * secondOperand;
            }
            else {
                alert('Wrong input operation');
            }
        }
console.log('Result: ' + result);

