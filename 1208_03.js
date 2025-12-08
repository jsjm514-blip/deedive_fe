const phoneNumber = '01012345678'
const a = '*'.repeat(phoneNumber.length-4)+phoneNumber.slice(-4);
console.log(a);


const scores = [25,32,40,15]
const b =scores.reduce((a,c)=>a+c,0)/scores.length

console.log(b);

const myScores={
    math : 90,
    english : 80,
    science : 70
};
console.log(Object.values(myScores).reduce((a,c)=>a+c,0))