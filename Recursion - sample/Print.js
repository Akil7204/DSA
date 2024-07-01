
function print(n){

    if(n < 1){
        return;
    }

    print(n - 1);
    console.log(n);

}

const n = 10;
print(n)

