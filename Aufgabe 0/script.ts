function begruessung() {
var input : string; 
var input = prompt ("Insert your name here!");
     var text : string;
    
    text = "Hey, what's up ";
    text += input;
    text += "?";
    text += document.getElementById("content").innerHTML;
     
    console.log("Hey, what's up " +input +  "?");
    
 }

  document.addEventListener('DOMContentLoaded', begruessung);