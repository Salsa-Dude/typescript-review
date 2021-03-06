
/*  a union type variable is a variable which can store multiple type of values

A union type allows us to define a variable with multiple types. The union type variables are defined using the pipe ('|') symbol between the types.

*/

function combine(input1: number | string, input2: number | string) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 30);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);