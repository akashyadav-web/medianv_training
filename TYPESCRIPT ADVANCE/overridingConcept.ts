class Person{
    name:string;
    protected dob:string;// make property accessible in child class as well.
    gender:string;

    constructor(name:string,dob:string,gender:string){
        this.name=name;
        this.dob=dob;
        this.gender=gender;
    }
    calculateAge(){
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    }
}

class Employee extends Person{
  salary:number;
  bonus:number;

  constructor(n:string,dob:string,gen:string,salary:number,bonus:number){
        super(n,dob,gen);
        this.salary=salary;
        this.bonus=bonus;


  }
  getSalary(){
    return this.salary+this.bonus;
  }
  calculateAge():number{
    return 2024-new Date(this.dob).getFullYear()

  }
}

const emp=new Employee('john','08-30-1991','male',10000,2000);
console.log(emp.calculateAge());



    export{}