const a = 'hello';
const b = 3;
const c = b>5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(Boolean(0)); //falsy
console.log(Boolean(1)); 
console.log(Boolean(5)); 
console.log(Boolean(undefined)); //falsy
console.log(Boolean(null)); //falsy
console.log(Boolean("  "));
console.log(Boolean("")); //falsy