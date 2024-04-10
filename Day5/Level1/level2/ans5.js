const webTechs = ['HTML', 'CSS','JavaScript', 'React', 'Redux','Node', 'MongoDB']
let index = webTechs.indexOf('Sass')
if(index === -1){
webTechs.unshift('Sass') 
console.log(webTechs)
} 
else 
{
console.log('Sass is a CSS preprocess');
}
