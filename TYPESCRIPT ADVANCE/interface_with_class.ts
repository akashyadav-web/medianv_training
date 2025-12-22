// ================================
// 1. INTERFACE DEFINITION
// ================================

// Interface acts as a blueprint (contract)
// It contains ONLY declarations (no implementation)
interface User {
  firstName: string;          // Property declaration
  lastName: string;           // Property declaration

  greetUser(): void;          // Method declaration
  getFullName(): string;      // Method declaration
}

// ================================
// 2. ADMIN CLASS IMPLEMENTING USER INTERFACE
// ================================

// "implements User" forces this class to follow User interface
class Admin implements User {

  // Extra property (not part of interface)
  age: number = 30;

  // Constructor automatically creates and assigns properties
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  // Must implement greetUser() because it exists in User interface
  greetUser(): void {
    console.log("Hello Admin " + this.getFullName());
  }

  // Must implement getFullName() because it exists in User interface
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// ================================
// 3. MEMBER CLASS IMPLEMENTING USER INTERFACE
// ================================

class Member implements User {

  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  // Implementation specific to Member
  greetUser(): void {
    console.log("Hello Member " + this.getFullName());
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// ================================
// 4. FUNCTION USING INTERFACE AS TYPE
// ================================

// This function accepts ANY object that implements User interface
function displayGreetMessage(user: User): void {
  // Since User interface guarantees greetUser(),
  // we can safely call it here
  user.greetUser();
}

// ================================
// 5. CREATING OBJECTS (INSTANCES)
// ================================

// Creating instance of Admin class
const admin = new Admin("John", "Smith");

// Creating instance of Member class
const member = new Member("Mary", "Jane");

// ================================
// 6. CALLING FUNCTION WITH DIFFERENT OBJECT TYPES
// ================================

// Both objects work because both implement User interface
displayGreetMessage(admin);
displayGreetMessage(member);

// ================================
// OUTPUT
// ================================
// Hello Admin John Smith
// Hello Member Mary Jane
