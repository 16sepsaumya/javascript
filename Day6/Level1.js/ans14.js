let randomnumbers = [];
for (let i = 0; i < 5; i++) {
    let randomnumber = Math.floor(Math.random() * 100) + 1;
    randomnumbers.push(randomnumber);
}
console.log(randomnumbers);