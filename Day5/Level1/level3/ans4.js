const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland'
    ]
let firsthalf
let secondhalf
const middleIndex = Math.ceil(countries.length / 2);
firsthalf = countries.splice(0, middleIndex);
secondhalf = countries;
console.log("First half:", firsthalf);
console.log("Second half:", secondhalf);
