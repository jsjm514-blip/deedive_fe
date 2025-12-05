const now = new Date();
console.log(now);

const year = now.getFullYear();
const month = now.getMonth()+1; //0부터 시작
const date = String(now.getDate()).padStart(2,"0"); //.padStart(몇자리수,그 자리에 들어갈 수)
const day = now.getDay(); //요일, 0-일...6-토
const hours=now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(year,month,date,day); 
console.log(`${hours}:${minutes}:${seconds}`);

console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());
console.log(Date.now());

const a = 5;