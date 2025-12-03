const person = { name : 'Ghost',age:20,mbti:null,};

console.log(Object.keys(person).length);
console.log(Object.values(person).includes(null));

const task = [
    {id:1,text:"walk"},
    {id:2,text:"running"},
];

const newTask={id:3,text:"programming"}
const finalTasks = [...task, newTask];
console.log(finalTasks);