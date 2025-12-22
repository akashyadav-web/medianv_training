class Person {
  // public property → accessible everywhere
  public name: string;

  // private property → accessible ONLY inside this class
  // age can be a number or null
  private _age: number | null = null;

  constructor(name: string) {
    this.name = name;
  }

  //  GETTER
  // Used to READ the private _age property
  get age(): number {
    // check condition before returning value
    if (this._age !== null) {
      return this._age;
    } else {
      // if age is null, throw an error
      throw new Error(`Age is not defined for person ${this.name}`);
    }
  }

  //  SETTER
  // Used to SET the private _age property
  set age(value: number) {
    // validation before setting value
    if (value >= 0) {
      this._age = value;
    } else {
      throw new Error('Age cannot be a negative value');
    }
  }
}

// ---------------- USAGE ----------------

const person = new Person('John');

//  Cannot access private property
// person._age = 30;  // ERROR

//  Using setter to set value
person.age = 30;

//  Using getter to read value
console.log(person.age); // 30

//  Invalid value
// person.age = -10; // throws error
