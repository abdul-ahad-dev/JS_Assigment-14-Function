function areaTriangle(l, b) {
    return l * b
}

let lenght = 8
let breath = 7


document.write("<h2>Area of Rectangle</h2>");


let area = areaTriangle(lenght, breath)

document.write(`<p>The triangle with lenght ${lenght} and breath ${breath} is : ${area}</p>`);
