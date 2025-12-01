const animals = ["cat", "dog", "rabbit", "bear", "panda"];

animals.pop();
console.log(animals);
animals.pop();
console.log(animals);
animals.push("lion");
console.log(animals);
animals.shift();
console.log(animals);
animals.unshift("parrot");
console.log(animals);
animals.push("snake","kangaroo");
console.log(animals);

//for문으로 1+10 더한 값 출력
let total =0;
for(let i=1; i<=10; i++) {
    total=total+i
}
console.log(total);

for (let i = 0; i<animals.length;i++) {
    console.log(animals[i]);
}

for (const animal of animals) {
    console.log(animal);
}
animals.forEach((animal,index)=>{
    console.log(`${index+1}.${animal}`)
})

