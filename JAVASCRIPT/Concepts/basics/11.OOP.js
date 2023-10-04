
// OJBECT-ORIENTED-PROGRAMMING (OOP)

//👉 Object-oriented programming (OOP) is a programming paradigm (Style of code, “how” we write and organize code) based on the concept of objects;
//👉 We use objects to model (describe) real-world(E.g. user or todo list item) or abstract(HTML component or data structure) features;
//👉 Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block; 
//👉 In OOP, objects are self-contained pieces/blocks of code;
//👉 Objects are building blocks of applications, and interact with one another;
//👉 Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;
//👉 OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid “spaghetti code”).

const user = {
    // data
    user: 'praveen',
    password : 'rsgs4#',
    // behaviour
    loging(password){
        // login logic
    },
    sendMessage(str){
        // sending logic
    }
}

// 👉 Abstraction: 
// Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we’re implementing, instead of messing with
// details that don’t really matter to our implementation.


// 👉 Encapsulation:
// Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public
// interface (API).
// why ?
// Prevents external code from accidentally manipulating internal properties/state
// Allows to change internal implementation without the risk of breaking external code

// 👉 Inheritance: 
// Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us
// to reuse common logic and to model real-world relationships.

// 👉 Polymorphism: 
// A child class can overwrite a method it inherited from a parent class [it’s more complex that that, but enough for our purposes].


// OOP IN JAVASCRIPT: PROTOTYPES

// a: classical oop: classes
// Class => instance
// Objects (instanaces) are instantiated from a class, which functions like a blueprint;
// Behavior (methods) is copied from class to all instances.

// b: oop in js: prototypes
// prototype <= Object
// Objects are linked to a prototype object; so each object has a prototype.
// prototype object contains the methods and propeties that all the objects are linked to that prototype can access and use. and this behaviour usually called prototypal inheritance.
// protoypal inheritance means that all objects that are linked to certain prototype object can use the methods and properties that defined on that prototype.
// this inheritance difrent from the inheritance that was one class inheriting from another class.
// Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype;
// Behavior is delegated to the linked prototype object.
const num = [1, 2, 3];
num.map(v => v * 2);
// Array.prototype.map();
// Array.prototype is the prototype of all array objects we create in JavaScript Therefore, all arrays have access to the map method!

// 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

// 🤔 “How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?”

// 1 Constructor functions
// 👉 Technique to create objects from a function;
// 👉 This is how built-in objects like Arrays, Maps or Sets are actually implemented.

// 2 ES6 Classes
// 👉 Modern alternative to constructor function syntax;
// 👉 “Syntactic sugar”: behind the scenes, ES6 classes work exactly like constructor functions;
// 👉 ES6 classes do NOT behave like classes in “classical OOP” (last lecture).

// 3 Object.create()
// 👉 The easiest and most straightforward way of linking an object to a prototype object.

// 208. Constructor Functions and the new Operator

// the constructor function is actually completly normal function.
// the only difrrence between a regular function and a function that we call constructor function, is that we call a constructor function with new operater.
// constructor function always starts with a capital letter
// arrow function will actually not work as a function constructor because it does not have its own this keyword and we need that.
// so only function declarations & functions exressions we can use

// this function goona produce an object and in this case Person
const Person = function(firstName, birthYear){
    console.log(this); // {} empty object
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create methods inside of constructor function
    // thats because imagine we were gonna create a hundred or thousands of person objects using this constructor function
    // then each of these objects would carry around this function here.
    // so if we have thousands of objects we would create a thousand copies of this function that impact on perfomance of our code.
    // so to solve this problem we are gonna use prototype inheritance
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
}
// this constructur function is now the blueprint for a house and each of these objects that  we create through this function so that blueprint will be the actuall house. 
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// behind the scense with "new Person()"
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// we can create many objects now based on this constructor function

const naveen = new Person('Naveen', 2017);
const vinod = new Person('Vinod', 1985);
// console.log(naveen, vinod);

// in classical object oriented programming an object created from a class is called an instance.
// we created objects from a constructor function
// here jonas, naveen, vinod are instances of Person

// console.log(vinod instanceof Person);

// function constructurs are not really a feature of the javascript instead, they are simply a pattern that has been developed by other developers.

// 209. Prototypes

// each and every function in javascript automatically has a property called prototype and that inclueds, constructor functions.
// every object created by a certain constructor function will get access to all the methods and the properties that we define on the constructors prototype property.
// Person.prototype 
// so the prototype property of the constructor function
// all the objects that are created through this constructor function here will inherit so they will get access to all the methods and properties that are defined on this prototype property

// Whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object
// (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

console.log(Person.prototype); // {constructor: ƒ} 
                               // constructor: ƒ (firstName, birthYear)
                               // [[Prototype]]: Object

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}                              
jonas.calcAge();
naveen.calcAge();

// each object has special property called a __proto__
console.log(jonas.__proto__);

// prototype is the object that is used to build __proto__ when you create an object with new
// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.

// explanation: 1

// every function in javascript is an object
// as constructor function is an object so basically if it is an object we can assign properties to it.
// similarly prototype is nothing but a property on every function in js.
// In every function in js has a property prototype on it and it referes to an object and as prototype is an object you can assign properties and methods to it.

function Pokemon (name, type){
    this.name = name;
    this.type = type;
}
Pokemon.prototype.speak = function(){
    console.log('Pika Pika');
}
var pikachu = new Pokemon('Pikachu', 'Electric');
console.log(pikachu);
// output
// Pokemon {name: 'Pikachu', type: 'Electric'}
// name: "Pikachu"
// type: "Electric"
// [[Prototype]]: Object
// speak: ƒ ()
// constructor: ƒ Pokemon(name, type)
// [[Prototype]]: Object

console.log(Pokemon.prototype);
// output
// {speak: ƒ, constructor: ƒ}
// speak: ƒ ()
// constructor: ƒ Pokemon(name, type)
// [[Prototype]]: Object

// here Pokemon is the constructur function which has property prototype on it and that points to an object.
// the object which turn has a property constructor on it now it has a speak property as well that we added .
// this object has a property constructor which basically points back to the pokemon constructor
// constructor: ƒ Pokemon(name, type)

// explanation: 2

// we have a website where people can browse dogs!
// For every dog, we need object that represents that dog! 🐕 
// Instead of writing a new object each time, I'll use a constructor function from which we can create Dog instances using the new keyword
// Every dog has a name, a breed, a color, and a function to bark!

// constructor function
function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    // this.bark = function(){
    //     return 'woof!'
    // }
}

// When we created the Dog constructor function, it wasn't the only object we created. Automatically, we also created another object, called the prototype!
// By default, this object(prototype) contains a constructor property, which is simply a reference to the original constructor function, Dog in this case.
// The prototype property on the Dog constructor function is non-enumerable, meaning that it doesn't show up when we try to access the objects properties. But it's still there!
// when we create a constructor function, a prototype object gets created as well, the constructor's prototype has a reference to the original constructor function.

// instances
const dog1 = new Dog('Daisy', 'Labrador', 'black');
const dog2 = new Dog('Jack', 'Jack Russell', 'white');
// when we console the dog1
// Dog {name: 'Daisy', breed: 'Labrador', color: 'black', bark: ƒ}
// bark: ƒ ()
// breed: "Labrador"
// color: "black"
// name: "Daisy"
// [[Prototype]]: Object

// we can see all the properties we added but __proto_ is non-enumerable means that it usually dont show up when we try to get the properties and
// if we exapnd this __proto__

// Dog {name: 'Daisy', breed: 'Labrador', color: 'black', bark: ƒ}
// bark: ƒ ()
// breed: "Labrador"
// color: "black"
// name: "Daisy"
// [[Prototype]]: Object
//      constructor: ƒ Dog(name, breed, color)
//      [[Prototype]]: Object

// It looks exactly like the Dog.prototype object. __proto__ is a reference to the Dog.prototype object. This is what prototypal inheritance is all about
// Each instance of the constructor has access to the prototype of the constructor!
// The instance (dog1) also contain a property called __proto__ . this is reference to the prototype of their contructor, Dog.prototype in this case.

// Sometimes we have properties that all instances share. For example the bark function in this case: it's the exact same for every instance, why create
// a new function each time we create a new dog, consuming memory each time? Instead, we can add it to the Dog.prototype object! 🥳  

Dog.prototype.bark = function(){
    return 'Woof!'
}

// we can save memory by adding propteries to the prototype that all instances can share, instead of creating new copies of that property each time.
// Whenever we try to access a property on the instance, the engine first searches locally to see if the property is defined on the object itself.
// However, if it can't find the property we're trying to access, the engine walks down the prototype chain through the __proto__ property!
console.log(dog1);
// when I expanded the __proto__ object showing Dog.prototype. Dog.prototype itself is an object, meaning that it's actually an instance of the Object constructor!
// That means that Dog.prototype also contains a __proto__ property, which is a reference to Object.prototype!

// Summery:

// when we create a constructor function, a prototype object gets created as well, the constructor's prototype has a reference to the original constructor function.
// Each instance of the constructor has access to the prototype of the constructor!
// The instance also contain a property called __proto__ . this is reference to the prototype of their contructor
// Whenever we try to access a property on the instance, the engine first searches locally if it can't find the property the engine walks down the prototype chain through the __proto__ property!
// Whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where
// we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.
// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object with new:

// The new Operater
// 1. An empty object is created
// 2. this keyword in constructor function call is set to the new object
// 3. The new object is linked (__proto__ property) to the constructor function’s prototype property
// 4. The new object is returned from the constructor function call

// code

console.log(dog1.__proto__); // {bark: ƒ, constructor: ƒ} this is prototype of the dog1. here is bark() function that's why dog1 able to use this
console.log(dog1.__proto__ === Dog.prototype);  // true
console.log(Dog.prototype.isPrototypeOf(dog1)); // true
console.log(Dog.prototype.isPrototypeOf(dog2)); // true

Dog.prototype.food = 'Rice';
console.log(dog1.__proto__);
console.log(dog1.hasOwnProperty('Rice')); // false because its not in the dog1 object it simply has access to it beacuse prototype.

console.log(dog1.__proto__);
// Object.prototype (top of prototype chain)
console.log(dog1.__proto__.__proto__);
console.log(dog1.__proto__.__proto__.__proto__); // null

console.dir(Dog.prototype.constructor);

const arr = [3, 4, 6, 5]; // new Array = []
console.log(arr.__proto__); // will get all methods 
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

const h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// program

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function(){
    this.speed += 20;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

// ES6 Classes
// Es6 classes allow us to do the same thing but using a nicer and more modern syntax.
// Classes in javascript are just syntactic sugar they still implement prototypal inheritance.
// Classes are just a special type of functions behind the scenes, classes are still functions.
// we have class expressions and class declarations
// class expression
// const PersonCl = class{}
// they visually put all the code that belongs to a certain class, all data into one nice code block.  


// keep in mind
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (means we can pass them into functions and also return them from the functions)
// 3. Classes are executed in strict mode


// class declaration
// everything is same like functions but only diffrence is syntax
class PersonCl{
    // constructor method
    // this constructor actually works in a similar way as a constructor function.
    // this one is actualy a method of this class and in fact it needs to be called constructor
    // so that is the rule.
    // so whenever we create a new object like a new instance using the new operater this constructor will automatically be called and that
    // will return a new object. and then that will be stored into "jessica"
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
        // so here we have properties that will be stored in the new object that we want to create. 
    }
    // methods
    // methods will be added to .prototype property
    // all of these methods that we write in the class so outside of the constructor will be on the prototype of the objects and not on the objects themselvs.
    // when expand proto we will see the calcAge function in it.
    // instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

// SETTERS AND GETTERS

// Every object in js can have setter and getter properties. and we call these special properties assessor properties while the more normal properties called data properties.
// So getters and setters are basically functions that get and set a value so just as the name says. but on the outside they still look like regular properties.
// we dont need to use setters and getters sometimes its nice to be able to use these features and especially when we need validation by the time we are creating a new object.
const account = {
    owner : 'Jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov)
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// with classes

class Person1 {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get age(){
        return 2037 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName(){
        return this._fullName;
    }
}

const john = new Person1('John Smigla', 1996);
// const pawan = new Person1('pawan', 1990);


// 215.Static methods

// good example to understand what a static method actually is the buil in Array.from method which converts any array like structure to a real Array.
// Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to
// create utility functions for an application.” In other words, static methods have no access to data stored in specific objects.
// these methods operate on the class instead of instances of the class
class Person2 {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    
    // instance methods will be added to .prototype property so that all the instances can have access to them.
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    get age(){
        return 2037 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName(){
        return this._fullName;
    }
    // static method
    static hey(){
        console.log('Hey there...');
        console.log(this);
    }
}

const meera = new Person2('meera j', 1996);
Person2.hey();
// meera.hey(); // Uncaught TypeError: meera.hey is not a function
// because it is not in the prototype of the meera object
// this static method is not inheritaed
// these static methods are not available on the instances and sometimes still usefull to implement some kind of helper function about a class or about a constructor function

// 216. Object.create

// third way of implementing prototypal inheritance or delagation as we can also call it and that third way is to use a function called Object.create.
// which works in pretty diffrent way than constructor functions and classes work.
// however there are no prototype properties involved and also no constructor, and no new operater.
// so instead we can use Object.create to essentially manually set the prototype of an object to any other object that we want

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    // not constructor but method
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven); // empty object {} created with proto
// adding properties to the object
steven.name = 'Steven',
steven.birthYear = 2002,
steven.calcAge();
console.log(steven.__proto__ === PersonProto);
console.log(steven);
// best way implement function (init) that basically work for us
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1994);
sarah.calcAge();
console.log(sarah);

// 218. Inheritance Between "Classes": Constructor Functions

const Person3 = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person3.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course){
    // having duplicate code is never good idea
    // instead of having duplicate code simply call Person3 function
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // Person3(firstName, birthYear) // does not work because we are calling constructor as Regular function call, in regular function this keyword is set to undefined. 
    // we need to use call method to implement this keyword manually
    Person3.call(this, firstName, birthYear)
    // the this keyword in the begining empty object which is being created by new operater.
    this.course = course;
}

// linking prototypes
Student.prototype = Object.create(Person3.prototype);
// now student.prototype object is now an object that inherits from preson3.prototype
// now we have to create this connection here before we add any more methods to the prototype object of student
// and that's because Object.create will return an empty object and at this point student.prototype is empty
// so then onto that empty object we can add methods like this one.

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 1993, 'Computer science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person3);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// coding example.

const Car1 = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car1.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car1.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV = function(make, speed, charge){
    Car1.call(this, make, speed);
    this.charge = charge;
}

// link the prototype property
EV.prototype = Object.create(Car1.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo
}
// overrides the parent method
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}
const tesla = new EV('Tesla', 123, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// 220. Inheritance Between "Classes": ES6 Classes

class PersonCl1{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);
    }
}


// to implement inheritance between es6 classes we need two things we need the extend keywords and we need the super function.
// this extends keyword alone here will then link to prototypes behind the scenes
class StudentCl extends PersonCl1 {
    constructor(fullName, birthYear, course){
        // we dont need to use call method to call the function instead
        // call the super function it is basically the constructor function of the parent class
        // super function is responsible for creating the this keyword in this subclass
        // always needs to happen first;
        super(fullName, birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    // overrides parent method
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student i feel more like ${2037 - this.birthYear + 10}`)
    }
    // this new method overrode the one that was already there in the prototype chain
    // that's because this new calcAge methods here appears first in the prototype chain
    // so therefore it is essentially overriding the method coming from the parent class
}

const pranathi = new StudentCl('Pranathi', 2012, 'Computer Science');
pranathi.introduce();
pranathi.greet(); // from parent class
pranathi.calcAge(); 


// 221. Inheritance Between "Classes": Object.create

const PersonProto1 = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven1 = Object.create(PersonProto1);
const StudentProto = Object.create(PersonProto1);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto1.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();

// 226. ES6 Classes Summary






// OOPS

// Objects can be created using following methods

// #1 Object Literal
let mobile = { username: "Venkatesh" };

// #2 Object.create()
let mobile = Object.create({});
mobile.username="Venkatesh";

// #3 Functions are objects in javascript
function Mobile(){
  return "mobile";
}
let mobile = new Mobile();
mobile.username ="Venkatesh";
mobile["username"]="Venkatesh";

// #4 Using Classes
class Mobile{

}
let mobile = new Mobile();
mobile.username = "Venkatesh";
// console.log(mobile);
// console.log(typeof mobile);

// Classes

// #1. Creating class
class Mobile{
    constructor(name,color){
      this.name = name;
      this.color=color;
    }
    calling(){
      console.log("Calling to chinni");
    }
    playGames(){
      console.log('Playing games');
    }
    setName(newName){
      this.name = newName;
    }
  }
  
  // #2. Creating/Instantiating objects by using class
  let redmi = new Mobile('Redmi Note 7','Black');
  let apple = new Mobile('Apple','Silver');
  
  // #3. Getting/Setting the properties and actions with created object.
  console.log(redmi.color);
  console.log(redmi.name);
  redmi.calling();
  redmi.setName("Redmi Note 9 Pro");
  console.log(redmi.name);


// Inheritance

// #1. Creating Parent class
class Person{
    constructor(name,designation){
      this.name = name;
      this.designation = designation;
    }
    learn(){
      console.log('Learning something');
    }
    eat(){
      console.log('Eating');
    }
    sleep(){
      console.log('Sleeping');
    }
  }
  
  // #2. Extending Parent class to Child class
  class Developer extends Person{
    constructor(name,designation,companyName){
      super(name,designation);
      this.companyName = companyName;
    }
    coding(){
      console.log("JavaScript coding...");
    }
  }
  
  // #3. Extending Parent class to One more Child class
  class Dancer extends Person{
    constructor(name,designation,schoolName){
      super(name,designation);
      this.schoolName = schoolName;
    }
    dancing(){
      console.log("Classical Dancing...");
    }
  }
  
  // #4. Creating/Instantiating objects by using class
  let person = new Person('Human','Nothing');
  console.log(person);
  let venkatesh = new Developer("Venkatesh","Full Stack Developer","Doodleblue");
  console.log(venkatesh);
  let ramani = new Dancer("Ramani","Classical Dancer","Dancing School");
  console.log(ramani);
  
  // #5. Getting/Setting the properties and actions with created object.
  // venkatesh.coding();
  // venkatesh.eat();
  // venkatesh.learn();
  ramani.dancing();
  ramani.eat();
  ramani.learn();

// Encapsulation

// #1. Creating Encapsulated class
class Bank{
    constructor(name,account_no,account_type){
      var name = name;
      var account_no = account_no;
      var account_type = account_type;
      this.getName =()=>{
        return name;
      }
      this.getAccountNum=()=>{
        return account_no;
      }
      this.getAccountType=()=>{
        return account_type;
      }
    
      var setName = (newName)=>{
        name = newName;
      }
      this.setAccountNumber=()=>{
        account_no = Math.floor(Math.random()*9000000000);
      }
      this.setAccountType=(accountType)=>{
        account_type = accountType;
      }
    }
    
  }
  
  // #2. Creating/Instantiating objects by using class
  let venkatesh = new Bank('Venkatesh',null,'Savings');
  let chinni = new Bank('Chinni',null,'Current');
  
  // #3. Getting/Setting the properties and actions with created object.
  venkatesh.setAccountNumber();
  console.log(venkatesh.getAccountNum());
  console.log(venkatesh.getAccountNum());
  
  // console.log(venkatesh.name);
  // venkatesh.setName("Vivek");
  // console.log(venkatesh.getName());
  // venkatesh.setAccountNumber();
  // console.log(venkatesh.getAccountNum());
  // console.log(chinni.getName());
  // chinni.setAccountNumber();
  // console.log(chinni.getAccountNum());


//   Abstraction

// #1. Creating Abstract class
class Mobile{
    constructor(name,color,initialCharging){
      this.name = name;
      this.color=color;
      this.initialCharging = initialCharging;
      var currentCharging = 0;
      var chargingDetails=(charge)=>{
        currentCharging=this.initialCharging+charge;
        if(currentCharging>100){
          throw Error("Mobile is fully charged");
        }
        console.log("Current Charging "+currentCharging);
      }
      this.plugInCharge = (charge)=>{
        chargingDetails(charge);
      }
    }
  }
  
  // #2. Creating/Instantiating objects by using class
  let redmi = new Mobile('Redmi Note 7','Black',20);
  let apple = new Mobile('Apple','Silver',20);
  
  // #3. Getting/Setting the properties and actions with created object.
  // redmi.plugInCharge(30);
  // redmi.currentCharging=200;
  // console.log(redmi.name);
  // console.log(redmi.color);
  console.log(redmi);
  // console.log(redmi.plugInCharge(100));

//   Polimorphism

// #1. Creating Parent class
class Person {
    constructor(name, designation) {
      this.name = name;
      this.designation = designation;
    }
    learn() {
      console.log("Learning something");
    }
    learn(name) {
      console.log("Learning something " + name);
    }
    eat() {
      console.log("Eating");
    }
    sleep() {
      console.log("Sleeping");
    }
  }
  
  // #2. Extending Parent class to Child class
  class Developer extends Person {
    constructor(name, designation, companyName) {
      super(name, designation);
      this.companyName = companyName;
    }
    coding() {
      console.log("JavaScript coding...");
    }
    learn() {
      console.log("Learning OOPS Concepts");
    }
  }
  
  // #3. Extending Parent class to One more Child class
  class Dancer extends Person {
    constructor(name, designation, schoolName) {
      super(name, designation);
      this.schoolName = schoolName;
    }
    dancing() {
      console.log("Classical Dancing...");
    }
  
    learn() {
      console.log("Learning Bharatha Natyam");
    }
  }
  
  // #4. Creating/Instantiating objects by using class
  let person = new Person("Human", "Nothing");
  console.log(person);
  let venkatesh = new Developer(
    "Venkatesh",
    "Full Stack Developer",
    "Doodleblue"
  );
  console.log(venkatesh);
  let ramani = new Dancer("Ramani", "Classical Dancer", "Dancing School");
  console.log(ramani);
  
  // #5. Getting/Setting the properties and actions with created object.
  // venkatesh.coding();
  // venkatesh.eat();
  venkatesh.learn();
  // ramani.dancing();
  // ramani.eat();
  ramani.learn();
  person.learn();
  person.learn("JavaScript");
  
  // Overriding
  function a() {
    return 5;
  }
  function a(name) {
    return name;
  }
  function a(name, designation) {
    return name + " " + designation;
  }
  console.log(a("Venkatesh", "Full Stack"));
  

// OOPS (Object Oriented Programming System or Paradigm)
// It aims to implement real-world scenarios like inheritance, hiding, polymorphism etc., in programming.
// Smalltalk is considered as the first truly object-oriented programming language.
// The popular object-oriented languages are Java, C#, PHP, Python, C++, etc.

// Objects
// Objects means simply real world entities such as mobile, laptop, bike, car, cat etc.,
// Objects have attributes/properties and actions/behaviors.

// Class
// Class is a blueprint for creating objects.
// We can create any number of objects with the same properties and actions by using Classes.
// Example: Once Car class is created, then we can create any number of Cars with any name like Tesla, Audi, BMW with different features.

// Encapsulation/Data Hiding
// Encapsulation is a functionality to hide the data in a single unit along with a functionality to protect information from outside.
// Data of an object should not be directly exposed.
// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.
// Example: The best example of encapsulation could be a calculator. We know that we can press 2+2 then = and see the result on display. 
// We don’t care about the internal parts likechip, electrical things how they are implemented etc.,

// Abstraction
// Abstraction is the method that "shows" only essential attributes and "hides" unnecessary information. The main purpose of abstraction is
// hiding the unnecessary details from the users.
// Abstraction is selecting data from a larger pool to show only relevant details of the object to the user.
// It helps in reducing programming complexity and efforts.

// Inheritance
// Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

// Polymorphism
// Polymorphism means having many forms.
// Example: same person can learn different things for different roles.

// Summary
// 1. Objects means simply real world entities such as mobile, laptop, bike, car, cat etc.,
// 2. Class is a blueprint for creating objects. We can create objects in different ways in JavaScript by using functions, object literals etc.
// 3. Encapsulation is a method to hide the data in a single entity or unit along with a method to protect information from outside.
// 4. Abstraction is the method that "shows" only essential attributes and "hides" unnecessary information.
// 5. Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
// 6. Polymorphism means having many forms.
// 7. JavaScript supports only overriding functionality because there is no type checking functionality.

// Interview Questions

// A: Encapsulation

// What exactly encapsulation means?
// Encapsulation is a method to hide the data in a single entity or unit along with a method to protect information from outside.

// Real life examples for encapsulation?
// 1. Capsule (which contains several medicines but bundles as a single unit)
// 2. Calculator (which contains several electrical devices but provides the simple interface to operate it)

// Will it just hides the variables or methods as well?
// Yes, It should hide all the variables and it can hide any methods as well.

// B:Abstraction

// What exactly Abstraction means?
// Abstraction is the method of hiding the unwanted information.

// What is the difference between Encapsulation and Abstraction?
// Abstraction is the method of hiding the unwanted information. Whereas encapsulation is a method to hide the data in a single entity or
// unit along with a method to protect information from outside.
// Simplest example is a Phone with Non-Removable battery(Encapsulation) and with Removable battery(Abstraction).  
// In Abstraction, We can provide the properties which can be accessed outside the class without setters and getter methods.
// But in encapsulation nothing can be accessed outside the class without setters and getter methods.
// Abstraction = Encapsulation + Non-Encapsulation
// Encapsulation = Encapsulation.
// Both can hide the implementation details by just providing the getter and setter methods.

// C:Inheritance

// Can you give an example for inheritance in React?
// Any components which extends React.Component class to create class components is one of the great example for inheritance.

// Can we extend more than once class?
// No, in JavaScript, a class cannot extend from multiple classes, which is also known as “multiple inheritance”.

// D: Polymorphism

// Can you give an example for polymorphism in React?
// Any react component should have render() method, which will be overridden.

// Is setState() method inherited from React.Component class?
// Yes

// JavaScript has method overloading functionality, Yes or No and Why?
// No, It has only overriding functionality.
// In a language like java, for instance, the compiler will check the number and types of parameters passed to a function and match it with the
// function signature. In JavaScript however, type checking of parameters doesn't happen at compile time. In fact, the parameters won't be type
// checked even at run time unless they are actually used, and even then the type checking is extremely relaxed.

// CONCLUSION POINTS



