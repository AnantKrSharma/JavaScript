
// function chai(){
//     console.log(`DataBase Connected`);
// }
// chai()


// ----- Immediately Invoked Function Expressions (IIFE) -----
//     IIFE is used to remove the pollution caused by global scope.
//     Writing ; is very much important in IIFE, to show where the execution is gonna end.


(function chai(){                      // named IIFE
    console.log(`DataBase Connected`);
})();

// First parenthesis(), function definition.
// Second parenthesis(), function call or execution.

( () => {
    console.log(`DataBase Connected 2`);
})();


( (name) => {                          // passing arguments and parameters in IIFE.
    console.log((`Hi ${name}`));
})('Anant');

