//ans1
function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        console.log("Invalid linear equation: Both coefficients 'a' and 'b' cannot be zero.");
        return;
    } else if (a === 0) {
        let y = -c / b;
        console.log("The solution is: y =", y);
    } else if (b === 0) {
        let x = -c / a;
        console.log("The solution is: x =", x);
    } else {
        let x = -c / a;
        let y = (-a * x - c) / b;
        console.log("The solution is: x =", x, "and y =", y);
    }
}
solveLinEquation(2, 3, -6);


//ans2
function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}
const a1= 1;
const b1 = -3;
const c1 = 2;

const roots = solveQuadEquation(a1, b1, c1);
console.log("Roots are:-",roots); 



//ans3
function printArray(array){
for (let i = 0; i < arr.length; i++) {
}
return numbers
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

//ans4
function showDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; 
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    day = a4(day);
    month = a4(month);
    hours = a4(hours);
    minutes = a4(minutes);
    var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    console.log(formattedDateTime);
}
function a4(num) {
    return (num < 10 ? '0' : '') + num;
}
showDateTime();


//ans5
function swapValues(a,b){
        return (a,b) 
        }
       let a=4;
       let b=5;
       a=a+b
       b=a-b
       a=a-b
        console.log(a,b)


        //ans6
        function reverseArray(arr) {
            return arr.reverse();
        }
        const originalArray = [1, 2, 3, 4, 5]
        const reversedArray = reverseArray(originalArray)
        console.log(reversedArray)
        

            //ans7
            function capitalizeArray(arr) {
                var capitalizedArray = []; 
                for (var i = 0; i < arr.length; i++) {
                    var capitalizedElement = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
                    capitalizedArray.push(capitalizedElement); 
                }
                return capitalizedArray; 
            }
           
            var originalArray1 = ["apple", "banana", "cherry"];
            var capitalizedArray = capitalizeArray(originalArray1)
            console.log(capitalizedArray); 


            //ans8
            function addItem(array){
                array.push(6);
                return array;
            }
            let array=[1,2,3,4,5];
            array=addItem(array);
            console.log(array)
            

            //ans9
            function removeItem(array1){
                array1.pop();
                return array1;
            }
            let array1=[1,2,3,4,5];
            array1=removeItem(array1);
            console.log(array1)


            //ans10
            function sumOfNumbers(number) {
                if (number < 1) {
                    return "write a positive number greater than 0"
                }
            let sum = 0;
                for (let i = 1; i <= number; i++) {
                    sum += i;
                }
                return sum;
            } 
            console.log(sumOfNumbers(10)); 


            //ans11
            function sumOfOdds(number) {
                if (number < 1) {
                    return "write a positive number greater than 0.";
                }
            var sum = 0;
                for (var i = 1; i <= number; i += 2) {
                    sum += i;
                }
                return sum;
            }
            console.log(sumOfOdds(10));


            //ans12
            function sumOfEven(number) {
                if (number < 1) {
                    return "write a positive number greater than 0.";
                }
            var sum = 0;
                for (var i = 2; i <= number; i += 2) {
                    sum += i;
                }
                return sum;
            }
            console.log(sumOfEven(10));


            //ans13
            function evensAndOdds(n) {
                let counteven = 0
                let countodd = 0
                for(let i=0;i<=n;i++){
                    if(i%2==0){
                        counteven++
                    }
                    else{
                        countodd++
                    }
                }
                return{
                    odd: countodd++,even: counteven++
                }
                }
                console.log(evensAndOdds(100))


            //ans14
            function sumAllNums() {
                let sum = 0
                for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i]
                }
                return sum
                }
                console.log(sumAllNums(12, 22, 13, 34)) 
            


                //ans15
                function generateRandomUserIp() {
                    const a1 = Math.floor(Math.random() * 256); 
                    const a2 = Math.floor(Math.random() * 256);
                    const a3 = Math.floor(Math.random() * 256);
                    const a4 = Math.floor(Math.random() * 256);
                    const ipAddress = `${a1}.${a2}.${a3}.${a4}`;
                    
                    return ipAddress;
                }
                const randomIp = generateRandomUserIp();
                console.log(randomIp); 


                //ans16
                function generateRandomMacAddress() {
                    const characters = '0123456789ABCDEF';
            let macAddress = ''; 
            for (let i = 0; i < 6; i++) {
                       const part = characters[Math.floor(Math.random() * characters.length)];
                        macAddress += part;
                if (i < 5) {
                            macAddress += ':';
                        }
                    }
                return macAddress; 
                }
                const randomMac = generateRandomMacAddress();
                console.log(randomMac);
                

            //ans17
            function randomHexaNumberGenerator() {
                const characters = '0123456789ABCDEF';
            let hexadecimalnumber = ''; 
            for (let i = 0; i < 6; i++) {
                    const digit = characters[Math.floor(Math.random() * characters.length)];
                    hexadecimalnumber += digit;
                }
            return hexadecimalnumber;
            }
            const randomHexNumber = randomHexaNumberGenerator();
            console.log(randomHexNumber); 


            //ans18
            function userIdGenerator() {
                const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let userIdGenerator = ''; 
            for (let i = 0; i < 6; i++) {
                    const digit = characters[Math.floor(Math.random() * characters.length)];
                    userIdGenerator += digit;
                }
            return userIdGenerator;
            }
            const randomuserIdGenerator = userIdGenerator();
            console.log(randomuserIdGenerator); 

            
                
            
                

            