type User={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let hitesh:User | Admin ={name:"hitesh",id:334}

hitesh={username:"hc", id:334}

//2nd example

function getDBId(id:number | string){
    if(typeof id==='string')
    id.toLowerCase()// error because as it is of string and number type both
}