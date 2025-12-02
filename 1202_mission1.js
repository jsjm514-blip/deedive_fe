const numbers = [5, 2, 11, 1, 25, 9, 32, 10];

// 1. numbers 배열에서 짝수만 추출하시오
const evenNumber = numbers.filter(num=>num%2===0);
console.log(evenNumber);
// 2. numbers 배열에서 각 요소를 제곱한 새 배열을 만드시오
const square = numbers.map(num=>num**2);
console.log(square);
// 3. numbers 배열을 내림차순으로 정렬하시오
const desc = numbers.sort((a,b)=>b-a);
console.log(desc);
// 4. numbers 에 숫자 9가 포함되었는지 확인하시오
console.log(numbers.includes(9));
// 5. numbers 배열에서 10보다 작은 값만 2배로 만든 새 배열을 만드시오
const newList = numbers.filter(num=>num<10).map(num=>num*2);
console.log(newList);

// 6. 친구이름중에 'Camel'이 있는지 확인하는 함수 만들기
const friends = ["Irangi", "Camel", "Shoopa"];
function findMyFriend(names) {
  return names.includes("Camel");
}
console.log(findMyFriend(friends)); // true

// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];
console.log(users.map(user=>user.name));

//2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
const newUser = { ...user,age: 30};
console.log(newUser);


const person = { name: "Ghost", age: 500 };
// 3. person 객체에 동적으로 key와 value를 추가하세요.
// (key: hobby, value: soccer)
person.hobby='soccer';
console.log(person);

// 4. person의 name값을 출력하세요
console.log(person.name);

// 5. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const newObj = {...obj1,...obj2};
console.log(newObj);