
    document.getElementById("submit").addEventListener("click", function() {
    
        const birthdate = document.getElementById("birthdate").value;
        
        if (birthdate) {
          
            const birthDateObj = new Date(birthdate);
            const today = new Date();
            
           
            let age = today.getFullYear() - birthDateObj.getFullYear();
            const m = today.getMonth() - birthDateObj.getMonth();
     
            if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }
            
          
            document.getElementById("result").innerText = `You are ${age} years old <3 `;
        } else {
            document.getElementById("result").innerText = "Please enter a valid birthdate.";
        }
    });