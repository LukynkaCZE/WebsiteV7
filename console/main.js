window.addEventListener('load', (event) => {
    var loadTime = ((window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart) / 1000).toFixed(2)
    log(ConsoleMessageType.SUCCESS, `Page loaded in ${loadTime} seconds`)
    sendWelcomeMessage()
});

function sendWelcomeMessage() {
    setTimeout(function(){clear()}, 1000)
    setTimeout(function(){log(ConsoleMessageType.SHELL, "sh ./welcome.sh")}, 1500)
    setTimeout(function(){sendMotd()}, 1600)
}

function sendMotd() {
    var motd = [
        " _           _                _                   ",
        "| |         | |              | |                  ",
        "| |    _   _| | ___   _ _ __ | | ____ _   ___ ____",
        "| |   | | | | |/ / | | | '_ \\| |/ / _` | / __|_  /",
        "| |___| |_| |   <| |_| | | | |   < (_| || (__ / / ",
        "\\_____/\\__,_|_|\\_\\\\__, |_| |_|_|\\_\\__,_(_)___/___|    Version 7.0",
        "                   __/ |                          ",
        "                  |___/                           ",
        "",
        "Hi there! My name is <b><span class=\"main\">Maya</span>!",
        "<b>Welcome to my personal website!</b>",
        "",
        "<span class=\"full-highlight\">HEADS UP!</span> This website is still in developement and doesnt represent the final version!",
        "<span class=\"full-accessory\">OPEN SOURCE!</span> This website is open source at <a href=\"https://github.com/LukynkaCZE/WebsiteV7\">https://github.com/LukynkaCZE/WebsiteV7</a>",
        "",
        "💻 Type <b><span class=\"accessory\">\"projects\"</span></b> to see all of my projects",
        "✨ Type <b><span class=\"accessory\">\"socials\"</span></b> to see all of my socials",
        "📝 Type <b><span class=\"accessory\">\"resume\"</span></b> to download my resume",
        "",
    ]
    for (var msg of motd) {
        log(ConsoleMessageType.PLAIN, msg)
    }
    log(ConsoleMessageType.SHELL, "ha you cannot type yet <3")
}
