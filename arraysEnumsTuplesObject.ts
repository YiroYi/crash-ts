// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string] // This is a tuple
// } = {
//   name: 'Yiro',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// console.log(person)
enum Role { ADMIN, READ_ONLY, AUTHOR };
//Behind scenes admin has 0 , read has 1, author has 2
// What enum return is the index number 0 , 1, 2
// Can assign your own numbers:
// enum Role { ADMIN = 10, READ_ONLY = 15, AUTHOR = 20 };

const randomVariable: any = 25
// With any you can pass every kind of object but it is not recommended



const person = {
  name: 'Yiro',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

console.log(person.role);
