const numbers = [25,5,3,42,10]

console.log(numbers.reduce((a,c)=>a+c,0));

/* const a = '3';

const num = Number(a);
console.log(typeof num, typeof a);*/

const a = 3.542534;
const b = "hello";

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(Number(b)); //NaN -> Not a Number

const add = (a,b)=>a+b;
console.log(add(3,5));

const divide = (a,b)=>Number((a/b).toFixed(4));
console.log(divide(14,5));