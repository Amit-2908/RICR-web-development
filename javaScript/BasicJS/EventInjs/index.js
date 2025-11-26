function on(){
    document.getElementById("bulb").style.background = "Yellow";
}
function off(){
    document.getElementById("bulb").style.backgroundColor ="white";
}

function on_red(){
    document.getElementById("bulb").style.background = "red";   
}
function on_blue(){
    document.getElementById("bulb").style.background = "blue";   
}

const userColor = document.getElementById("color");
// console.log(userColor);
userColor.addEventListener("change", ()=> changeBulbColor(userColor.value) );

function changeBulbColor(color) {
    document.getElementById("bulb").style.backgroundColor = color;
}
// kk
function SB_Control(){
    const btn = document.getElementById("SB_btn");
    if(btn.innerText === "on"){
        document.getElementById("SB_btn").innerText = "off";
        document.getElementById("smartBulb").classList.add("on");
    }else{
        document.getElementById("SB_btn").innerText = "on";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function SB_Control2(){
    document.getElementById("smartBulb").classList.add("on");
    document.getElementById("smartBulb").classList.add("off");
}





