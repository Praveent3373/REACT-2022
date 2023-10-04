
// Functional Programming

// Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values.
// In functional programming, we think and code in terms of functions.
// Examples: JavaScript, Haskell, Clojure, Scala, and Erlang

// First Class Functions
// First Class function built with the intention of being passed around to other functions and will do a specific thing.
// Functions are objects in any Functional Programming Language.

// Higher Order Functions
// A Higher-Order function is a function that receives a first class function as an argument or returns the first class function as output.
// Example: map, filter, reduce, forEach etc.,

// Array Iterator Methods in JavaScript
// These are very useful methods for iterating through array and performing computations, making decisions, filtering out stuff, and more.

// The map()
// The map() method creates new array by calling the callback function provided as an argument on every element in the input array.
// It will take every returned value from the callback function and creates a new array using those values.
// The callback function passed to the map() method accepts 3 arguments: element, index and array.
// The map() method creates a new array by iterating through the elements and applying logic we provided in the function as an argument.

// forEach()
// The forEach() method used to perform action for each element in the array.
// It accepts 3 arguments: element, index and array.
// The forEach() method returns “undefined“.	

// map() returns the new array with modified values and forEach() will perform action for each element in the array.
// If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.
// But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.
// If you want the benefits of the return value or somehow you don’t want to change the original array then proceed with the map() otherwise if you are
// just interested to iterate or perform the non-transformation process on the array, forEach() could be the better choice.


// The filter()
// The filter() method creates a new array with all elements that pass the test provided by the callback function.
// The callback function passed to the filter() method accepts 3 arguments: element, index and array.
// The filter() method creates a new array with all the elements that satisfies the condition mentioned in the function. 

// The find() array method
// find() returns the value of the first element in the array where predicate is true, and undefined otherwise.
// find() returns the first matched element from the array that satisfies the condition in the function.
// findIndex() returns the index of the first element in the array where predicate is true, and -1 otherwise.

// The reduce()
// The reduce() method executes the callback function on each member of the calling array which results in a single output value.
// It accepts 2 parameters: reducer function, initial value(optional)
// reducer function accepts 4 parameters: accumulator, currentValue, currentIndex, sourceArray.
// If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array.
// If no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.
// The reduce() method applies a reducer function on each of the array elements and returns an output value. 

// The some() array method
// The some() method returns a boolean value (true/false) based on at least one element in the array passing the condition in the function. 
let hasStudentBelow30 = students.some((element, index) => {
return element.age < 30;
});
console.log(hasStudentBelow30); // true

// The every() array method
// The every() method detects if every element of the array satisfies the condition passed in the function. 
const atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2;
});
console.log(atLeastTwoCourses); // true

// The at() Method
// The proposed at() method would help you access the elements of an array using a negative index number. 
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined




// Functional Programming

let subject = function() {
	return 'Higher Order Function';
};
let username = () => 'Chinni';
function a(b) {
	b();
	return function(name) {
		console.log('output from A🔥' + name);
	};
}
function b() {
	console.log('output from B🔥');
}
const c = a(b);
c('Venkatesh');
console.log(username());
console.log(subject());

// First Class Functions

let add = (num) => num + 1;
function numbers(fn, x) {
	return fn(x);
}
let result = numbers(add, 5);
console.log(result);

// How Functions are objects?

let user = { name: 'Venkatesh' };
user.profession = 'Youtuber';
console.log(user);

function sayHello() {
	console.log('Hello');
}
sayHello();
sayHello.age = '10';
console.log(sayHello.age);

// Higher Order Functions

let numbers = [ 1, 2, 3 ];

// map()

let result = numbers.map((element) => {
	element = element + 1;
	element = element + 2;
	return element;
}); 

console.log('modified', result);
console.log('original', numbers);

// Example: #1
const arr1 = [ 1, 2, 3 ];
// Without HOF
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
	arr2.push(arr1[i] * 2);
}
// prints [ 2, 4, 6 ]
console.log(arr2);

// With HOF
const arr2 = arr1.map((element) => element * 2);
console.log(arr2);

// Example: #2
const users = [ { name: 'Venkatesh' }, { name: 'Chinni' }, { name: 'Saqib' } ];
// Create a new array of users by adding profession
// Without HOF
const output = [];
for (let i = 0; i < users.length; i++) {
	users[i].profession = 'Full Stack Developer';
	output.push(users[i]);
}
console.log(output);

// With HOF
const output = users.map((user) => {
	user.profession = 'Full Stack Developer';
	return user;
});
console.log(output);

// forEach()
let numbers = [ 1, 2, 3 ];
const result = [];
numbers.forEach((element, index, array) => {
	element = element + 1;
	result.push(element);
});
console.log(result);
console.log(numbers);

// filter()
const users = [ { name: 'Venkatesh' }, { name: 'Chinni' }, { name: 'Manjunath' } ];
let filteredUser = users.filter((user) => user.name === 'Venkatesh');
console.log('filtered', filteredUser);
console.log('original', users);

// filter and find
let numbers = [ 2, 3, 1 ];
let result = numbers.filter((number) => number === 1);
console.log(result);
let find = numbers.find((number) => number === 1);
console.log(find);
let findIndex = numbers.findIndex((number) => number === 1);
console.log(findIndex);

// reduce()
const arr = [ 1, 2, 3, 4, 5 ];
const sum = arr.reduce(function(accumulator, currentValue, currentIndex, sourceArray) {
	return accumulator + currentValue;
}, 10);
// prints 15
console.log(sum);


// This array contains the information for some students subscribed to various paid courses:

let students = [
    {
        'id': 001,
        'f_name': 'Alex',
        'l_name': 'B',
        'gender': 'M',
        'married': false,
        'age': 22,
        'paid': 250,  
        'courses': ['JavaScript', 'React']
    },
    {
        'id': 002,
        'f_name': 'Ibrahim',
        'l_name': 'M',
        'gender': 'M',
        'married': true,
        'age': 32,
        'paid': 150,  
        'courses': ['JavaScript', 'PWA']
    },
    {
        'id': 003,
        'f_name': 'Rubi',
        'l_name': 'S',
        'gender': 'F',
        'married': false,
        'age': 27,
        'paid': 350,  
        'courses': ['Blogging', 'React', 'UX']
    },
    {
        'id': 004,
        'f_name': 'Zack',
        'l_name': 'F',
        'gender': 'M',
        'married': true,
        'age': 36,
        'paid': 250,  
        'courses': ['Git', 'React', 'Branding']
    } 
];