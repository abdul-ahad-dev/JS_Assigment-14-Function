function counting(sPoint=1, ePoint) {
    for (let i = sPoint; i <= ePoint ; i++) {
        document.write(`<p> ${i} </p>`);
    }
}


document.write("<h2>Print Counting</h2>");


let startPoint = +prompt("Enter starting point");

let endPoint = +prompt("Enter ending point");



document.write(`<p>counting start from ${startPoint} and end form ${endPoint} </p>`);


counting(startPoint, endPoint);




