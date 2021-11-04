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

function add02(a: number, b:number): number;
function add02(a: string, b:string): string;
function add02(a: CombinableVar, b: CombinableVar) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result02 = add02('Yiro', 'Yujin');
result02.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'Owner of kimchi coding'}
}

//console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);
// Esto es como para poner si existe fetchedUserData.job entonces fetchedUserData.job.title


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges' + emp.privileges);
//   }

//   if ('startDate' in emp) {
//     console.log('Privileges' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);


// class Car {
//   drive() {
//     console.log('Driving');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo' +  amount)
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if(vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   if (animal.type === 'bird') {
//     return console.log('Moving with speed' + animal.flyingSpeed)
//   }

//   return console.log('Moving with speed' + animal.runningSpeed)
// }

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// userInputElement.value = 'Hi There';

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email'
// }









