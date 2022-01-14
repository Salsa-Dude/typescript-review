var button = document.querySelector("button");
/* We can let TypeScript know that we are sure that will get a value by adding a exclamation mark
 - This tells TypeScript that this will never yield null
 - in addition, we can set the input element as HTMLInputElement (a syntax called typecasting)
*/
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
