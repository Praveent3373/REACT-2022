const title = 'Deeper look into functions'
document.getElementsByTagName('h1')[0].innerHTML = title;
document.title = title;

// 1. default parameters

// function(flightNum, numberOfpassengers = 1, price = 199*numberOfpassengers)
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // ES5
    // numPassengers = numPassengers || 1
    // price = price || 199
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}
createBooking('D1253');
// we can override defalut parameters
createBooking('D1253', 2); // {flightNum: 'D1253', numPassengers: 2, price: 398}
createBooking('D1253', 2, 800); //{flightNum: 'D1253', numPassengers: 2, price: 800}
// we cannot skip arguments here
// if you want to skip numberPassengers or any then set it to undefined in respected position
createBooking('D1253', undefined, 1000); // {flightNum: 'D1253', numPassengers: 1, price: 1000}
// so this is how we skip a parameter that we want to leave at its default 


// 2. How Passing Arguments works: Value vs Reference

const flight = 'LH234';
const praveen = {
    name: 'praveen kumar',
    passport: 23452730484
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999',
    passenger.name = 'Mr. ' + passenger.name
    if(passenger.passport === 23452730484){
        alert('Checked In')
    }
    else{
        alert('Wrong passport')
    }
}
// checkIn(flight, praveen)
// console.log(flight);
// console.log(praveen);
// flight Number did not changed
// as we passed that flight value to the function then the flightNum is here basically copy of original value, so flight number contains a copy and not
//  simply the original value of the flight variable.
// as flight is primative its copied by the value and does not effects the original value.
// const flightNum = flight;
// but object property name has changed
// when we try to copy an object we are really only copying the reference to that object in the memory heap. but both point to the same object in the memory.
// when we pass an object to a function its realy just like copyig an object so whatever we change in a copy will also happen in the original

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000000);
}
// newPassport(praveen);
// checkIn(flight, praveen);
// console.log(praveen);
// if we try to access checkIn after newPassport it will says wrongpassword because we have changed password using newPassport fuction

// for objects, we do in fact pass in a reference  so the memory address of the object , however that reference itself is still a value , its simply a
// value that contains a memory address so basically we pass a reference to the function. but we do not pass by reference.


// 3. first class and higher order functions

// js has first class functions this enables us to write higher order functions.

// First Class Functions

// JS treats functions as first class citizens.
// this means that functions are simply values.
// functions are just another "type" of object
// store functions in variables or properties
const add = (a, b) => a + b;
const counter = {
    value: 23,
    inc: function(){this.value ++;}
}
// pass functions as arguments to other functions
const greet = () => console.log(`Hey praveen`);
// btnClose.addEventListener('click', greet);
// Return functions from functions
// call methods on functions Ex: bind()
// counter.inc.bind(someOtherObject);

// Higher Order Functions

// A function that receives another function as an argument, that returns a new function, or both.
// this is only possible because of first class functions
// 1. function that receives another function
// const greet = () => console.log(`Hey praveen`);
// btnCLose.addEventListener('click', greet)
// here addEventLister is Higher order function
// greet is a call back function
// 2.function that returns new function
function count(){
    let counter = 0;
    return function(){
        count ++;
    }
}
// count is a higher order function and it will returns a function

// first class functions just feature all that means all functions are values. there are no first class functions in practice. just a concept.
// there are however higer order functions in practice which are possible because the language supports first class functinos


// 4. Functions accepting callback functions

// lets create our own Higher order functions
// lets create a function that accepts other functions as input 

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
// Higher Order Functions
const transformer = function(str, fn){
    console.log(`Orignial string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`)
}
// transformer('Javascript is the best', upperFirstWord);
// console.log(``);
// transformer('Javascript is the best!', oneWord);
// we are only passing the value (upperFirstWord) not the function

// JS uses callbacks all the time
const high5 = function(){
    console.log('Hello');
}
document.body.addEventListener('click', high5);
// ['Jonas', 'Praveen', 'Vinod'].forEach(high5);'

// callback functions allow us to create abstraction, abstraction means we hide the detail of some code implemention because we dont really care all that detail. 


// 5. Functions Returning Functions

const greet1 = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
greet1('Hey'); // this result will be the inner function
// so lets store the result of inner function in a variable and now 'const greeter =' value will be now a that function.
const greeter = greet1('Hey')
greeter('Praveen')
greeter('Vinod')
// or
greet1('Hello')('Simran') // immidiatly calling.

// with arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Naveen Kumar');
