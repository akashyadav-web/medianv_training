//ERROR HANDLING WITH PROMISES

function getUserFromDB(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("database connection failed");
        },1000);
    });
}

async function fetchUser(){
    try{
        const user=await getUserFromDB();
        console.log(user);
    } catch(error){
        console.log("Error:",error);
    }
}

fetchUser();