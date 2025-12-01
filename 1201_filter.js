const numbers = [30,25,12,3,8]
const fruits = ["banana","lemon","apple mango","lime","melon"]


const banana = fruits.filter((fruit)=>fruit === "banana");
console.log(banana);

const under10 = numbers.filter((number) => number <=10);
console.log(under10);

const under5 = fruits.filter((fruit)=> fruit.length <=5);
console.log(under5);