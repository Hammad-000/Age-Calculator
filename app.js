document.getElementById("submit").addEventListener("click", function() {
    const birthdate = document.getElementById("birthdate").value;
    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result");
    
    resultBox.classList.remove("hidden");
    
    if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const m = today.getMonth() - birthDateObj.getMonth();
 
        if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }


        
        resultText.classList.remove("text-red-400");
        resultText.classList.add("text-emerald-400");
        resultText.innerText = `You are ${age} years old `;
    } else {
        resultText.classList.remove("text-emerald-400");
        resultText.classList.add("text-red-400");
        resultText.innerText = "Please enter a valid birthdate.";
    }
    
});
