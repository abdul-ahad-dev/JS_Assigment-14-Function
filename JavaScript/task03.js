function sum(n1=0, n2=0) {
    return n1 + n2
}

document.write("<h2>Sum of Two number</h2>")
let num1 = +prompt('Enter first number')
let num2 = +prompt('Enter second number')

let add = sum(num1, num2)
document.write(`<p> Sum of ${num1} and ${num2} is: ${add}</p>`)