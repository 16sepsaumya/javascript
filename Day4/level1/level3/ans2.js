// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let month = prompt("Enter the month: ");
let year = (prompt("Enter a year to check: "));
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days in ${year}.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days in ${year}.`);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days in ${year}.`);
      break;
    } else {
      console.log(`${month} has 28 days in ${year}.`);
      break;
    }
  default:
    alert("Invalid month ");
    break;
}
