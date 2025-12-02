const users = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
];
const passedUsers = users.filter((user)=>user.score>=80).map((user) => user.name);
console.log(passedUsers);