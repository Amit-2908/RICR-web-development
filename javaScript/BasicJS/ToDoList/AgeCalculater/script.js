function calculate(){
    const db = document.getElementById("DateOfBirth").value;
    const dob = new Date(db);
    const today = new Date();   
    
   let age = today.getFullYear()-dob.getFullYear();
   const monthDifference = today.getMonth()-dob.getMonth();


   if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())){
    age--;
   }

   document.getElementById('result').innerText = `your age is ${age} year.`;
}