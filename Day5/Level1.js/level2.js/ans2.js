let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
let newWord=text.replace(/[^a-zA-Z]+/g,' ');
const words = newWord.split(/\s+/);
words.pop() 
console.log(words);
console.log(words.length)

