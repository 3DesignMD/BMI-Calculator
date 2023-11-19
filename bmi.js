window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Bitte gib eine echte Größe an";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Bitte gib eine echtes Gewicht an";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Untergewicht: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Übergewicht: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Adipositas 1: ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Adipositas 2: ${bmi}`;
    } else {
        result.innerText = `Adipositas <2: ${bmi}`;
    }
}
