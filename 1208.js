//함수 반복하기

/*setInterval(
    ()=> {
        const now = new Date()
        //console.log(now.getSeconds());
        console.lof(now.toLocaleTimeString());
    },1000
)*/

/*const timerId=setInterval(()=>console.log("Tick"),1000);
setTimeout(()=>clearInterval(timerId),5000)*/
let seconds = 0;
setInterval(()=>{
    seconds++;
    console.log(`${seconds}초 경과`)
},1000)