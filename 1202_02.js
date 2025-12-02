const winners = ['Lee','Park','Kim','Choi']

//kim 몇번째에 있는지 출력
const a = winners.indexOf('Kim')
console.log(`우승자 Kim은 ${a+1}번째 회원입니다.`)


// tags 배열을 하나의 문자열로 합쳐주세요
// '#JS, #CSS, #HTML' 이렇게 출력되도록.
const tags = ['#JS', '#CSS','#HTML']
console.log(tags.join(", "));


// 창고에 'apple'이 있는지 확인하여 true / false를 출력하세요
const stock = ['banana','orange','apple','grape']
console.log(stock.includes("apple"));


const hashTags = "figma, illustrator, photoshop"
// 위의 hastTags 문자열을 배열로 변환하시오(단, 각 문자열 앞에 '#' 표시되도록)
// [ '#figma', '#illustrator', '#photoshop']
result = hashTags.split(", ").map((tag)=>`#${tag}`);
console.log(result);