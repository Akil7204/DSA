
function prefix(arr){

    for(let i = 1; i < arr.length; i++){
        arr[i] = arr[i - 1] + arr[i];
    }
    return arr
}

const array = [1,2,3,4,5];

console.log(prefix(array));