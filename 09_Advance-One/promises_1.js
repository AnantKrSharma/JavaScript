/* Promise States: 
   Pending, Resolved, Rejected */ 

let p = new Promise(function(onDone){
    onDone("YO, Done")
})

function afterPromise(data){
    console.log(p);
    console.log(data);
}

p.then(afterPromise)


// asynchronous code without promises: 
function AKSprint(callbackFn){
    setTimeout(callbackFn, 2000)
}

AKSprint(function(){
    console.log("YO");
});


// asynchronous code with promises:
function AKSprint2(){
    return new Promise(function(whenDone){
        setTimeout(whenDone, 4000);
    })
}

AKSprint2().then(function(){
    console.log("YO YO");
});



//  Promise Example with the use of Object:

/*  The Promise constructor takes two arguments: resolve and reject.
    the resolve function should only take a single argument, which
    represents the fulfilled value of the Promise.   */

    function PromiseFn(){
    return new Promise(function(onDone){
        let a = 5;
        let b = 23;
        onDone({n1: a, n2:b});
    });
}

function calculate(obj){
    console.log(obj["n1"]+obj["n2"]);
}

PromiseFn().then(calculate);