// ## Functions #5

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters

// 4. create 3 vars "order1","order2","order3"
// 5. call calculateTotal, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression


var order1 = 65;
var order2 = 78;
var order3 = 122;


//first Version
// function calculateTotal(calculateTotal, tax){
//     return calculateTotal + tax;
// }

// //second version function expression
// const calculateTotal = function(calculateTotal, tax){
//        return calculateTotal + tax;
//     }

//third version arrow function
const calculateTotal = (calculateTotal, tax) => {
    return calculateTotal + tax;
}

order1 = calculateTotal(order1, 20);
order2 = calculateTotal(order2, 20);
order3 = calculateTotal(order3, 20);
console.log(order1, order2, order3);