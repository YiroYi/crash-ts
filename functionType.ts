function addTest(n1: number, n2: number): number {
  return n1 + n2
}

function printResultTest(num: number): void {
   console.log('Result' + num);
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResultTest(addTest(5, 12))

let combineValues: (a: number, b: number) => number;

combineValues = addTest;

console.log(combineValues(8, 8));
//void: means this function do not return anything
addAndHandler(10, 20, (result) => {
  console.log(result)
});
