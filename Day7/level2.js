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



//ans3
function printArray(array){
for (let i = 0; i < arr.length; i++) {
}
return numbers
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

//ans4
function showDateTime(){
    return 
  
}


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
            function evensAndOdds(number) {
            let evens=0;
            let odds=0
            let digits=number.toString().split(' ').map(Number)
               digits.for
            }
            console.log(sumOfEven(100));


            //ans14
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


                //ans15
            
            
                

            