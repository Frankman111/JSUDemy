// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// function fullName(firstName, lastName){
//     //console.log(`Your fullname is: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
//     const fullName = `${firstName} ${lastName}`;
//     return fullName.toUpperCase();
// }   
// console.log(fullName("Haider", "Frank"));



//refactor to object

function fullName({firstName, lastName}){
    const fullName = `${firstName} ${lastName}`;
    return fullName.toUpperCase();
}   

console.log(fullName({lastName:"Haider", firstName:"Frank"}));
