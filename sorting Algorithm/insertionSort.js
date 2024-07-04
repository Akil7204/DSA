// insertion sort

function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let insert = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > insert){
            arr[j + 1] = arr[j];
            j = j-1;
        }
        arr[j + 1] = insert
    }
    return arr
}

const arr = [2,1,5,4,3,6]

console.log(insertion(arr));