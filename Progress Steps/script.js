const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentAcive = 1; 

next.addEventListener("click", () => {
    currentAcive++;
    if(currentAcive > steps.length){
        currentAcive = steps.length;
    }
    update(); 
});

prev.addEventListener("click", () => {
    currentAcive--;
    if (currentAcive < 1) {
        currentAcive = 1;
    }
    update();
});

function update() {
    steps.forEach((step, indx) => {
        if (indx < currentAcive) {
            step.classList.add("active");
        }else {
            step.classList.remove("active");
        }
    });

    progress.style.width = ((currentAcive - 1) / (steps.length - 1)) * 100 + "%";
    if (currentAcive === 1) {
        prev.disabled = true;
    }else if(currentAcive === steps.length) {
        next.disabled = true; 
    }else{
        prev.disabled = false; 
        next.disabled = false; 
    }
};