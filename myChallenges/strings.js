// ## Concatenate Strings #2

// 1. create "street" and "country" variables
// 2. assign your values
// 3. create "fullMailingAddress" variable and assign
//    the result of "street + country"
// 4. remember about the space
// 5. log "fullMailingAddress" in the console

let street = "Samtgasse";
let country = "Austria";

let fullMailingAddress = `Ich wohne in ${street} ${country}`;
fullMailingAddress = "ICh wohne in " + street + " " + country;

console.log(fullMailingAddress);