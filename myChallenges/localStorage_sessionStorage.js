// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john');
// sessionStorage.setItem('name','john');

localStorage.setItem("name", "john");
localStorage.setItem("friend", "frank");
localStorage.setItem("job","Housemasta");
const friend = localStorage.getItem("friend");
console.log(friend);
localStorage.removeItem("friend");
localStorage.clear();
