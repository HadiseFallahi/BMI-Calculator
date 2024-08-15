"use strict";

var weight, height, result, bmi;

function reset() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
}

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  height /= 100;
  bmi = weight / height ** 2;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.5) {
    result = `Your BMI is ${bmi} which means you are Underweight.`;
    reset();
  } else if (bmi >= 18.5 && bmi <= 24.5) {
    result = `Your BMI is ${bmi} which means You are Normal.`;
    reset();
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = `Your BMI is ${bmi} which means You are Overweight.`;
    reset();
  } else if (bmi >= 30) {
    result = `Your BMI is ${bmi} which means You are Obesity.`;
    reset();
  }

  if (weight === 0) {
    document.getElementById("result").innerHTML = "Please fill out the fields!";
  } else if (height === 0) {
    document.getElementById("result").innerHTML = "Please fill out the fields!";
  } else {
    document.getElementById("result").innerHTML = result;
  }
  if (weight < 0) {
    document.getElementById("result").innerHTML = "Negative Values not Allowed";
  }
}
