// 1. 문자열을 숫자로 변환한 결과를 반환하시오
function mission1(str) {
    return Number(str);
}
console.log(mission1("-1234")); 
// 숫자 -1234가 나오도록

// 2. 정수 내림차순 : 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬해 새로운 정수를 반환하세요
function mission2(number) {
    return Number(String(number).split('').sort((a,b)=>b-a).join(''))
}
console.log(mission2(118372));
/* 힌트, 숫자를 배열로 바꾼후 정렬하고, 다시 숫자로 변환한다 */
// 873211 결과가 나오도록

// 3. 랜덤수 : 1부터 6까지의 랜덤수를 구하는 함수를 만드시오.
const randomNumber =Math.floor(Math.random()*6+1);
console.log(randomNumber);

// 4. 랜덤수 : 50부터 100까지의 랜덤수를 구하는 함수를 만들어 보시오
const random = Math.floor(Math.random()*(100-50+1)+50);
console.log(random);

// 5. 다음 배열에서 함수를 호출하면 랜덤으로 '가위','바위','보'중 하나가 선택되어 출력될 수 있도록 만들어보시오
const items = ["가위", "바위", "보"];
function random1(){
    const Index = Math.floor(Math.random()*3);
    return items[Index]
}
console.log(`당신의 선택은 '${random1()}'입니다`);
// 결과 '당신의 선택은 '바위' 입니다'

// 6. 현재 시간을 HH:MM:SS로 표시하시오.
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds= now.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`)

// 7. 현재 날짜를 YYYY-MM-DD 로 표시하시오. (5일은 05일로 표시되도록 월과 일의 글자수를 지정하세요)
const year = now.getFullYear();
const month = now.getMonth();
const date = String(now.getDate()).padStart(2,"0");
console.log(`${year}-${month}-${date}`)

// 8. 아래의 가격에 세금을 포함한 금액으로 새로운 배열을 만드시오.
const prices = [100, 200, 300];
const taxPrices = prices.map((price)=>price*0.1+price)
console.log(taxPrices); // 결과 priceWithTax = [ 110, 220, 330]

// 9. 아래 User중에서 결석(absent:true면 결석) 한적이 없고, 점수가 70점 이상인 user만 추출하시오.
const users = [
{ name: "ghost", score: 92, absent: false },
{ name: "irangi", score: 40, absent: true }, // 결석
{ name: "shoopa", score: 80, absent: false },
{ name: "nuvis", score: 52, absent: false },
{ name: "camel", score: 75, absent: false },
];
const filterUser = users.filter(user=>user.absent===false&&user.score>=70).map(user=>user.name)
console.log(filterUser)

// 10. 아래의 Cart의 모든 상품에 대해 총 합계 금액을 계산하시오(단, 재고가 10개 미만인 제품은 20% 할인을 적용하세요
const cart = [
{ menu: "latte", price: 3000, quantity: 1, stock: 15 },
{ menu: "capuchino", price: 4500, quantity: 2, stock: 5 },
{ menu: "Iced Americano", price: 2500, quantity: 1, stock: 8 },
{ menu: "Orange Ade", price: 3200, quantity: 2, stock: 20 },
];
let total = 0;
cart.forEach (item=>{
    let stockPrice = 0;
    if (item.stock<10) {stockPrice=item.price*0.8} else {stockPrice=item.price}
    const eachPrice = item.quantity*stockPrice;
    total+=eachPrice;
})
console.log(total);
