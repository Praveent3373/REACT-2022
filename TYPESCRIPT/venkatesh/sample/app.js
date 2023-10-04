"use strict";
//================== A.BASIC TYPESCRIPT TYPES ===============
// 1.string
let message = "Hello world";
message = 'Hello';
// 2.number
let age = 20;
age = 10;
// 3.boolean
let isAdmin = true;
isAdmin = false;
// 4.any : not recommonded (js feature)
let a = 10;
a = 20;
a = { name: 'praveen' };
a = [1, 2, 3];
a = 10;
a = 'naveen';
for (let i = 0; i < a.length; i++) {
    console.log(a[i]); //failed
}
// 5. arrays
let students = [1, 2, 3, 4];
students = [10];
let teachers = ['vivek', 'kalayn'];
teachers = ['Naveen'];
let users = []; // not recommonded
users = [10, 'string'];
// 6.Tuples - fixed length and fixed type arrays
let user = ['venkatesh', 20];
user = ['naveen', 15];
let userData = [];
userData = [['naveen', 20], ['praveen', 15]];
// 7.Union
let person;
person = "venkatesh";
person = 20;
// 8.Enum
const RED = "Red";
const BLUE = "Blue";
var colors;
(function (colors) {
    colors["RED"] = "Red";
    colors["BLUE"] = "Blue";
    colors["GREEN"] = "Green";
})(colors || (colors = {}));
console.log(colors.RED);
let car = {
    name: 'Tesla',
    price: 200000
};
car.name = 'Audi';
// 10.Type Assertion
let username = 'Naveen';
let userId = username;
let userNames = username; // or
let firstname = username;
// 11.null
let abc = null;
// 12.undefined
let noValue = undefined;
//================== B.ADVANCED TYPESCRIPT TYPES ===============
// 1. functions
function sum(a, b, c) {
    return a + b;
}
sum(10, 20);
// we are returning number so we are given type number ():number
function log(message) {
    console.log(message);
}
log('Hello world');
// we are not returning anything so we are giving type void ():void
function error() {
    throw new Error("Network Error");
}
let mobile = {
    title: 'Redmi',
    price: 20000
};
let addition = (a, b, c) => a + b;
let substrac = (a, b, c) => a - b;
let user2 = {
    name: 'Naveen',
    age: 20
};
let n1 = 29;
let n2 = 'praveen';
// 3. Unknown vs Any
let userage = 10;
let userage2 = userage;
let userage3 = 20;
let userage4 = userage3;
// 4. class
class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
class Person2 extends Person {
    constructor(name, age, profession, city) {
        super(name, age, profession);
        this.city = city;
    }
    changeAge(age) {
        this.age = age;
    }
}
let p1 = new Person('Praveen', 28, 'React Dev');
let p2 = new Person2('Naveen', 30, 'Angular', 39);
class Human {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
class Naveen extends Human {
    constructor(name, age, profession, city) {
        super(name, age, profession);
        this.city = city;
    }
    changeAge(age) {
        this.age = age;
    }
}
let vinod = new Human('Vinod', 20, 'Salesforce');
let naveen = new Naveen('Naveen', 20, 'React js', 20);
// 5. Generics
function createItems(items) {
    return new Array().concat(items);
}
let stringArray = createItems([1, 2, 3]);
let numberArray = createItems(['Praveen', 'Naveen']);
