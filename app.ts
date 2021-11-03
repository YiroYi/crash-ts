type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Yiro',
  privileges: ['create', 'delete'],
  startDate: new Date()
}

type CombinableVar = string | number;
type Numeric = number | boolean;

type Universal = CombinableVar & Numeric;

