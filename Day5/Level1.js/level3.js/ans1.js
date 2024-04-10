let min
let max
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
const minage = ages[0]
console.log(minage)
const maxage = ages[ages.length - 1]
console.log(maxage)
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex])/2;
} else {
    medianAge = ages[middleIndex];
}
console.log(medianAge)
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;
console.log(averageAge)
const ageRange = maxage - minage;
console.log(ageRange)
const minAverageDiff = Math.abs(minage - averageAge);
console.log(minAverageDiff)
const maxAverageDiff = Math.abs(maxage - averageAge);
console.log(maxAverageDiff)