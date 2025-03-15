document.getElementById("calculateBMI").addEventListener("click", function () {
    const card = document.getElementById("flippedCard");
    card.classList.toggle("is-flipped");
});

function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        let BMI = (weight / Math.pow(height, 2)).toFixed(2);
        document.getElementById('bmiOutput').value = `BMI: ${BMI}`;
    } else {
        document.getElementById('bmiOutput').value = "Invalid Input"; 
    }
}

document.querySelector(".bmicalc").addEventListener("click", calculateBMI);
