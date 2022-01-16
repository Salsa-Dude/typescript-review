/* The key difference is: JavaScript uses "dynamic types" (resolved at runtime). TypeScript uses "static types" (set during development)

- Types allow you to detect errors early and avoid some runtime errors

- TS types are checked during compilation, JS types during runtime.

*/

function add(n1: number, n2: number) {
  return n1 + n2;
}

// * Type Inference *
// let num1: number;
// num1 = 5;
const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);