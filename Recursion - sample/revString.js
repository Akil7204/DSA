// Write a recursive function to reverse a string.

function revString(str){
    if(str === ""){
        return ""
    } else {
        return revString(str.substr(1)) + str[0];
    }
}

const string = "Sanooj";

console.log(revString(string));