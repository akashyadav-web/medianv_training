//What Are Optional Properties?

//An optional property is a property that:may exist,may not exist and TypeScript should not throw an error if it’s missing

type User={
    username:string
    bio?:string
}

const user1:User={
    username:"sam"
}

const user2:User={
    username:"akash",
    bio:"developer"
}

export{}