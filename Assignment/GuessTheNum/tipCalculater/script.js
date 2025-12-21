
function Calculate(){
    let billAmount = document.getElementById("billAmount").value;
    
    let Tip = document.getElementById("Tip").value;
    
    let numOfPeople = document.getElementById("numOfPeople").value;
    
    let TotalAmount = billAmount*Tip/100;
    
    let totalAmount = document.getElementById("totalAmount").innerText = `${TotalAmount}$`;

    let PersonTip = TotalAmount/numOfPeople;
    
    let perPersonTip = document.getElementById("perPersonTip").innerText = `${PersonTip}$`;   
}
