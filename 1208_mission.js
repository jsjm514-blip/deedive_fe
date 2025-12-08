// 01. 문자열 반복 출력
function mission1(str, n) {
    return str.repeat(n)
}console.log(mission1('Hello', 3))
// Hello가 3번찍히도록

// 02. 최소값 찾기
const numbers = [52, 2, 12, 10, 1, 7]
function mission2(arr) {
    return Math.min(...arr)
}console.log(mission2(numbers)) // 최소값 1을 출력하시오

// 03. 날짜 포맷(점표기)
function mission3() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const day = String(now.getDate()).padStart(2,"0");
    return `${year}.${month}.${day}`
}
console.log(mission3()) // 2025.12.08 로 출력하시오

// 04. 배열 포함여부
const fruits = ['apple','banana','mango']
function mission4(arr, target) {
    return arr.includes(target)
}
console.log(mission4(fruits, 'banana')) // true
console.log(mission4(fruits, 'orange')) // false

// 05. 주어진 문자의 개수 출력
function mission5(str, char) {
    return str.split('').filter((a)=>a===char).length;
}console.log(mission5('banana', 'a')) // 3 -> a가 banana에 몇개 있는지 출력


// 06. 주어진 문자가 들어있는 User의 이름을 출력(대소문자 구분없음)
const users = ["Ghost", "Irangi", "Camel", "Shoopa", "Nuvis"];
function mission6(arr, char) {
  // code here
}
console.log(mission6(users, "c")); // [ 'Irangi', 'Camel' ]
console.log(mission6(users, "s")); // [ 'Shoopa' ]

// 07. 대소문자 변환
// 주어진 문자열을 대문자는 소문자로, 소문자는 대문자로 변환하시오
function mission7(str) {
// code here
}
console.log(mission7("Hello Ghost")); // 'hELLO gHOST'

// 08. 문자열 자르기
// 이메일주소에서 아이디 부분만 추출하는 함수를 작성하시오.
function mission8(email) {
// code here
}
console.log(mission8("ghost@gmail.com")); // 'ghost' 출력

// 09. 문자열 교체
// 주어진 문자열에서 'apples'를 'oranges'로 교체하는 함수를 작성하시오
// 정규식 패턴과 플래그를 이용하시오.
function mission9(str) {
// code here
}
console.log(mission9("I love apples, Apples are very good"));
// 'I love oranges, oranges are very good'


// 10. 문자열 길이제한
// 문자열이 10자를 넘으면 자르고, 문자열 뒤에 '...'를 붙이시오.
function mission10(str) {
// code here
}
console.log(mission10("This is a very long sentences."));
// 'This is a ...'