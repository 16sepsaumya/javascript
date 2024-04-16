//ans1
function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const leng = 8;
const randomId = generateRandomId(leng);
console.log(randomId);



//ans2
function generateRandomHexadecimal(length) {
  const hexChars = '0123456789ABCDEF';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  }
  return result;
}
const length = 6;
const randomHex = generateRandomHexadecimal(length);
console.log(randomHex);


//ans3
function generaterandomRGB() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const randomColor = generaterandomRGB();
console.log(randomColor);


//ans4
const countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
"HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarr=[]
for(const country of countries){
    newarr.push(country.toUpperCase())
}
console.log(newarr)


//ans5
const countries1=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
"HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarr1=[]
for(const country of countries1){
    newarr1.push(country.length)
}
console.log(newarr1)


//ans6
const coun = [
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
const countryArrays = countries.map(coun => [coun, coun.length]);
console.log(countryArrays);


//ans7
const countries3 = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];
const newArr= countries3.filter(countries3=>countries3.includes('land'));

if (newArr.length) {
  console.log(newArr);
} else {
  console.log("All these countries are without land");
}


//ans8
const countries4 = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];
const newArray= countries3.filter(countries3=>countries3.endsWith('ia'));

if (newArray.length) {
  console.log(newArray);
} else {
  console.log("These are countries ends without ia.");
}


//ans9
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
let biggestcountry = countri[0];
for (let i = 1; i < countri.length; i++) {
  if (countri[i].length > biggestcountry.length) {
    biggestcountry = countri[i];
  }
}
console.log(biggestcountry);


//ans10
const countrie = [
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

const countriewith5letterrs = countrie.filter(countrie => countrie.length === 5);

console.log(countriewith5letterrs);


//ans11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
  ]
let longestword = webTechs[0];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestword.length) {
    longestword = webTechs[i];

  }
}
console.log(longestword);


//ans12
const webTech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const techArrays = webTech.map(tech => [tech, tech.length]);
console.log(techArrays);


//ans13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const MERN = mernStack.join('');
console.log(MERN);



//ans14
let array= ["HTML", "CSS", "JS", "React", "Redux", "Node","Express", "MongoDB"];
for(let i=0;i<array.length;i++)
{
  let a=array[i]
  console.log(a)
}


//ans15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);



//ans16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
  ]
  for(let i=0;i<fullStack.length;i++)
{
  let b=fullStack[i]
  console.log(b)
  }















