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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class Accounting extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'accounting');
  }

  addReport(text: string ) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1', ['Yiro']);

it.describe();

it.addEmployee('Yiro');
it.addEmployee('Yujin');

it.printEmployeeInformation();

console.log(it);

const accounting = new Accounting('d2', []);

accounting.addReport('This new report');

accounting.printReports();

console.log(accounting);

