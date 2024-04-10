const country = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
let index = country.indexOf('Ethiopia')
if(index === -1){
country.unshift('Ethiopia') 
console.log(country)
} 
else 
{
console.log('ETHIOPIA')
}
