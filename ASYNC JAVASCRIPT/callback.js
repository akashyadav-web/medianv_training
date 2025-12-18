// CALLBACK  EXAMPLE
// simulating a DB call using setTimeout

function getUserFromDB(callbcak){
    setTimeout(()=>{
        callbcak({id:1,name:"Akash"})

    },1000);

}

console.log("Fetching user...");

getUserFromDB((user)=>{
    console.log("User received:",user);
})
/*
FLOW:
1. Function starts
2. setTimeout → Web API
3. Callback runs after delay
4. User data received
*/