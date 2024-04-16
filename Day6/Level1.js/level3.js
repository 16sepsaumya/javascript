//ans1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]
    for(let i=0;i<countries.length;i++)
{
  let a=countries[i]
  console.log(a)
}


//ans2
const c = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const copycountries = c.slice()
const sortCountries = copycountries.sort()
console.log(sortCountries)


//ans3
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
  ]
  const mernStack=['MongoDB', 'Express', 'React','Node']
  console.log(webTechs.sort())
  console.log(mernStack.sort())


//ans4
const countries3 = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];
const newArr= countries3.filter(countries3=>countries3.includes('land'));
console.log(newArr)


//ans5
const countri = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
let highest = countri[0];
for (let i = 1; i < countri.length; i++) {
  if (countri[i].length > highest.length) {
    highest = countri[i];
  }
}
console.log(highest);


//ans6
const countries4= ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];
const newArry= countries3.filter(countries3=>countries3.includes('land'));
console.log(newArry)


//ans7
const countrie = [
  'Albania',
  'Bolivia',
  'Iraq',
  'Canada',
  'Oman',
  'Denmark',
  'Figi',
  'Ethiopia',
  'Finland',
  'peru',
  'Germany',
  'Togo',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const countriewith4letterrs = countrie.filter(countrie => countrie.length === 4);
console.log(countriewith4letterrs);


//ans8
const countr = [
  'Albania',
  'Bolivia',
  'Iraq',
  'Canada',
  'Oman',
  'Denmark',
  'Figi',
  'Ethiopia',
  'Finland',
  'peru',
  'Germany',
  'Togo',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const countriewith2omoreletterrs = countr.filter(countr => countr.length >=2);
console.log(countriewith2omoreletterrs);


//ans9
const count = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const reversedandCapitalized = countr.reverse().map(count => count.toUpperCase());
console.log(reversedandCapitalized);




