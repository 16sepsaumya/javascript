//ans11
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
    sum += element
    }
    return sum
    }
    console.log(sumAllNums(11, 12, 13, 14))


//ans9
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));


//ans13
function average(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return 0; // Return 0 for an empty array
    }
    
    // Check if all array items are numbers
    const allNumbers = arr.filter(item => typeof item === 'number');
    if (allNumbers.length !== arr.length) {
        return "Array contains non-numeric values"; // Return feedback if non-numeric values are found
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    
    return avg;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
console.log(average(arr1));
      


//ans15
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7))


//ans17






