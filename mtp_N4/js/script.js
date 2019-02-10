'use strict';


// Function to get salary
function getSalary (){
  let salarytStr = document.querySelector('#salary').value;
  let salary = (salarytStr == NaN) ? 0 : Number(salarytStr);
  if (salaryCheck(salary)){
    return salary;
  }
  return 0;
}


// This function is called when the user clicks on the button
function calculate (){
  let salary = getSalary();
  if (salary > 0) {
    // return calculateTax(salary);
    let deductions = calculateTax(salary);
    document.getElementById("deductions").innerHTML = deductions.toFixed(2);
    document.getElementById("net").innerHTML = netIncome(salary, deductions).toFixed(2);
  }else {
    document.getElementById("deductions").innerHTML = 0;
  }
}


// Function to validate the type of salary
function salaryCheck (salary){
  if (salary === 'undefined') {
    alert('Please input a salary');
    return false;
  } else if (salary <= 0 || salary > 99999999) {
    alert('Please input a salary from 0 until $99,999,999');
    return false;
  } else if (isNaN(salary)){
    alert('Please input a rational number');
    return false;
  }
  return true;
}

// This fuctions does the logical calculation
function calculateTax (salary) {
  let tax = 0;

  if (salary >= 42705 && salary < 85405){
    tax = (salary - 42705) * 0.2;
  }
  else if (salary >= 85405 &&  salary < 103915) {
    tax = (salary - 85405) * 0.24 + (85405 - 42705) * 0.2;
  }
  else if (salary >= 103915) {
    tax = (85405 - 42705) * 0.2 +(103915 - 85405) * 0.24 + (salary - 103915) * 0.2575;
  }
  return tax;
}


function netIncome(salary, deductions){
  return salary - deductions;
}
