const kilogram = document.getElementById("kilogram");
const centimeters = document.getElementById("centimeters");
const feet = document.getElementById("feet");
const calcbtn = document.getElementById("calcbtn");
const pounds = document.getElementById("pounds");
const inches = document.getElementById("inches");
const result = document.getElementById("result");

function metricSystem() {
  let feetValue = Number(feet.value);
  let incheValue = Number(inches.value);
  let kgValue = Number(kilogram.value);
  //convert inch to feet
  let InchtoFeet = feetValue  + (incheValue/12);
  let FeettoMeter = InchtoFeet * 0.3048;
  /* let Poundtokilogram = poundValue * 0.453592; */
  let Bmitho = (kgValue / Math.pow(FeettoMeter,2));
  /* let englishBmi = (poundValue / Math.pow(InchtoFeet, 2)) * 703; */
  result.value = Bmitho.toFixed(2);
}

function runResult() {
  metricSystem();
}

calcbtn.addEventListener("click", runResult);
