// Write a recursive function to calculate the power of a number.

function power(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * power(base, expo - 1);
  }
}

console.log(power(2, 3));
