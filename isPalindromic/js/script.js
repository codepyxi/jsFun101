'use strict';

// Create a function to check if it is isPalindromic
// Algorithm:
// String length
// If even, cut in half
// If odd, split with the middle letter

// MY ANSWER:
// let htmlInput = "kayak";
// function isPalindromic (htmlInput) {
//   if (htmlInput.reverse(htmlInput.split('') === htmlInput) ){
//     return true;
//   }
// }

function isPalindromic(htmlInput){
  // let htmlInputArray = htmlInput.split('');
  // htmlInputArray.reverse(); // NOTE: This is dangerous b/c I am mutating the array
  // let reverseHtmlInput = htmlInputArray.join(',');
  // console.lot(reverseHtmlInput);

  // let reverseHtmlInput = htmlInputArray.join('');
  // if (htmlInput === reverseHtmlInput) {
  //   return true;
  // }else {
  //   return false;
  // }
}




function isPalindromic2 (userInput) {
  return(userInput
    .split('')
    .reverse()
    .join('') === userInput);
}





// TESTING:
isPalindromic('mom'); // Here we call the function but we do not do anything with the return value
console.log(isPalindromic('mom'));


// let test = 'Mom';
// if (isPalindromic(test));
