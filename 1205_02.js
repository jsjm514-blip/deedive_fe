const a =5;
const b = 12;
const c = 20;

//a,b 두수의 차이를 구하시오. 양수로
console.log(Math.abs(a-b));

//a,b,c 중에 가장 큰 수
console.log(Math.max(a,b,c));

const price = 1230;
//price 가격을 100원 단위로 올림하시오. 1230-> 1300
console.log(Math.ceil(price/100)*100)

//1-15
const random = Math.floor(Math.random() * 15 + 1);
console.log(random);