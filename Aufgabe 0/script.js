function begruessung() {
    var input;
    var input = prompt("Insert your name here!");
    var text;
    text = "Hey, what's up ";
    text += input;
    text += "?";
    document.getElementById("content").innerHTML += text;
    console.log("Hey, what's up " + input + "?");
}
document.addEventListener('DOMContentLoaded', begruessung);
//# sourceMappingURL=script.js.map