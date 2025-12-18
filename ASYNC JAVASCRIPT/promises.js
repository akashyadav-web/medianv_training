//PROMISE EXAMPLE
//Better way than callbacks

function geUserDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:1,name:"akash"});
        },1000)
    });
}

console.log("Fetching user")

getUserFromDB()
    .then(user=>{
        console.log("User received:",user)
    })
    .catch(error=>{
        console.log("Error:",error);
    });