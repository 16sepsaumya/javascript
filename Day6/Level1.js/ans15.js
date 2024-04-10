let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let randomID=' ';
for(let i=0;i<6;i++){
    const randomID=Math.floor(Math.random()*char.length);
    randomID +=char[randomIndex];
}
console.log(randomID)