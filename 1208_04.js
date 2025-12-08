/*console.log(1);
setTimeout(()=>{
    console.log(2)
},3000)
console.log(3);*/

setTimeout((name)=>{
    console.log(`Hello,${name}`);
},2000,"Ghost");


//타이머 취소
const timerId=setTimeout(()=>{console.log('실행되지않음')},5000);
clearTimeout(timerId);

function greeting(name,time) {
    console.log(`${name}님,${time}초 후에 인사드립니다.`);
}
//setTimeout 으로, 2초후에 {--님},{-초}후에 인사드립니다.
setTimeout (greeting,2000,"유민",3);