function start(){
    console.log(" Game started");
    document.getElementById("player1").disabled = false;
    document.getElementById("btnRestart").disabled = false;
    document.getElementById("start").disabled = true;
}

function restart(){
    window.location.reload();
}


function p1play(){
    console.log("Player1Playing");
    let Score = Number(document.getElementById("p1sc").innerText);

    const DF = Math.floor(Math.random()*6) + 1;

    
  switch (DF) {
    case 1: {
      document.getElementById("p1dice").src = "./image/1.png";
      break;
    }
    case 2: {
      document.getElementById("p1dice").src = "./image/2.png";
      break;
    }
    case 3: {
      document.getElementById("p1dice").src = "./image/3.png";
      break;
    }
    case 4: {
      document.getElementById("p1dice").src = "./image/4.png";
      break;
    }
    case 5: {
      document.getElementById("p1dice").src = "./image/5.png";
      break;
    }
    case 6: {
      document.getElementById("p1dice").src = "./image/6.png";
      break;
    }
    // default: {
    //   document.getElementById("p1dice").src = "./image/6.png";
    // }
  }


     
    if(DF===6){
        document.getElementById("player1").disabled = true;
        document.getElementById("player2").disabled = false;
    }else{
        Score = Score + DF;
        document.getElementById("p1sc").innerText = Score;
    }
}


function p2play(){
    console.log("Player2Playing");

    let Score = Number(document.getElementById("p2sc").innerText);

    const DF = Math.floor(Math.random()*6) + 1;

  document.getElementById("p2dice").src = `./image/${DF}.png`
    if(DF===6){
        document.getElementById("player1").disabled = false;
        document.getElementById("player2").disabled = true;
    }else{
        Score = Score + DF;
        document.getElementById("p2sc").innerText = Score;
    }
}