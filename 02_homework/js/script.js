'use strict';

// This function is called when the user clicks on the button
function calculate (){
  let salarytStr = document.getElementById('salary').value;
  let salary = Number(salaryStr);
  calculateTax(salary);
}


// This fuctions does the logical calculation
function calculateTax (salary) {
  if (salary >= 42000 && sal < 85000){
    tax = (salary - 42000) * 0.2;
  }
  else if (salary >= 85000 &&  salary < 103000) {
    (salary - 85000) * 0.24 + (85000 - 42000) * 0.2;
  }
  else if (salary >= 103000) {
    (85000 - 42000) * 0.2 +(103000 - 85000) * 0.24 + (salary - 103000) * 0.2575;
  }
}

let tax = calculateTax(salary);

console.log(salary - tax);
