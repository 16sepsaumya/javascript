sum=0
sum1=0
sum2=0
for(let i=0;i<=100;i++)
    if(i%2==0)
    {
        sum=sum+i
    }
    let a=sum;
    let j;
    for(let j=0;j<=100;j++)
    if(j%2!=0)
    {
        sum1=sum1+j
    }
     let a1=sum1;
    console.log(`The sum of all evens from o to 100 is ${a}.And The sum of all odds from o to 100 is ${a1}.`)
     let b=[sum,sum1]
     console.log(b)
    