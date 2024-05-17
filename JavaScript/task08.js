function calculateSquare(x) {

    return x * x;

}



function calculateHypotenuse(base, perpendicular) {

    
    let baseSquare = calculateSquare(base);

    let perpendicularSquare = calculateSquare(perpendicular);



    let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    
    return hypotenuse;

}



let base = 3;

let perpendicular = 4;

let hypotenuse = calculateHypotenuse(base, perpendicular);




document.write("<h2>Compute Hypotenuse of a right angle triangle</h2>");


document.write(`<p>The hypotenuse of the triangle with base ${base} and perpendicular ${perpendicular} is : ${hypotenuse}</p>`);
