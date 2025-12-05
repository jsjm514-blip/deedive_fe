const a = 4.7

console.log(Math.round(a)); //반올림
console.log(Math.floor(a)); //소수점 버림
console.log(Math.ceil(4.1)); //올림

console.log(Math.max(1,7,2)); //최대값 찾기
console.log(Math.min(1,7,2)); //최소값 찾기

const talls = [178,152,143,190]
const b=Math.max(...talls);
console.log(`가장 큰 키는 ${b}입니다.`);

//난수구하기 0~1미만의 수
const randomNumber =Math.floor(Math.random()*10+1);
console.log("Lucky Number is",randomNumber);

//제곱수 구하기
console.log(Math.pow(2,3)); //2**3 2의 3제곱

//절대값 얻어내기
console.log(Math.abs(-5));
console.log(Math.abs(5));