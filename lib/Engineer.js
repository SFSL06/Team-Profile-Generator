// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, gitHub) {
      this.id = id;
      this.gitHub = gitHub;
    }
    
    getGithub() {
        console.log(this.gitHub);
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