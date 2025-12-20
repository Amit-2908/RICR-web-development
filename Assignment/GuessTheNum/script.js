let randomNum = Math.floor(Math.random()*10+1);
function Guess(){
    let GuessNum = document.getElementById("GuessNumber").value;

    
    let disp = document.getElementById("Display");
    if(GuessNum == randomNum){
        
        disp.innerText = "Congratulation!👏 you corret guess.";
        disp.style.fontSize = "40px";
        disp.style.color = "green" ;  
    }else if(GuessNum < randomNum){
        disp.innerText = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
        disp.style.fontSize = "30px";
        disp.style.color = "red" ;
    }else if(GuessNum > randomNum){
        disp.innerText = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
        disp.style.fontSize = "30px";
        disp.style.color = "red" ;
    }

    
    
}
