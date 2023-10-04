// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
// It keeps returning a new function until all the arguments are exhausted. The arguments are kept "alive"(via closure) and all are used in execution
// when the final function in the currying chain is returned and executed.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.
// We can implement function currying using two methods:

// bind() method
// closures

// bind() method gives us a copy of the multiply method and it does not invoke it directly.
function multiply(a, b){
    console.log(a * b);
}

let multiplyByTwo = multiply.bind(this, 2);
console.log("multiplyByTwo method")
multiplyByTwo(5);
multiplyByTwo(6);

let multiplyByFive = multiply.bind(this, 5);
console.log("multiplyByFive method")
multiplyByFive(5);
multiplyByFive(6);

// So, in the above code snippet, we are permanently assigning a value of parameter a as 2 and then reuse the multiplyByTwo method to assign the value of parameter b.
// So in this way, we can reuse our function using currying.



// Closure makes currying possible in JavaScript. Closure gives you access to an outer function’s scope from an inner function.
// It’s the ability to retain the state of functions already executed, gives us the ability to create factory functions — functions that can 
// add a specific value to their argument.

function multiply(a){
    return function(b){
        console.log(a * b);
    }
}

let multiplyByTwo = multiply(2);
console.log("multiplyByTwo method")
multiplyByTwo(5);
multiplyByTwo(6);

// In the above code snippet, multiply(2) will return a function having a=2 predefined, and then we will assign a value of b using multiplyByTwo(5).

function multiply(a){
    return function(b){
        console.log(a * b);
    }
}

multiply(2)(10);
// In the above example, a is equal to 2 and b is equal to 10.


// Advantages of Currying

// Increase Code reusability.
// Avoid frequently calling a function with the same argument.
// Make your code easier to refactor.

// The idea behind currying is to take a function and derive a function that returns a specialized function(s).