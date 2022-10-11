let buttons = document.querySelectorAll("button");
let counterNumber = document.querySelector(".counter-number");
let count = 0;

counterNumber.textContent = count;
counterNumber.style.color = "white";

buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        if(button.classList.contains("lower-button")) {
            count--;
        }
        else if (button.classList.contains("add-button")) {
            count++;
        }
        
        if (count < 0) {
            counterNumber.style.color = "red";
        }
        else if (count > 0) {
            counterNumber.style.color = "green";
        }
        else {
            counterNumber.style.color = "white";
        }
        
        counterNumber.textContent = count;
    })
});


