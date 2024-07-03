// Write a function to check if a given string is a palindrome using a stack.

function ispalindrome(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== stack.pop()) {
      return false;
    }
  }
  return true;
}

let str = "malayalam";
let result = ispalindrome(str);
console.log(result);
