function Login(){
    console.log("Login Button Clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;
    const chekbox = document.getElementById("CheckBox").value;

    console.log("Email:" ,em);
    console.log("Password:" ,ps);
    console.log("checkbox:" ,chekbox);

    document.getElementById("LoginEmail").value="";
    document.getElementById("LoginPassword").value="";
    document.getElementById("CheckBox").value=""; 
}

function Registration(){
    console.log("Registration Button Clicked");

    const Name=document.getElementById("UserName").value;
    const em = document.getElementById("UserEmail").value;
    const createPassword=document.getElementById("CreatePassword").value; 
    const confirmPassword=document.getElementById("ConfirmPassword").value;
    const chekbox = document.getElementById("CheckBox").value;

    console.log("Name:",Name);
    console.log("Email:" ,em);
    console.log("CREATE - Password:" ,createPassword);
    console.log("Password:" ,confirmPassword);
    console.log("checkbox:" ,chekbox);

    
    document.getElementById("UserName").value="";
    document.getElementById("UserEmail").value="";
    document.getElementById("CreatePassword").value="";
    document.getElementById("ConfirmPassword").value="";
    document.getElementById("CheckBox").value=""; 
}
