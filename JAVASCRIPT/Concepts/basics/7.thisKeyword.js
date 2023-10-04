const title = 'this keyword';
document.getElementsByTagName('h1')[0].innerHTML = title;
document.title = title;

//4. THIS KEYWOARD

// THIS referes to the object on which we call our function
// obj1.displayName();

// we are calling the function displayName on the object obj1 therefore the value of this inside of display name should be obj1.

1.//
function displaAge(){
    console.log(23, this)
}
displaAge(); // window
window.displaAge(); // window

// whenever you are calling a function directly and you dont have anything before the dot then the value of this keyword is going to be window object

2.//
let obj = {
    displaAge: function(){
        console.log(23, this)
    }
}
obj.displaAge(); // obj object

// therefore when it comes to regular functions the value of this keyword is basically what is before the dot. 
window.displayAge() // window
obj.displayAge()  // obj

3.//

let obj1 = {
    name : 'Praveen',
    displayName : displayName
}
let obj2 = {
    name : 'Simran',
    displayName : displayName
}
function dispalyName(){
    console.log(this.name);
}
var name = 'Naveen Kumar'; // global variable
obj1.displayName(); //Praveen
obj2.displayName(); //Simran
// so using this concept of THIS keyword we are able to reuse this pertiular function. the value this is basically determained by how we are calling a function.

dispalyName() === window.dispalyName(); // Naveen kumar
// window object contains all global variables and global functions therfore the value of name inside the window object is basically Naveen Kumar that's
// why this is printing Naveen Kumar  


4.// 

const obj = {
    name : 'Praveen',
    sayHello: function(){
        console.log('Hello', this)
        // var sayBye = function(){
        //     console.log('Bye', this)
        // }
        // sayBye(); // window object
        var sayBye = () => {
            console.log('Bye', this)
        }
        sayBye(); // obj
    }
}
obj.sayHello(); // obj

// In arrow function the value of 'this' depeneds on where the function is defined and not how we are calling. it does not matter how we are calling we
// can completly ignore this when it comes to arrow functions 
// in the global execution context the value of this is basically window object
var sayBye = () => {
    console.log('Bye', this) // window
}
// we have defined sayBye function withing global scope and in the global scope and in the global scope the value of this is nothing but window object.
// scope chain : the scope of a function depends on where the function was defined and not how we called the function
// in case this keyword exactly the opposite . the value of this depends on how we call the function 

// Explanation 2

// this keyword/variable: special variable that is created for every execution context(every function). Takes the value of (points to) to the 'owner' of
// the function in which the this keyword is used.
// this is NOT static, it depends on how the function is called, and its value is only assigned when the function is actualy called.

// Method => this = <object that is calling the method>
// Simple function call => this = undefined
// Arrow functions => this = <this of surrounding function (lexical this)>. Dont get own this.
// Event listener => this = <DOM element that the handler is attatched to>
// new, call, apply, bind 


const jonas = {
    name : 'jonas',
    year: 1995,
    calcAge: function(){
        return 2037 - this.year;
    }
}
jonas.calcAge();

//5. Regular functions vs Arrow functions

const jonas = {
    name: 'jonas',
    year: 1992,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => console.log(`Hey ${this.name}`) // Hey undefined
    // arrow function does not get its own this keyword it will simply use the this keyword from its surroundings. so in other words, its parents this
    // keyword and the parent scope of this greet method is the global scope.
    // the object is not a code block it does not create its own scope it is an object literal so its a just a way that we literally define objects so all
    // of this here in jonas is global scope still and so therefore, that incluedes this greet method it is in the global scope and so therefore, the arrow
    // function here which does not have its own this keyword. will use this keyword from the global scope and that is the window object.
    // if name declared globaly or available in global window it picks from there  
    // so never use arrowfunction  as a method.
}
jonas.greet();  // hey undefined.

// example of pitfall of this keyword is when we have a function inside of a method and that is pretty common thing to happen.

const jonas = {
    name: 'jonas',
    year: 1992,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        // const isMilleanial = function(){
        //    console.log(this);
        //    console.log(this.year >= 1981 && this.year <= 1986);
        // }
        // isMilleanial(); // TypeError: cannot read property of 'year' of undefined.
        // rule: inside a regular function call, which this clearly is, that this keyword must be undefined.
        // now there are two solutions to this problem
        
        // solution 1
        // is to use an extra variable
        const self = this;
        // and now we still have access to this keyword set to jonas. and so then thorough the scope chain, this self will be equal to this.  so self
        //  referenced here, but its not of course in the scope and so javascript goes up the scope chain, into the parent scope, which is calcAge.
        const isMilleanial = function(){
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1986);
        }
        isMilleanial(); 

        // solution 2: es6 modern better solution is to use arrow function
        // arrow function does not have this keyword, simply use this keyword of its parent scope and in this case, that will be calcAge method and in
        // here the this keyword is Jonas,so the jonas object.
        // and then it is gonna work as expected, because this arrow function uses this keyword from its parent scope. so basically an arrow function
        // inherits the this keyword from the parent scope.
        const isMilleanial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1986);
        }
        isMilleanial(); 
    },
    greet: () => console.log(`Hey ${this.name}`) 
    // rule: shoud not use arrow function as method.
  }

jonas.greet();
jonas.calcAge();

// arguments keyword
// arguments keyword is only available in regular functions

const addExpr = function(a, b){
    console.log(arguments); [2, 5]
    return a + b;
}
addExpr(2, 5);  //[2, 5]
addExpr(2, 5, 8, 12)  //[2, 5, 8, 12]

// with arrow function

var addArro = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArro(2, 5, 8, 12); // R.error arguments not defined

