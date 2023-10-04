const weight = Number(prompt("Enter your weight in lbs"));
const height = Number(prompt("Enter your height in inches"));


function calc() {
    let bmi = (weight / (height * height) * 703).toFixed(2);
    alert(`Your BMI is ${bmi}`)
    {
        if (bmi < 18.5) {
            alert("You are underweight");
        }
        else if (bmi > 18.5 && bmi < 25) {
            alert("You are healthy");
        } 
        else {
            alert("You are overweight");
        }
    }
}
 const bmi = calc();
/*
function health() {
    const bmi = calc();

    if (bmi < 18.5) {
        alert("You are underweight");
    }
    else if (bmi > 18.5 & bmi < 25) {
        alert("You are healthy");
    } else {
        alert("You are overweight");
    }
}

health(); */