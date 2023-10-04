// JS Execution

//a. Javascript Engine: for chrome v8 engine

// program that executes javascript code.
// Js engine always containes two things callstack and heap
// callstack is actually where our code is executed using something called execution context
// and then the heap is an unstructured memory pool which stores all the objects that our application needs.

//b. how the code is compiled to machine code?
// the computer's processor only understands 0's and 1's.
// therefore every single computer program ultimatly needs to be converted into this machine code and this can happen using compilation or interpretaion
// so in compilation , the entire source code is converted into machine code at once and this machine code is then written into a portable (binary)
// file that can be executed on any computer.
// SOURCE CODE => PARSING => COMPILATIN => EXECUTION

//c. Javascript Execution Context
// after finished compiling
// global execution context created for top level code. that top level code is not basically inside any function.
// at the begining only the code that is outside of functions will be executed.
// functions should only be executed when they are called
var name = 'Praveen' // this name variable declaration is clearly top level code and therefore it will executed in GEC
// once the top level code is finished. functions finally start to execute as well.
// execution context is an environment in which a piece of js is executed. stores all the necessary information for some code to be executed.
// One Execution Context per function: for each function call, a new execuition context is created.
// all these execution contexts together make up the call stack.
// when all functions done executing. the engine will basically keep waiting for callback functions to arrive. so that it can execute these.

//d. inside execution context
// 1.variable Environment
    //  let, const, and var declarations
    //  Functions
    //  arguments object (not in arrow functions)
// 2.Scope Chain
// 3.this keyword        (not in arrow functions)

//e. The call stack
// call stack is the place where execution contexts get stacked on top of each other, to keep track of where we are in the execution.
// after each function returned the perticalur function will be popped off from the stack in order.




// 1. How does javascript works ?

// javascript file cannot executed in the browser directly.
// javascript engine takes javascript code and converts it into machine readable code.
// machine readable code : it is basically bits 0's and 1's that's computer understands.
// so for the browser your js engine will convert it into code that your brower can understand.
// js engine is also written in some of the other language.
// in chrome we have the v8 engine and this is written in c++.
// what is inside the js engine ?
// inside of js engine two main things are there.
// 1. Memory Heap      
// const a = 10;
// anything that needs to be stored and has some value will be actually stored inside of your memory heap.
// memory heap has limited space therefore if you keep declaring variables and dont use them and you dont clear your memory then you are gonna have a
// memory leaks.
// that is the reason global variables are bad.
// 2. Call Stack.
// console.log(2)
// whenever you have anything to execute any line of code will be executed in your call stack.
// "console.log(2)" statement first comes inside callstack it will get executed once it is executed it will be popped off from the stack.
// and whenever you call a function that function will be pushed on to the call stack once that function returns it will be pushed out of the call stack.
// Javascript is a single threaded language. this statement means
// inside of the call stack you can only execute one task at a time inside of your call stack.
// you cannot have multiple statements executing at the same time
// therefore that means if you can execute only one task at a time your program is running on one thread.
// therefore that means js only has one call stack and that's why it is single threaded language.
// some other lanuges might have multiple call stacks and therfore they won't be single threaded.
// asynchronuos js we say that that perticular piece of code executed in the background.

console.log('1');
setTimeout(() => {
    console.log('2')
}, 2000);
console.log('3')
// output : 1 3 2

// first it printed one and then it went to setTimeout.
// now setTimeout is actually asynchronous that means it is executed in the background.
// therefore it had to wait for 2 seconds so 2 seconds we dont want to keep waiting to execute the next line so then we executed the next line first.
// it printed 3.
// and then finally after 2 seconds over we printed 2.

// in order to execute js code when it comes to asynchrnous js it is not just the js engine that is involved there is a complete js run environment.
// setTimeout is part of the web api. web api gives you various other apis for example DOM, ajax etc.

// call stack process:
// first console.log('1') is pushed onto the stack and 1 will be printed in the console. now since this is executed this can be popped off from the stack.
// setTimeout is getting pushed onto the stack. stack cannot execute setTimeout. as it part of web api stack sends it to the web api . so that's when your
// web api comes into picuture when setTimeout is seen by the stack.
// then stack is goona pop it off because it cannot execute that right now then its gonna come and sit inside of your web api.
// web api is simply going to wait for two seconds.
// next thing console.log('3'). so meanwhile your stack is empty and console.log('3') will be pushed onto the stack . meanwhile web api is still waiting
// because 2 seconds not yet over so it will print the output as 1 and 3. and now that this line is executed we can pop it off from the stack. so this
// will get popped off from the stack. 
// while this process was happening your web api was waiting two seconds are still not over. now lets say that two seconds are over and what web api do ?
// inside of this settimeout there is actullay a callback. callback is something that is executed after certain activity is done. after two seconds over
// setimeout function get popped from the web api and there your callback queue comes into the picture and it will be pushed to your callback queue.
// callback queue will keep a track of all your call backs. queue means first come first serve.
// next thing is event loop (event loop will constantly keep checking if the stack is empty and if the stack is empty is there a callback that i need to
// execute now event loop will see ok the stack is right now empty and there is also a callback which needs to get executed which is console.log('2') 
// then it will say okay let's push it to the stack so that we can execute this because stack is empty so now the next thing that will happen is it will
// get pushed to the stack and now console log 2 we can finally print the outout as 1 3 and 2. and now it prints 1 3 and 2 as oupupt. now this can also
// get popped off from the stack.)

// quickly revise
// now let's just quickly revise what we just learned first if there is any asynchronous code or let's say there is set timeout it will come to the stack
// and your stack will say oh well this that is not something i can execute so then it will be pushed to the web api if it is a part of web api.
// web api has many other apis like your dom and then you have this set timeout so then it will be pushed to your web api the web api is then 
// going to say that okay now i have waited for a certain amount of time it is done now let me push it to the callback queue.
// it will only push the callback part which needs to be executed. now your event loop will keep checking. if the stack is empty and then if it is empty
// and there is some callback that needs to be executed it will push it on to the stack and it will get executed. if there is any other statement 
// which is getting executed in the stack currently your event loop will not push it. it has to check whether it is empty or not.

// 2. Execution context

// Global execution conent

// even though you dont have any code return, global execution context is created.
// any code that you write will be excuted inside global execution context.
// therefore GEC remains throughout the execution of your program
// GEC gives 2 things: 1.window object 2. this keyword
// window object has varios properties
// when you write document.getelementsby.. your are basically getting access from the window.
// window and this are actually same "window === this => true;"
var name = 'Simran' // name is added to the GEC
// that means anything you declare globally is going to present inside GEC
function displayName(){
    console.log("Hi praveen")
}
// 
// displayName also added to the GEC
// if you are creating functions or variables inside of your file that is globally all of it is goining to get added inside of GEC.
displayName();
// when we invoke the function another EC got created as displayName inside the GEC.
// when we actually excute this function when this is seen by the JS engine its going to create another EC that means every function when it is
//  executed it will have it own execution context.
// inside dispalyName EC there are two things  which are given to us by default one is the arguments keywords which are going to contain any arguments
//  we passed to the function and other one is this keyward.
function displayName(){
    var name = "Simran";
    console.log("Hi praveen")
} 
// any variable that is declared inside the function will not be a part of GEC it will be the part of the EC of that perticular function. 
function displayName(){
    var name = "Simran";
    console.log("Hi praveen")
    function displayAge(){
        console.log('age is 23')
    }
    displayAge();
}
displayName()
// since we called displayAge() inside of dispalyName another EC created for displayAge inside of the EC of displayName.

// there are two phases for any EC.
// 1. creation phase 2. Execution phase
// in the creation phase you get access to window and this and
// in the execution phase that is when you are actually executing code that is that is when these funcionts get invoked again for each function
//  also there are two phases 
// in creation phase hoisting also takes place

// in the creation phase 
// and now we have access to window, this and any other variables or functions we have declared globally.
// we will get access to everthing but it will be not assinged anything

// in the execution phase
// the function will actually get invoked and everthing will get assign.
// in the next step in the execution phase of GEC displayName Execution context got created and it is in creation phase and in the next step it got
//  changed to Execution phase.
// in the execution phase basically your code is actually being executed. 
// whenever a function is done executing the EC for that function is completly removed.
// finally we are back to GEC .only the GEC is actulally remaining this is remaining beacuse it is going to be there througout the execution of your
//  program unless you stop running your code.

// 3. scope chain | Lexical environment

// Lexical means where exactly in the code is something return.
// the word lexical is more related to where we have actually define the function or where we have return a variable
// lexical parent : lexical parent of any function is simply where it was written.
// Lexical environment : its a combination of local memory of that function along with its parents lexcial environment

var name = 'Simran';
// lexical parent of displayname
function displayName(){
    // lexical parent of displayAge
    var age = 23;
    console.log(name);
    function dispalyAge(){
        // own local memory
        console.log(age);
    }
    displayName();
}
displayName();

// when you try do console.log(age) it will first look at its local memory if not found then it will move on to its lexical parent if age is there in the
//  local memory of displaName it will print age, if the age not found then it will go to lexical parent which is in this case GEC we have reached the top
//  most level and then it will pick it from here if exists. if it is not present even globally then it will give us reference error age is not defined.
// this process of looking at your own local memory if you do not find that variable in your own local memory and you actually check your lexical parent
//  again check the local memory of your lexical parent and you keep doing this until you find that variable is nothing but scope chain.
// every function has a reference to its lexical parent.
// if the variable found in any one of environment it will stop searching and prints the age if not found even in GEC that reference  will actualy pointing
//  to null and therefore it wont be able to find it will throw an error that age is not defined.

// conclusion
// whenever your function is trying to access any variable if it is not  present in the local memory of that function it will try to look at the local
//  memory of its lexical parent. the lexical parent of dispalyAge is displayName again it will look at look at the local memory of it and if it is not
//  present it will move on next lexical parent and so on. 
// every function has reference  to the lexical environment of its lexical parent. displayName does not have a reference to the lexical environment of its
//  child .
// scope chain only works in one way and thats how you keep find variables if they are not present.
// lexical we actually mean to say where in the code is it defined and not where we are calling it. 



const name = 'Praveen kumar';
const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    return a;
}
function second (x, y){
    var c = 2;
    return c;
}

const x = first();

// Scoping
// Scoping : how our programs variables are organized and accessed. "where do variables live?" or "where can we access a certain variable, and where not?";
// Lexical scoping: scoping is controlled by placement of functions and blocks in the code
// Scope : space or environment in which a certain vaiable is declared (variable environment in case of functions). there is global, function, block scope;
// scope of a variable : Region of our code where a certain variable can be accessed.

// global scope
// outside of any function or block
// variables declared in global scope are accessible everywhere.
const name = 'Praveen';
const role = 'ui developer'

// function or local scope
// variables are accessible only inside function, NOT outside.
function calcAge(year){
    const now = 2037;
    const age = now - year;
    return age;
}
console.log(now) // Reference error

// Block scope (ES6)
// variables are accessible only inside block (block scoped);
// however, this only applies to let and const variables.
// functions are also block scoped (only in strict mode);
if(year >= 1981 && year <=1996){
    const food = 'Avocado toast';
}
console.log(food); // Reference Error

// the scope chain

const Name = 'praveen';
function first(){
    const age = 28;
    if(age >= 30){
        const decade = 3;
        var millenial = true;
    }
    function second(){
        const job = 'teacher';
        console.log(`${Name} is a ${age}-old ${job}`)
    }
    second();
}
first();

// Every scope always has access to all the variables from its outer scopes. this is the scope chain.
// when a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable its looking for. this is called
// variable lookup
// the scope chain is one way street; a scope will never, ever have access to the variables of an inner scope.
// the scope chain has nothing to do with the order in which functions were called. it does not affect the scope chain at all;





