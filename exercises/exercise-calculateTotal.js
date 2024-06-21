// Exercise Total (Function, return, if, array, for loop)

const gas =[20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr){
    let total = 0;
    for( let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    if(total > 100){
        console.log(`You are spending way too much!`);
        return total;
    }
    else{
        console.log(`You are spending less then 100€!`);
        return total;
    }
   
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);


console.log({
    gas: gasTotal,
    food: foodTotal
});

