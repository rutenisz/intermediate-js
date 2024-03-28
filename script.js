// generate a love calculator

const yourName = prompt("Write your name:");
const crushName = prompt("Write your crushes  name:");

let n = Math.floor(Math.random() * 100) + 1;
console.log("You are a match at " + n + "%");

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.
function BMI(weight, height) {
  const bmiCalculator = weight / (height * height);
  const roundedBmi = Math.round(bmiCalculator);

  if (roundedBmi < 18.5) {
    return "Your BMI is " + roundedBmi + " so you're underweight.";
  }

  if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    return "Your BMI is " + roundedBmi + " so you're normal weight.";
  }

  if (roundedBmi > 24.9) {
    return "Your BMI is " + roundedBmi + " so you're overweight.";
  }
}

console.log(BMI(74, 1.78));

// Leap year function

function isLeapYear(year) {
  if ((year % 4 === 0 && 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
