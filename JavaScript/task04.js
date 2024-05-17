function add(n1=0, n2=0) {
    return n1 + n2
}
function sub(n1=0, n2=0) {
    return n1 - n2
}
function mul(n1=0, n2=0) {
    return n1 * n2
}
function div(n1=0, n2=0) {
    if (n2 === 0) {
        return
    }
    return n1 / n2
}

document.write("<h2>Mini Calculator</h2>")
let num1 = +prompt('Enter first number')
let num2 = +prompt('Enter second number')
let operator = prompt('Enter operator (1: Addition, 2: Subtraction, 3: Multiplication, 4: Division')
let result
let opr = '';

switch (operator) {
    case '1':
        result = add(num1, num2)
        opr = 'Addition'
        break;

    case '2':
        result = sub(num1, num2)
        opr = 'Subtraction'
        break;

    case '3':
        result = mul(num1, num2)
        opr = 'Multiplication'
        break;
        
    case '4':
        result = div(num1, num2)
        opr = 'Division'
        break;
}

document.write(`<p> ${opr} of ${num1} and ${num2} is: ${result}</p>`)
