const users=[{
    name:"akash",age:25
},
{name:"ram",age:17},
{name:"vikas",age:23},

];

//map
const names=users.map(user=>user.name);
console.log(names); //output-[ 'akash', 'ram', 'vikas' ]

//filter

const adults=users.filter(user=>user.age>=18);
console.log(adults); //output-[ { name: 'akash', age: 25 }, { name: 'vikas', age: 23 } ]

//reduce

const totalAge=users.reduce((sum,user)=>sum+user.age,0);
console.log(totalAge); //output-> 65

// forEach- Iterates over array elements (no return value).

users.forEach(user=>console.log(user.name));

// find- Returns the first element that matches the condition

const teen=users.find(user=>user.age<20);
console.log(teen);// output->{ name: 'ram', age: 17 }


//some & every

//.some() → true if at least one matches condition

//.every() → true if all match condition

console.log(users.some(u=>u.age<18));//output=>true
console.log(users.every(u=>u.age>=18)) //output=>false

//slice()
const slicedUsers = users.slice(0, 2);
console.log(slicedUsers);

//splice()
const removed = users.splice(1, 1);
console.log(removed);//[{ name: "ram", age: 17 }]
// original array becomes:-
//[
//  { name: "akash", age: 25 },
 // { name: "vikas", age: 23 }
//]





