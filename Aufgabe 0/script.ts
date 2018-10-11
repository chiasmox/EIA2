function begruessung() {
var input : string; 
var input = prompt ("Insert your name here!");
     var text : string;
    
    text = "Hey, what's up ";
    text += input;
    text += "?";
    document.getElementById("content").innerHTML +=text;
     
    console.log("Hey, what's up " +input +  "?");
    
 }

  document.addEventListener('DOMContentLoaded', begruessung);