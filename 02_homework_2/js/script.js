'use strict';

// This function is called when the user clicks on the button
function calculate (){
  let salarytStr = document.getElementById('salary').value;
  let salary = Number(salaryStr);
  calculateTax(salary);
}


// This fuctions does the logical calculation
function calculateTax (salary) {
  if (salary >= 42705 && sal < 85405){
    tax = (salary - 42705) * 0.2;
  }
  else if (salary >= 85405 &&  salary < 103915) {
    (salary - 85405) * 0.24 + (85405 - 42705) * 0.2;
  }
  else if (salary >= 103915) {
    (85405 - 42705) * 0.2 +(103915 - 85405) * 0.24 + (salary - 103915) * 0.2575;
  }
}

let tax = calculateTax(salary);

console.log(salary - tax);
