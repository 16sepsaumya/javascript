number=prompt("enter the number");
if(number>80 && number<100){
    console.log("Grade A")
}
else if(number>70 && number<89){
    console.log("Grade B");
}
else if(number>60 && number<69){
    console.log("Grade C");
}
else if(number>50 && number<59){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}