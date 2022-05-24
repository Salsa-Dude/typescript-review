function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number) : void {
  console.log('Result ' + num);
}

printResults(add(5, 12));

// function type
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
