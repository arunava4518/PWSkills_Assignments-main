
function calculateBMI(weight, height) {
   
    let bmi = weight / (height * height);
    return bmi;
}


let weight = 70;
let height = 1.75; 

let bmi = calculateBMI(weight, height);


console.log("Your BMI is: " + bmi.toFixed(2)); 

if (bmi < 18.5) {
    console.log("Category: Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Category: Normal weight");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Category: Overweight");
} else {
    console.log("Category: Obesity");
}
