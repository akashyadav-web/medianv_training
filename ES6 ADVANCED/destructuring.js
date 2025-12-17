// Array Destructuring

const numbers=[1,2,3];
const [one,two,three]=numbers;

console.log(one,two,three);// output- 1 2 3

//object Destructuring

const user = {
  name: "Akash",
  role: "Developer",
};

const { name, role } = user;
console.log(name, role);// output-Akash Developer