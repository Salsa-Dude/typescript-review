
const button = document.querySelector("button");
/* We can let TypeScript know that we are sure that will get a value by adding a exclamation mark
 - This tells TypeScript that this will never yield null
 - in addition, we can set the input element as HTMLInputElement (a syntax called typecasting)
*/
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
