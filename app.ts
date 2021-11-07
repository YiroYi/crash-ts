// const names: Array<string> = ['Yiro', 'Yujin']

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Yiro'}, {age: 30});

console.log(mergedObj);

