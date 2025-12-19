//objects

type User={
    id:number
    name:string
    
}

const user:User={
    id:1,
    name:'akash',
}

//Another way of defining objects 

const car:{type:string,model:string,year:number}={
    type:"Toyota",
    model:"corolla",
    year:2009
};
// passing object in function
const USER={
    name:"akash",
    email:"akash@gmail.com",
    isActive:true
}

function createUser(user:{name:string,isPaid:boolean}) {}
createUser({name:"akash",isPaid:false})


//function returning objects
//(): { ... } → return type

//TypeScript ensures the returned object matches this structure
function createCourse():{name:string,price:number}{
    return {
        name:"reactjs",
        price:399
    }
}
export {}