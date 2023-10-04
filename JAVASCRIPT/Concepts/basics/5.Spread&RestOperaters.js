// Spread & Rest Operater

// Spread syntax (…) allows an iterable such as an array expression (OR) string to be expanded in places where zero or more
// arguments are expected, (OR) an object expression to be expanded in places where zero or more key-value pairs are expected.

// Array spreading
const numbers =[1,2,3,4];
console.log(...numbers);
function sum(x,y,z,n){
  return x+y+z+n;
}
console.log(sum(...numbers));

// Merging two arrays
const arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);
console.log(arr1);
let arr4 =[20,30,...arr1,10];
console.log(arr4);

var name ='Venkatesh';
console.log(...name);

// Object spreading
let basicDetails={name:"Venkatesh",age:20}
let professionalDetails ={profession:'Fullstack'};
let result ={...basicDetails,...professionalDetails,...{location:'Andhra Pradesh'}};
console.log(result);

let numbers =[1,2,3];
function a(x,y,...rest){
  console.log(x,y,rest);
}
a(1,2,3,4);


// 1. A closure is a feature in JavaScript where an inner function has access to the outer function’s variables and parameters.
// 2. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined and it won’t pollute the global objects.
// 3. Spread syntax (…) allows an iterable to spread arrays, strings, objects.

// When using spread, you are expanding a single variable into more:
var abc = ['a', 'b', 'c'];
var def = ['d', 'e', 'f'];
var alpha = [ ...abc, ...def ];
console.log(alpha)// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];

// When using rest arguments, you are collapsing all remaining arguments of a function into one array:
function sum( first, ...others ) {
  for ( var i = 0; i < others.length; i++ )
      first += others[i];
  return first;
}
console.log(sum(1,2,3,4))// sum(1, 2, 3, 4) == 10;

// The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an 
// array (or any iterable).
// The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.

// In javascript the ... is overloaded. It performs a different operations based on where the operator is used:

// When used in function arguments of a function declaration/expression it will convert the remaining arguments into an array. This variant is called
//  the Rest parameters syntax.
// In other cases it will spread out the values of an iterable in places where zero or more arguments (function calls) or elements (array literals) are
//  expected. This variant is called the Spread syntax.

// Rest parameter syntax:

function rest(first, second, ...remainder) {
  console.log(remainder); // [3,4,5]
}
// 3, 4 ,5 are the remaining parameters and will be 
// merged together in to an array called remainder 
rest(1, 2, 3, 4, 5);

// Spread syntax:

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
// the numbers array will be spread over the x y z parameters in the sum function
console.log(sum(...numbers));

// the numbers array is spread out in the array literal before the elements 4 and 5 are added
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);











