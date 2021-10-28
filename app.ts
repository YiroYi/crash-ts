// npm start lite-server
// tsc -2

class Department {
  //private readonly id: string; readonly make sure value it cant change later
  //private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.id = id
    //this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id} ${this.name}`)
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



