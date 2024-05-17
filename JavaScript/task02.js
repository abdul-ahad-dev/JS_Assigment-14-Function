function greetMsg(firstName, lastName) {
    let greet = `Asalamualykum, ${firstName} ${lastName}`
    return greet
}

let firstName = "Abdul";
let lastName = "Ahad";

let msg = greetMsg(firstName, lastName)

document.write("<h2>Greeting Message</h2>")
document.write(`<p> ${msg} </p>`)
