function Input(char){
    // document.getElementById()
    if(char === '='){
      const exp =  document.getElementById("Dis").value;
        document.getElementById("Dis").value = eval(exp);
    }else if(char === 'C'){
        document.getElementById("Dis").value = ""
    }else{
       let exp = document.getElementById("Dis").value;
       exp = exp + char;
       document.getElementById("Dis").value = exp;
    }
}