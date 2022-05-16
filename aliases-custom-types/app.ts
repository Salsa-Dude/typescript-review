
// aliases type
/* 
  Type aliases create a new name for a type. 
  Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
*/
type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversation: ConversionDescription
) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversation === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if(resultConversation === "as-number") {
  //   // converts string to number
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine("30", "26", 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);