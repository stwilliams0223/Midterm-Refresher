// Check for User's Birthday
// REF: http://codepen.io/manikoth/pen/BymXwR?editors=101
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


//  Get Date

var date = new Date();

console.log(date)

//  Store Date

var birthday = {
  month: date.getMonth(),
  day: date.getUTCDate(),
  check: date.getMonth() + "/" + date.getUTCDate()
};

console.log(birthday.month)
console.log(birthday.day)
console.log(birthday.check)

// Check for Birthday

if (birthday.check == '1/9') {


};

// Show Birthday

$('.date').addClass('bday');
