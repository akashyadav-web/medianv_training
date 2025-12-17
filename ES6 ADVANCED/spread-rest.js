// Spread Operator

const arr1=[1,2];
const arr2=[3,4];
const combined=[...arr1,...arr2];
console.log(combined); // output-[ 1, 2, 3, 4 ]

// Rest Operator

function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
}

console.log(sum(10,20,30));// output-60
