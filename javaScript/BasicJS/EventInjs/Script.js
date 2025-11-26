const userColor = document.getElementById("color");

userColor.addEventListener("change", ()=> changeBgColor(userColor.value) );

function changeBgColor(color) {
    document.getElementById("innerBox").style.backgroundColor = color;
    
}

const user = document.getElementById("head");
user.addEventListener("change", ()=> changeHeadColor(user.value) );
function changeHeadColor(head) {
    document.getElementById("itHead").style.color = head;
}

const para = document.getElementById("Para");
para.addEventListener("change", ()=> changeParaColor(para.value) );
function changeParaColor(Para) {
    document.getElementById("itPara").style.color = Para;
}