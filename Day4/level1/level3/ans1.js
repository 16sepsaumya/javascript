let monthUserInput = prompt('enter the month:')
let month = monthUserInput.toLowerCase()
switch (month) {
case 'january':
console.log(`${monthUserInput} has 31 days`)
break
case 'february':
console.log(`${monthUserInput} has 29 days`)
break
case 'march':
console.log(`${monthUserInput} has 31 days`)
break
case 'april':
console.log(`${monthUserInput} has 30 days`)
break
case 'may':
console.log(`${monthUserInput} has 31 days`)
break
case 'june':
console.log(`${monthUserInput} has 30 days`)
break
case 'july':
console.log(`${monthUserInput} has 31 days`)
break
case 'august':
console.log(`${monthUserInput} has 31 days`)
break
case 'september':
console.log(`${monthUserInput} has 30 days`)
break
case 'october':
console.log(`${monthUserInput} has 31 days`)
break
case 'november':
console.log(`${monthUserInput} has 30 days`)
break
case 'december':
console.log(`${monthUserInput} has 31 days`)
break
default:
console.log('Invaid input')
}
