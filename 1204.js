const obj = {
    name : 'ghost',
    age : 500,
    sayHello : function () {
        console.log(`Hello, ${this.name}`) //this = 자기자신
    },
    sayGoodBye: () => {
        console.log(`Good-bye, ${this.name}`);
    },

    printAge(){
        console.log(`${this.name} is ${this.age}years old.`)
    }
};
obj.sayHello();
obj.sayGoodBye();
obj.printAge();