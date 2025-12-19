interface Info{
    name:string,
    age:number,
    college:string
}

interface TeacherType extends Info{
    subject:string
}


let studentObj:Info={
    name:'anil',
    age:30,
    college:'cgc'
}


let TeacherObj:TeacherType={
    name:'sam',
    age:30,
    college:'cgc',
    subject:'math'
}

let management:Info={
    name:'sam',
    age:30,
    college:'cgc'
}


export {}