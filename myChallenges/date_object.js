// date

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturtday',
  ];

const date = new Date("1/12/2004"); // if empty gets the current date - otherwise the date that is in it
const month = date.getMonth();
console.log(months[month]); // returns the actual month

const day = date.getDay();
console.log(days[day]); // return the actual day

console.log(date.getDate()); // returns the day as number
console.log(date.getFullYear());

const sentence = `${date.getDate()}. ${days[day]} ${months[month]} ${date.getFullYear()}`; 
console.log(sentence);

document.body.innerHTML = `<h1> Heute ist der ${sentence} </h1>`;