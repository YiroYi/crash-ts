// npm start lite-server
// tsc -2

abstract class Department {
  static fiscalYear = 2021;
  //private readonly id: string; readonly make sure value it cant change later
  //private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //this.id = id
    //this.name = n;
  }

  abstract describe(this: Department): void;
  // Enforce that other classes have this method

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name}
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department -ID: ' + this.id);
  }
}

class MarketingDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'Marketing');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department -ID: ' + this.id);
  }
}

class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('Not Report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error ('no value');
    }

    this.addReport(value);
  }

  //Singleton means just one instance of one class , for example
  // we would like to ensure that we only have one Accounting
  //Department no more
  private constructor(id: string, private reports: string[]) {
    super(id, 'accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(this.instance) {
      return this.instance;
    }

    this.instance = new Accounting('d2', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string ) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }

  describe() {
    console.log('Accounting department ID:' + this.id)
  }
}

const it = new ITDepartment('d1', ['Yiro']);

it.describe();

it.addEmployee('Yiro');
it.addEmployee('Yujin');

it.printEmployeeInformation();

console.log(it);

const accounting = Accounting.getInstance();
console.log(accounting);

accounting.mostRecentReport = 'This Yiro Report'
console.log(accounting.mostRecentReport);
accounting.addReport('This new report');
accounting.printReports();
accounting.addEmployee('Yiro Yi');
accounting.describe();


console.log(accounting);

const employee1 = Department.createEmployee('Yijin')

console.log(employee1);
console.log(Department.fiscalYear);
