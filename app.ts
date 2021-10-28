// npm start lite-server
// tsc -2

class Department {
  //name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    //this.name = n;
  }

  describe(this: Department) {
    console.log('Department' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();

accounting.addEmployee('Yiro');
accounting.addEmployee('Yujin');

accounting.printEmployeeInformation();

// accounting.describe();



