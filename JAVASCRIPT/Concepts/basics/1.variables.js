// 1# var let const


// Declaration & initialization
// user = 5; // if we declare variable without any keyword like var, let, const that is called global variable.
var user = 10; // 10
var user = 40; // 40
let user = 20; // SyntaxError: Identifier 'user' has already been declared
const user = 30; // SyntaxError: Identifier 'user' has already been declared
// let and const cannot be re-declared; they check with all keywords var, let, const whether the name already exists or not.
console.log(user);


// scope (global , local, block)
// global scope

var test = 20;
let test1 = 30;
const test2 = 40;

function variableTest(){
    // local scope
    // var scope within the function
    // let const scope within the block only {}
    var test3 = 30; // can be accessed within this block only;
    let test5 = 60; // can be accessed within this block only;
    test4 = 50; // can be accessed as outside of this block;(global)
    var test = 90; // overrides with 20;
    console.log(test, test1, test2); // 90, 30, 40
    console.log(test3, test5);
    // block scope (within the block {})
    if(test === 90){
        // console.log(test5); // 60
        let test5 = 12;
        console.log(test5); // 12
        let test6 = 'blockTest1';
        const test6a = 'blockTest1a';
        var test7 = 'blockTest2';
    }
    console.log(test5); // 60
    console.log(test6); // ReferenceError: test6 is not defined;
    console.log(test6a); // ReferenceError: test6a is not defined
    console.log(test7); // blockTest2
    
}

variableTest();
console.log(test, test1, test2);
console.log(test3); // ReferenceError: test3 is not defined
console.log(test4); // 50
console.log(test5); // ReferenceError: test5 is not defined

// ===============================================
var x = 10;
let y = 20; 
const z = 30;
function variables(){
    // d1: globall variables accessing
    console.log(x, y, z); // 10, 20, 30
    
    // d2: locall variables accessing
    var x = 11; 
    let y = 21;
    const z = 31;
    console.log(x, y, z); // 11, 21, 31
    
    // d3: test with block scope variables
    if(x === 11){
        // d1: block scope accessing function or local scope variables.
        console.log(x, y, z); 
        var x1 = 12;
        let y1 = 22;
        const z1 = 32;
    }
    console.log(x1, y1, z1);
    // trying to access block {} scope varibales outside of it but only varible declared with var is calling outside, rest not.
    
    // global variable can be accessed in the entire program.
    global = 'global variable'
    
}
variables();
console.log(x, y, z); // 10, 20, 30
console.log(global);

// ===============================================

// Explanation:
// variable declared without any keyword like var, let, const that becomes global variable and they can be accessed anywhere in the entire application even they declared in any scope.
// if the variables declared with var, let, cont globaly they can be accessed anywhere in the whole program.
// if the variables declared with var keyword inside the function they are having function scope and they cannot be accessed outside of the function scope.
// if the variable declared with let and const keyword they can be accessed only within the perticular block {} . they cannot be called outside of the block.



// Redclartion

var reD = 'test1';
var reD = 'test1 changed';
reD = 'test1 changed again';
console.log(reD); // test1 changed again
let reD = 'reD with let'; // SyntaxError: Identifier 'reD' has already been declared
const reD = 'reD with cont'; // SyntaxError: Identifier 'reD' has already been declared

// redclaration can be done useing var keyword but not with let and const.



// Reinitialization for primative data types;

var reI = 10;
reI = 20;
reI = 30;
console.log(reI); // 30

let reILet = 10;
reILet = 20;
reILet = 30;
console.log(reILet) // 30

const reIConst = 10;
reIConst = 20;
console.log(reIConst); // TypeError: Assignment to constant variable.

// Reinitiallization or Reassignment can be possible with var and let keywords but not with const for the primative data types.

// Reinitialization for reference data types;

// const can be changed using array methods
const refArr = [1, 2, 3, 4];
refArr.push(5);
console.log(refArr); // [1, 2, 3, 4, 5]
const refArr1 = refArr; // pointing to same reference number so data will be same;
console.log(refArr1); // [1, 2, 3, 4, 5]

// const can be changed with objects
const user = {name: 'praveen kumar'};
user.age = 27;
console.log(user);

// how it works

var name = 'praveen kumar';
let role = 'ui developer';

// data_type      variable     value
// var            name         praveen kumar   
// let            role         ui developer
// const          refArr       1001
// const          user         1002
// const          refArr1      1001

// in the value place reference number stored instead direct value. so not able to change the value directly
// if we modify the reference automatically reference's value will be changed.

refArr = [1, 2, 3, 4, 5];
refArr1 = refArr; // [refArr1 = refArr: 1001]

// reference_number     vlaue
// 1001                 [1, 2, 3, 4]
// 1002                 {name: 'praveen kumar'}

// in reference data types we are not accessing value directly but reference

// testing with reference number

// s1 
const n1 = [1, 2, 3, 4, 5];
n1.push(6);
const n2 = n1;
n2.push(7);
console.log(n1);
console.log(n2);
// if we change any one of the variable's value both will be changed because both are pointing to the same reference number; to avoid this conflict need to use spread operater.

// s2: 
const n1 = [1, 2, 3, 4, 5];
n1.push(6);
const n2 = [...n1]; // this will prevents the orignal value from the modification. spread operater creates new array (new reference number).
n2.push(7);
console.log(n1);
console.log(n2);

// with objects

// s1: 

const user = {name: 'praveen kumar'};
user.age = 26; //{ name: 'praveen kumar', age: 26 }
const admin = user;
admin.age = 27;
console.log(admin); // { name: 'praveen kumar', age: 27 }
console.log(user); //  { name: 'praveen kumar', age: 27 }

// to avoid this issue

const user = {name: 'praveen kumar'};
user.age = 26; //{ name: 'praveen kumar', age: 26 }
// const admin = JSON.stringify(user); // converts this into string : { "name": "praveen kumar", "age": 26 } 
// parse this string so it will converts into normal object then it will creats new reference.
const admin = JSON.parse(JSON.stringify(user));
admin.age = 27;
console.log(admin); // { name: 'praveen kumar', age: 27 }
console.log(user); //  { name: 'praveen kumar', age: 26 }

// bullete points

// scope
// var declarations are globally scoped or function scoped
// variable without any keyword is global scoped and can be accessed anywhere.
// let and const keywords are block {} scoped.

// redeclartion

// possible with var keyword and global variable. (var user = 'praveen', user = 'praveen)
// not possible with let and const keyword

// reinitialization or reassignment for primative data types

// can possible with var, global variable, let 
// not possible with const keyword

// reinitialization or reassignment for reference data types

// can modify with array methods and in object parse and stringfy with all keywords (var, let, const).



