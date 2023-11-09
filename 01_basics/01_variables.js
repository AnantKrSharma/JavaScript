const accountId = 144553
let accountEmail = "anant@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

/* Prefer not to use var
because of issue in block scope and functional scope */

// accountId=2 // NOT ALLOWED
accountEmail="hc@hc.com"
accountPassword="12121"
accountCity="Bengal"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])