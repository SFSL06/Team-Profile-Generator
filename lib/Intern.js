// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, school) {
      this.id = id;
      this.school = school;
    }
    
    getSchool() {
        console.log(this.school);
      }
    
    getRole() {
        console.log(this.class.name);
      }
      
  
    printInfo() {
      console.log(`Employee ${this.name} and ID ${this.id}`);
      console.log(`Email ${this.email}`);
    }
  }
  module.exports = Engineer;