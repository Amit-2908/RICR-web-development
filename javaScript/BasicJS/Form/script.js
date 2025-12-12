function Submit(){
    const nm = document.getElementById("fullName").value.trim();
    const em = document.getElementById("Email").value.trim();
    const pm = document.getElementById("Phone").value.trim();
    const db = document.getElementById("DOB").value.trim();

   
  
 document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  
  if (!nm) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  if (!em) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("EmailError").innerText = "Use Proper Email Format";
    return;
  }

  if (!pm) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(pm)) {
    document.getElementById("PhoneError").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
  }
 

    if (!db) {
    document.getElementById("NameError").innerText = "Required";
    return;
    } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(db.split("-")[0]);
    if (currentyear - birthyear < 17) {
      document.getElementById("DOBError").innerText =
        "You must be 18 years Old";
      return;
    }
  }

    const data = {
        fullName:nm,
        Email:em,
        Phone:pm,
        DOB:db,
    };
    console.log(data);
}