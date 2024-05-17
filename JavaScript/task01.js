function currentDateNTime() {
    let now = new Date()
    return now
}
let dateNTime = currentDateNTime()
document.write("<h2>Current Date And Time</h2>")
document.write(`<p> ${dateNTime} </p>`)