// Write a recursive function to reverse a string.

// function revString(str) {
//   if (str <= 1) {
//     return str;
//   }

//   return revString(str.substr(1)) + str[0];
// }
function revstring(str, index = str.length - 1) {
  if (index < 0) {
    return "";
  }

  return str[index] + revstring(str, index - 1);
}

const string = "akil";

console.log(revstring(string));

function sum(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }

  return arr[index] + sum(arr, index + 1);
}


console.log(sum([1,2,3,4,5]));

