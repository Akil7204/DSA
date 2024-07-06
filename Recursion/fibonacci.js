
function fab(n){
    if(n <= 0){
        return null;
    } else if(n === 1){
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fab(n - 1) + fab(n - 2);
    }
    
}

console.log(fab(10));

