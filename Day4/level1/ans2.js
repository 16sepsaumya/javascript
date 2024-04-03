let myAge=prompt("enter the age");
let yourAge=prompt("enetr the age");
if(myAge===yourAge){
    console.log("myAge and yourAge are equal");
}
else if(myAge>yourAge)
{
    myAge=myAge-yourAge;
    console.log(`I am ${myAge} years older than you`);
}
else{
    yourAge=yourAge-myAge;
    console.log(`you are ${yourAge} years older than you`);
}