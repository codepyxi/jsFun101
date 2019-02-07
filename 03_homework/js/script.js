'use strict'

// DOCUMENTATION:
// https://www.w3schools.com/jsref/jsref_random.asp
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// BASIC SYNTAX WITH MULTIPLE PARAMETRES
// Generate random number function
function generatedRandomFromInterval(min = 0, max = 1000) {
  // return Math.floo(Math.random() * (max - min + 1) + min); // Not including the upper limit
  return Math.floo(Math.random() * (max - min + 1) + min); // Including the upper limit
  console.log(10);
  console.log(1, 10);
  console.log();
}


let generateRandomFatArrow = (min, max) => {return Math.floo(Math.random() * (max - min + 1) + min)};




function submitForm() {
  document
  .querySelector('.hide')
  .style = 'display: block';

  alert(isPalindromic(text));
}
