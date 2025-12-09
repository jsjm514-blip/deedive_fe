import config, {count,user} from './modules/constants.js';

console.log(count);
console.log(user);
console.log(config.admin);

// default로 export된 것은 {}로 묶지 않는다
// default로 가져온 것은 이름바꾸기가 가능함