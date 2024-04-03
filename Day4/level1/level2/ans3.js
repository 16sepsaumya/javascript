let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()
switch (day) {
case 'monday':
console.log('monday is a working day')
break
case 'tuesday':
console.log('tuesday is a working day')
break
case 'wednesday':
console.log('wednesday is a working day')
break
case 'thursday':
console.log('thursday is a working day')
break
case 'friday':
console.log('friday is a working day')
break
case 'saturday':
console.log('saturday is a weekend')
break
case 'sunday':
console.log('sunday is a weekend')
break
default:
console.log('It is not a week day.')
}
