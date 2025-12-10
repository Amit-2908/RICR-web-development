function search() {
  const state = document.getElementById("State").value.trim().toLowerCase();
    
  if(!state){
    alert("State Empty")
    return
  }
  
  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
  flag.style.position = "absolute";

  if (state === "delhi") {
    flag.style.top = "140px";
    flag.style.left = "680px";
    flag.title = "State: Delhi \nCapital: New Delhi";
  }
  if(state === "madhya pradesh" || state === "mp"){
    flag.style.top = "250px";
    flag.style.left = "700px";
    flag.title = "State: Madhya Pradesh \nCapital: Bhopal";
  }
  if(state === "ladakh"){
    flag.style.top = "50px";
    flag.style.left = "680px";
    flag.title = "State: Ladakh \nCapital: Leh";
  }
  if(state === "jammu & kashmir"){
    flag.style.top = "60px";
    flag.style.left = "650px";
    flag.title = "State: Jammu & Kashmir \nCapital: Srinagar";
  }
  if(state === "himachal pradesh"){
    flag.style.top = "90px";
    flag.style.left = "690px";
    flag.title = "State: Himachal Pradesh \nCapital: Shimla";
  }
  if(state === "punjab"){
    flag.style.top = "100px";
    flag.style.left = "650px";
    flag.title = "State: Punjab \nCapital: Chandigarh";
  }
  if(state === "uttarakhand"){
    flag.style.top = "110px";
    flag.style.left = "700px";
    flag.title = "State: Uttarakhand \nCapital: Dehradun";
  }
  if(state === "haryana"){
    flag.style.top = "130px";
    flag.style.left = "670px";
    flag.title = "State: Haryana \nCapital: Chandigarh";
  }
  if(state === "up" || state === "uttar pradesh"){
    flag.style.top = "180px";   
    flag.style.left = "740px";
    flag.title = "State: Uttar Pradesh \nCapital: Lucknow";
  }
  if(state === "rajasthan"){
    flag.style.top = "180px";   
    flag.style.left = "620px";
    flag.title = "State: Rajasthan \nCapital: Jaipur";
  }
  if(state === "bihar"){
    flag.style.top = "200px";   
    flag.style.left = "810px";
    flag.title = "State: Bihar \nCapital: Patna";
  }
  if(state === "jharkhand"){
    flag.style.top = "250px";   
    flag.style.left = "800px";
    flag.title = "State: Jharkhand \n Capital: Ranchi";
  }
  
  if(state === "west bengal"){
    flag.style.top = "250px";   
    flag.style.left = "850px";
    flag.title = "State: West Bengal \nCapital: Kolkata";
  }
  if(state === "chhattisgarh"){
    flag.style.top = "280px";   
    flag.style.left = "750px";
    flag.title = "State: Chhattisgarh \nCapital: Raipur";
  }
  if(state === "odisha"){
    flag.style.top = "280px";   
    flag.style.left = "800px";
    flag.title = "State: Odisha \nCapital: ottia";
  }
  if(state === "maharashtra"){
    flag.style.top = "310px";   
    flag.style.left = "650px";
    flag.title = "State: Maharashtra \nCapital: Mumbai";
  }
  if(state === "gujarat"){
    flag.style.top = "250px";   
    flag.style.left = "590px";
    flag.title = "State: Gujarat \nCapital: Ahemdabad";
  } 
  if(state === "goa"){
    flag.style.top = "380px";   
    flag.style.left = "620px";
    flag.title = "State: Goa\nCapital: Panaji";
  }  


  if(state === "karnataka"){
    flag.style.top = "380px";   
    flag.style.left = "650px";
    flag.title = "State: Karnataka \nCapital: Bangluru";
  }
  if(state === "telangana"){
    flag.style.top = "320px";   
    flag.style.left = "700px";
    flag.title = "State: Telangana\nCapital: Hyderabad";
  }
  if(state === "andhra pradesh"){
    flag.style.top = "400px";   
    flag.style.left = "700px";
    flag.title = "State: Andhra Pradesh\nCapital: Amaravati";
  } 
  if(state === "tamil nadu"){
    flag.style.top = "480px";   
    flag.style.left = "680px";
    flag.title = "State: Tamil Nadu\nCapital: Chennai";
  } 
  
  if(state === "kerala"){
    flag.style.top = "480px";   
    flag.style.left = "650px";
    flag.title = "State: Kerala\nCapital: Thiruvananthapuram";
  }
  if(state === "mizoram"){
    flag.style.top = "250px";   
    flag.style.left = "920px";
    flag.title = "State: Mizoram\nCapital: Aizawl";
  }
  if(state === "manipur"){
    flag.style.top = "220px";   
    flag.style.left = "930px";
    flag.title = "State:Manipur\nCapital: Imphal";
  } 
  if(state === "nagaland"){
    flag.style.top = "190px";   
    flag.style.left = "937px";
    flag.title = "State: Nagaland\nCapital: Kohima";
  }
  
  
  if(state === "arunachal pradesh"){
    flag.style.top = "160px";   
    flag.style.left = "930px";
    flag.title = "State:Arunachal Pradesh\nCapital: Itanagar";
  } 
  if(state === "sikkim"){
    flag.style.top = "160px";   
    flag.style.left = "850px";
    flag.title = "State: Sikkim\nCapital: Gangtok";
  }
  if(state === "meghalaya"){
    flag.style.top = "200px";   
    flag.style.left = "900px";
    flag.title = "State: Meghalaya\nCapital: Shillong";
  }
   if(state === "assam"){
    flag.style.top = "195px";   
    flag.style.left = "920px";
    
  }
  document.getElementById("Map").appendChild(flag);
  document.getElementById("State").value=""
}