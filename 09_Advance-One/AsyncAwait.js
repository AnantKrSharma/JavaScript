// promise code without async-await:

function printData(){
    return new Promise(function(whenDone){
        setTimeout(function(){
            whenDone("Hello there..")
        }, 2000)
    })
}

printData().then(function(data){
    console.log(data);
})


// promise code with async-await:

function printData2(){
    return new Promise(function(afterDone){
        setTimeout(function(){
            afterDone("General Kenobi!!")
        }, 4000)
    })
}

async function starWars(){
    console.log(printData2());
    let a = await printData2(); // every await has to be wrapped inside an async function.
    console.log(a);
}

starWars();


// ------------- PLAYING -------------

function PromiseFn(){
    return new Promise(function(whenResolved){
        let a = 69;
        let b = 420;
        whenResolved('{"n1": "69", "n2": "420"}')
    })
}


async function PromiseResolved(){
    // let a = await PromiseFn();
    let a = JSON.parse(await PromiseFn());
    console.log(a["n1"]+a["n2"]);
}

