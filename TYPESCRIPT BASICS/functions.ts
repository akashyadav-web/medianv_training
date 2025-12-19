function addTwo(num:number){
    return num+2;
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper('akash');

function signUpUser(name:string,email:string,isPaid:boolean){}
signUpUser('akash','a@gmail.com',false);

//Arrow function and passing a default value.

let loginUser=(name:string,email:string,isPaid:boolean)=>false
{

}
loginUser('a','a@gmail.com',true);

// fixing return type
function addTwo1(num:number){
    return num+2;
    //return "hello" // it will give error as we have fixed return type to be a number
}

// if we dont want to return anything
 function add2(num1:number,num2:number):void{
    console.log(num1+num2)
    return;
 }
 add2(12,13);//if a value doesnot return anything by default it is going to return undefined in js or ts.

// for error detection use never instead of void 
function handleError(errmsg:string):never{
    throw new Error(errmsg);
}
export {}