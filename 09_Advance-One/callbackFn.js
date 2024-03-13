function AddTwoNos(num1, num2, printFn){   // Callback Fn.
    let res = num1 + num2;
    printFn(res);
}

function display(res){
    console.log(res);
}

// let ans = 69 + 420;
// console.log(ans);
AddTwoNos(69, 420, display);



function square(n){
    return n*n;
}
function SumOfSquare(a, b){
    let n1 = square(a);
    let n2 = square(b);
    return n1+n2;
}

console.log(SumOfSquare(2,3)); 

