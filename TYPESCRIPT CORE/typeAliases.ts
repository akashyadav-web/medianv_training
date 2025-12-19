// Type Aliases- If we want to use the same type more than once and refer to it by a single name.

type StringOrNumber=string | number;

function printStatus(message:string,code:StringOrNumber){
    if(typeof code ==='string'){
        console.log(`${message}. Status code:${code.trim()}`);
    } 
    else{
        console.log(`${message}. Status Code:${code}`);
    }
}

printStatus('request was successful',200);
printStatus('resource was not found','404')