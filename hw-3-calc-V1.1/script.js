const operation = prompt('Choose operation: (+, -, /, *, %, cos, sin, pow)');
if (operation == 'cos') {
    const angle = +prompt('Enter angle value:');
    const result = Math.cos(angle);
    console.log(result);
}
    else if (operation == 'sin') {
        angle = +prompt('Enter angle value:');
        result = Math.sin(angle);
        console.log(result);
    }

    else {
        const firstOperand = +prompt('Enter first operand:');
        const secondOperand = +prompt('Enter second operand:');

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
            else if (operation == 'pow') {
                result = Math.pow(firstOperand, secondOperand);
            }
            else {
                alert('Wrong input operation');
            }

        console.log(result);
    }
