// Intersection types allow us to combine multiple types into one.

type PersonA={name:string}
type PersonB={age:number}
type PersonCombined=PersonA & PersonB //doing intersection of two types

let PersonDataA:PersonA={name:'akash kumar'}
let PersonDataB:PersonB={age:30}

let PersonDataCombined:PersonCombined={name:'Sam',age:21}


// intersection with interface

interface Person1{name:string}
interface Person2{age:number}

type PersonTC=Person1 & Person2 //doing intersection of two types

let PersonDataA1:PersonA={name:'akash kumar'}
let PersonDataB1:PersonB={age:30}

let Person:PersonTC={name:'Sam',age:21}

export{}



