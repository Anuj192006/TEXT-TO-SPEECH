let x= new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click",() =>{x.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(x);
});
