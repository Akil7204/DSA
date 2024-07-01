// Greatest Common Divisor (GCD)

// Write a recursive function to find the greatest common divisor of two numbers.

function gcd(a, b){
    if(b === 0){
        return a;
    } else {
        return gcd(b, (a % b))
    }
}

console.log(gcd(48, 18));


