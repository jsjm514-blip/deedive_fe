const numbers = [30,25,12,3,8]

//1. 10이하의 숫자만 출력하시오.
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
        console.log(numbers[i]);
    }
}
// 2.과일 중 5글자 이하만 출력하시오
const fruits = ["banana","lemon","apple mango","lime","melon"]
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length <= 5) {
        console.log(fruits[i]);
    }
}

/* const under5letters = [];
for (const fruit of fruits) {
    if(fruit.length <=5) under5letters.push(fruit);
}
console.log(under5letters);*/