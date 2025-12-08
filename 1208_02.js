//reuduce

const nums = [1,2,3,4,5];
const sum = nums.reduce((a,c) => a+c,0); // a 누적값 c
console.log(sum);

const cart = [
    {item:'apple',price:12900},
    {item:'banana',price:4900},
    {item:'onion',price:5200},
]
const a = cart.reduce((a,c)=>a+c.price,0)
console.log(`장바구니 총액은 ${a}입니다.`)

const str='dog dog Dog'
//console.log(str.replace("dog","cat"));
console.log(str.replace(/dog/g,"cat"));

const str2 = 'hello world'
console.log(str2.replace("hello","ghost"))
console.log(str2.slice(6, 9));
console.log(str2.slice(6)); //6번째부터 끝까지
console.log(str2.slice(-5)); //뒤에서 5번째부터 끝까지