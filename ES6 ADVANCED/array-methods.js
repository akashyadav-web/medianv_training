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





