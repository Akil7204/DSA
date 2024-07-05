// Write a recursive function to reverse a string.

function revString(str) {
  if (str <= 1) {
    return str;
  }

  return revString(str.substr(1)) + str[0];
}

const string = "akil";

console.log(revString(string));
