const string='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
console.log(string.match(/\d+/g).reduce((a,b)=>Number(a)+Number(b)));