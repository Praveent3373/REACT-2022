
// Qn 1. sort numbers

function sortConcept(){
    // ascending order
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a-b});
    console.log(points);
    
    // descending order
    let points1 = [40, 100, 1, 5, 25, 10];
    points1.sort(function(a, b){return b-a});
    console.log(points1);

    // Sort alphabetically, and then reverse the order:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    console.log(fruits);

    // find the highest value in aray
}
// sortConcept();




// Qn 2. var x = ‘well come to sangareddy’ The duplicate letters which has been repeated you need to remove it and get the output

const stringValue = 'Sangareddy';
let stringValueOutput = stringValue.split('').filter((function(value, index, arr) {
       return arr.indexOf(value) !== index;
})).join('');

console.log(stringValueOutput);

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('baraban'));




// Qn 3. Display student details like name, marks , contact number and get the output in tabular form.



// Qn 4. How to reverse a number in JavaScript / How to swap two variables in JavaScript

// Destructuring assignment
let a = 1;
let b = 2;
[a, b] = [b, a];
a; // => 2
b; // => 1
console.log(a, b);



// Qn 5. Find the greater number

let a = 9, b = 4; c = 5;
let m1 = Math.max(a, b, c);

let m2 = Math.max(2, 5, 3);

let ar1 = [1, 5, 99];
let m3 = Math.max(...ar1);
console.log(m1, m2, m3);




// Qn 6. fizbaz program

for(var i = 0; i< 10; i++){
    let output = '';
    if(i % 3 === 0) output += 'fizz'; 
    if(i % 5 === 0) output += 'bazz'; 
    console.log(output || i)
}



// Qn 7. reverse the string

var name = 'praveen kumar';
let newName = name.split('').reverse().join('');
console.log(newName);

let newArr = [];
for(var i = name.length; i>=0; i--){
   newArr.push(name[i])
}
console.log(newArr.join(''));




// Qn 8. find the big word 

  function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  let output = findLongestWord("The quick brown fox jumped over the lazy dog");
   console.log(output);
//   m2

 function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  let output = findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(output);




  // Qn 9. filter items based on specific letter

const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];
const startsWithN = countries.filter((country) => country.startsWith("N"));
console.log(startsWithN);




// Qn 10. convert array items to string

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log(text);




// Qn 11. trim()

var str = "  abc de fog   ";
let out1 = str.trim(); // The trim() method removes whitespace from both ends of a string. // abc de fog
let out2 = str.replace(/\s+/g, ''); // will removes total spaces // abcdefog
console.log(out1, out2);




// Qn 12. type convertion




// Qn 13. add, update, delete array elements.




// Qn 14. convert sentence to array and show in array

function conversion(){
    const string = 'word';  //  // ['w', 'o', 'r', 'd']

    // Option 1 : string.split('');
    
    console.log(string.split(''));
    
    // Option 2 :  [...string]
  
    console.log([...string]);
    
    // Option 3 : Array.from(string);
   
    console.log(Array.from(string));
      
    // Option 4 : Object.assign([], string)
    
    console.log(Object.assign([], string));
  
    // convert sentence to array and display words

    let name = "Robin Singh";
    let convertion = name.trim().split(" ");
    console.log(convertion);
}
conversion();




// Qn 15. destructuring , spread operator , rest operator examples




// Qn 16. add class based on charectors

let text = document.querySelector('#demo');
if(text.textContent.length > 20){
    text.classList.add('active');
}
else{
    text.classList.remove('active');
}




// Qn 17. Check for repeated characters in a string Javascript

var text = "test".split("");
var out = text.some(function(v,i,a){
  return a.lastIndexOf(v)!=i;
});
console.log(out);

var texts = ["test", "rest", "why", "puss"];
for(var idx in texts){
    var text = texts[idx].split("");
    document.write(text + " -> " + text.some(function(v,i,a){return a.lastIndexOf(v)!=i;}) +"<br/>");

  }



  
// Qn 18. Four Ways to Create Objects in JavaScript

// Object Literals.

var car = { model: 'bmw', color: 'red', price: 2000 }

// New operator or constructor.

function Car(model, color) {
    this.model = model;
    this.color = color;
}
var c1 = new Car('BMW', 'red');
console.log(c1.model);

// Object.create method.

var Car = {
    model: 'BMW',
    color: 'red'
}

var ElectricCar = Object.create(Car);
console.log(ElectricCar.model); // BMW

// Class.

class Car {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}

var car1 = new Car("BMW", 100);
car1.getInfo();
var car2 = new Car("Audi", 150);
car2.getInfo();





// Qn 19. Two Ways to Create Arrays in JavaScript

// Array Literal
var stringArray = ["one", "two", "three"];

// Array Constructor

var stringArray = new Array();
stringArray[0] = "one";
stringArray[1] = "two";

var numericArray = new Array(3);
numericArray[0] = 1;
numericArray[1] = 2;
numericArray[2] = 3;

var mixedArray = new Array(1, "two", 3, "four");




// Qn 20. gues the answers

// 1
function doSomething(){
    x = 33;
    console.log(x);
    var x;
} // Ans: 33

// 2
var a = 10;
function fn() {
  console.log(a);
  var a = 20;
  console.log(a);
}
fn(); // Ans: Undefined, 20

// 3
console.log('Start script...');
setTimeout(() => {
console.log('Download a file.');
}, 0);
console.log('Done!');
// Ans: 
 "Start script..."
 "Done!"
 "Download a file."

// 4
console.log(0.1 + 0.2 === 0.3)  // false

// 5
for (var abc = 1; abc <= 2; abc++) {
  setTimeout(function() { alert(abc) }, 100);
} // prints 3 two times

// 6
function foo(n) {
  if (n == 6) {
      let num = 2;
  }
  console.log(num); // Uncaught ReferenceError: num is not defined
}
var n = 6;
console.log(n); //6
foo(6);

// 7: how to solve below code
const P1 = Math.random();
const obj = {
    a:1,
    b:2,
        c(){},
        d:() =>{},
    [e]:42,
    P1
}
console.log(obj) // ReferenceError: e is not defined
// Ans: let e = "randomValue"; if we used array notation we need to declare property before the object.

// 8: Sum of digit of a number using Curry function with Recursion: sum(2)(3)(1)(); => 6
// https://stackoverflow.com/questions/2272902/how-can-i-make-var-a-add23-5-work
// for fixed arguments
function add(x) {
  return function(y) {
      return x + y;
  };
}
console.log(add(2)(3))
console.log(add(2)(3))

// using function
function addN(x){
  return function(y){
      if(typeof y !== 'undefined'){
          x = x + y;
          return arguments.callee
      }else{
          return x;
      }
  }
}
console.log(addN(1)(2)(3)())
console.log(addN(1)(2)(3)(10)())

// using Es6
const addArr = (a) => b => b ? addArr(a + b): a;
console.log(addArr(2)(5)(10)(7)()) 
console.log(addArr(3)(4)(1)()); 




// Qn 21. combine arrays and sort them in order

arr = [1,3,5,7]
arr2 = [2,4,6,8,9]
arr3 = [1,2,3,4,5,6,7,8,9]

let arr4 = [...arr, ...arr2];
let arr5 = arr4.sort((a, b) => a - b);
console.log(arr5);




// Qn 22. consider arr1 & arr2 and print them as ouptut

var arr1 = [2, 6, 3, 1, 7];
var arr2 = [5, 4, 0, 8, 9, 11];
output = [2,5,6,4,3,0,1,8,7,9,11]

// approach 1
var output = [];
var arr= arr1.length > arr2.length ? arr1.length : arr2.length;
for (var i = 0; i < arr; i++) {
!isNaN(arr1[i]) && output.push(arr1[i]);
!isNaN(arr2[i]) && output.push(arr2[i]);
}
console.log(output);
// approach 2
var output = [];
var arr = arr1.length > arr2.length ? arr1.length: arr2.length;
for(var i = 0; i < arr; i++){
  if(typeof arr1[i] === "number" ){
    output.push(arr1[i])
  }
  if(typeof arr2[i] === "number"){
    output.push(arr2[i])
  }
}
console.log(output);




// Qn 23. remove unwanted values from array and print the values as expected below.
var arr = [1,"", null,2, undefined, 3, false, 4, 'Praveen', true];
var arr2 = [0, , ,1, , , ,2, , ,3];

// remove all falsy values
let filterd = arr.filter(Boolean);
console.log(filterd);

// remove all undefined values
let filterdUd = arr.filter((el) => el !== undefined);
console.log(filterdUd);

// remove all nullish values
let filterNull = arr.filter((el) => el !== null);
console.log(filterNull);

// remove all holes
let filterHole = arr2.filter(() => true);
console.log(filterHole)



// Qn 24. add the isMinor property dynamically for all items with boolean values
var names = [{name: 'praveen', age: 26},{name: 'naveen', age: 29}, {name: 'ganapathi', age: 30},]

let newNames = names.map((user) => {
  return user.age < 18 ? {...user, isMinor: false} : {...user, isMinor: true}
})
console.log(newNames);



// Qn 25. sort the objects of arrays as per requirements
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

var names = [
  {name: 'praveen', age: 29, joinedDate: 'December 15, 2017'},
  {name: 'Naveen', age: 25,  joinedDate: 'January 15, 2019'},
  {name: 'Ganapathi', age: 21, joinedDate: 'February 15, 2011'},
]

// by numbers
let orderAges = names.sort((a, b) => {
  return a.age - b.age;
})
console.log(orderAges);

// by names
let orderNames = names.sort((a, b) => {
    let a1 = a.name.toLocaleLowerCase();
    b1 = b.name.toLocaleLowerCase();
    if(a1 > b1){
        return 1;
    }
    if(a1 < b1){
        return -1;
    }
    return 0;
})
console.log(orderNames)

// by names ES6
let orderNamesAr = names.sort((a, b) => {
    return a.name > b.name ? 1: b.name > a.name ? -1: 0
})
console.log(orderNamesAr);

// by Dates
let orderDates = names.sort((a, b) => {
  let d1 = new Date(a.joinedDate),
  d2 = new Date(b.joinedDate);
  return d1 - d2;
})
console.log(orderDates);


// call by value and call by reference in javascript.
// sources: 
// https://www.geeksforgeeks.org/call-by-value-vs-call-by-reference-in-javascript/

// what will access in for in loop? keys or values

