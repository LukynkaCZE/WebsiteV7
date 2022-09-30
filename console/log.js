var messages = []

//yes im making types in javascript. cry about it.
const ConsoleMessageType = {
    SUCCESS: 0,
    ERROR: 1,
    SHELL: 2,
    PLAIN: 3,
    BREAK: 4,
}

function log(type, message) {
    var body = document.getElementById("body")
    var newLineContainer = document.createElement("div")
    switch (type) {
        case ConsoleMessageType.SUCCESS:
            newLineContainer.innerHTML = `<p><span class="full-success">SUCCESS!</span> ${message}</p>`
            break         
        case ConsoleMessageType.ERROR:
            newLineContainer.innerHTML = `<p><span class="full-error">ERROR!</span> ${message}</p>`
            break         
        case ConsoleMessageType.SHELL:
            newLineContainer.innerHTML = `<p><span class="main">guest@lukynka.cz</span>: $~ ${message}</p>`
            break         
        case ConsoleMessageType.PLAIN:
            newLineContainer.innerHTML = `<p class="white"> ${message}</p>`
            break
        case ConsoleMessageType.BREAK:
            newLineContainer.innerHTML = `<br>`        
    }
    body.appendChild(newLineContainer)
    messages.push(newLineContainer)
}

function clear() {
    for (var msg of messages) {
        msg.remove()
    }
    messages = []
}

