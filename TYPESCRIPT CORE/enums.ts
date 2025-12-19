enum Roles{
    ADMIN,READ_ONLY,WRITE_ONLY,READ_WRITE
}

const user={
    name:'akash',
    age:39,
    gender:'male',
    role:Roles.ADMIN
}

if(user.role===Roles.ADMIN){
    console.log('this user is admin')
}