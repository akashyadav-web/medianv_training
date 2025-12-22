// CREATING AND USING CLASSES

class User{
  firstname:string;
  lastname:string; 
  age:number;
  gender:string;



constructor(fn:string,ln:string,a:number,g:string){
    this.firstname=fn;
    this.lastname=ln;
    this.age=a;
    this.gender=g;

}

greetuser(salutation:string){
    const msg='Hello'+salutation+'. '+ this.firstname + ' '+this.lastname
    console.log(msg);
}

}

const user1=new User('john','smith',28,'male');
const user2=new User('merry','jane',32,'female')

user1.greetuser('Mr');
user2.greetuser('Mrs');






export{}