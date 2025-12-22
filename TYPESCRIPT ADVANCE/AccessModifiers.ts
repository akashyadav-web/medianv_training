class Employee{
    constructor(public empName:string,private salary:number,public baseLocation:string,public isEligible:boolean,private hikePercent:number,readonly empId:number){}

    
 public getSalary(){
    if(this.isEligible){
        return this.getNewsalary()

    }
    return this.salary;
 }
 private getNewsalary(){
    return this.salary+this.salary*this.hikePercent/100;
 }
}

const employee=new Employee('john smith',10000,'london',true,20,101);
console.log(employee.getSalary());
console.log(employee.empId)

//console.log(employee.getNewsalary) error-Property 'getNewsalary' is private and only accessible within class 'Employee'.

//employee.empId=304 error- as its a only readonly property so cant change its value.