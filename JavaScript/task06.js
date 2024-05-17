

function factorial(n) {
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }

}
document.write("<h2>Factorial</h2>");


let num = 5;


let result = factorial(num);


document.write(`<p> Factorial of ${num} is: ${result}</p>`);

