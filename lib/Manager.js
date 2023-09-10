// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, officeNumber) {
      this.id = id;
      this.email = email;
    }
    getRole() {
        console.log(this.class.name);
      }
      
  
    printInfo() {
      console.log(`Employee ${this.name} and ID ${this.id}`);
      console.log(`Email ${this.email}`);
    }
  }
  module.exports = Manager;