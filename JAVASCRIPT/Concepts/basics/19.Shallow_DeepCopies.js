
// Shallow Vs Deep Copy In Javascript

// // Case 1: Copy Numbers

// let marks = 100;
// let total = marks;  // copy marks into total
// console.log(marks, total); //100 100

// marks = 200; // change the value of marks
// console.log(marks, total); //200 100

// // Case 2: Copy Strings

// let name = 'JS';
// let name2 = name; //copy name into name2
// console.log(name, name2); //JS JS

// name = 'blogs';
// console.log(name, name2); //blogs JS

// in the above two scenarios if you change the value of an original variable it does not affect the other variable.
// When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once.
// That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy.

// Arrays

// Case 3: Copy Arrays

// let list = ['a', 'b', 'c', 'd'];
// let box = list;
// console.log("list-> ",list, "box-> ", box); // list->  [ 'a', 'b', 'c', 'd' ] box->  [ 'a', 'b', 'c', 'd' ]

// console.log("After changing some values ")

// list[3] = 'e';
// box[4] = 'f';
// console.log("list-> ",list, "box-> ", box); // list->  [ 'a', 'b', 'c', 'e', 'f' ] box->  [ 'a', 'b', 'c', 'e', 'f' ]

// If we update the array box it also changes the original array list.
// Because box is not a separate array, it is just a reference to the original array list. So whenever you update any of the arrays list or box it's always going to update the same reference.

// Shallow Copy
// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
// Using shallow copy, we can copy a value that is non-primitive (Array or Object), and ideally, all the values inside that array or object are primitive.

// Methods to copy an Array :

// Method 1: slice()

// let list = ['a', 'b', 'c', 'd'];
// let box = list.slice();
// console.log("list-> ",list, "box-> ", box); // list->  [ 'a', 'b', 'c', 'd' ] box->  [ 'a', 'b', 'c', 'd' ]

// console.log("After changing some values ")

// list[2] = 'e';
// box[3] = 'f';
// console.log("list-> ",list, "box-> ", box); // list->  [ 'a', 'b', 'e', 'd' ] box->  [ 'a', 'b', 'c', 'f' ]

// Method 2: concat()

// let list = ['a', 'b', 'c', 'd'];
// let box = [].concat(list); // Method 2: Use concat()

// console.log("list-> ",list, "box-> ", box);

// console.log("After changing some values ")

// list[2] = 'e';
// box[3] = 'f';
// console.log("list-> ",list, "box-> ", box);

// Method 3: ES6 Spread operator

// let list = ['a', 'b', 'c', 'd'];
// let box = [...list]; 

// console.log("list-> ",list, "box-> ", box);

// console.log("After changing some values ")

// list[2] = 'e';
// box[3] = 'f';
// console.log("list-> ",list, "box-> ", box);

// Method 4: Array.from()

// let list = ['a', 'b', 'c', 'd'];
// let box = Array.from(list); // Method 4: Array.from()

// console.log("list-> ",list, "box-> ", box);

// console.log("After changing some values ")

// list[2] = 'e';
// box[3] = 'f';
// console.log("list-> ",list, "box-> ", box);


// Objects

// let student = {
//     subject: 'JS',
//     marks: 100
// }

// let record = student;

// console.log("student",student, "record", record); // student { subject: 'JS', marks: 100 } record { subject: 'JS', marks: 100 }
// console.log("After changing some values ")

// student.subject = 'Java';
// record.marks = 50;
// console.log("student", student, "record", record); // student { subject: 'Java', marks: 50 } record { subject: 'Java', marks: 50 }


// If we modify the record or student objects, changes are reflected on both of them. Because both of the objects refer to the same memory location.

// Methods to copy an Object :

// Method 1: Object.assign()

// let student = {
//     subject: 'JS',
//     marks: 100
// }

// let record = Object.assign({},student); 

// console.log("student",student, "record", record); // student { subject: 'JS', marks: 100 } record { subject: 'JS', marks: 100 }
// console.log("After changing some values ")

// student.subject = 'Java';
// record.marks = 50;
// console.log("student", student, "record", record); // student { subject: 'Java', marks: 100 } record { subject: 'JS', marks: 50 }

// Method 2:  spread operator

// let student = {
//     subject: 'JS',
//     marks: 100
// }

// let record = {...student};

// console.log("student",student, "record", record);
// console.log("After changing some values ")

// student.subject = 'Java';
// record.marks = 50;
// console.log("student", student, "record", record);

// So this is how Shallow Copy works.

// Deep Copy

// Deep copy is a process in which the copying process occurs recursively. It means first constructing a new collection object and then recursively populating it with copies of the child objects found in the original. In the case of deep copy, a copy of an object is copied into another object.

// let student = {
//     subject: 'JS',
//     marks: 100,
//     details: {
//         name: 'developer',
//         age: 23
//     }
// }

// let record = {...student}; //Method 2: Use ES6 Spread Operator

// console.log("student",student, "\nrecord", record);
// // student { subject: 'JS', marks: 100, details: { name: 'developer', age: 23 } } 
// // record { subject: 'JS', marks: 100, details: { name: 'developer', age: 23 } }  
// console.log("After changing some values ")
// student.details.age = 30;
// record.marks = 50;
// console.log("student", student, "\nrecord", record);
// student { subject: 'JS', marks: 100, details: { name: 'developer', age: 30 } } 
// record { subject: 'JS', marks: 50, details: { name: 'developer', age: 30 } }   

// when you change the value of age using student.details.age = 30; the change is reflected in both the objects.

// the student object is having non-primitive values. It has a nested Object. Unlike the previous examples, this object did not have all primitive values in it. So, exactly in this kind of scenario, if we want to create a new copy of the student, shallow copying will no longer work.
// In the above example, a separate copy is created for primitive values like subject & marks but details is a non-primitive value & its reference is stored instead of creating a new copy.
// So, in order to copy all the sub-non-primitive values of a non-primitive value such as student, we need to use a copying technique called Deep Copying.

let student = {
    subject: 'JS',
    marks: 100,
    details: {
        name: 'developer',
        age: 23
    }
}

let record = JSON.parse(JSON.stringify(student)); //Deep Copy

console.log("After changing some values ")

student.details.age = 30;
record.marks = 50;
console.log("student", student, "\nrecord", record);

// student { subject: 'JS', marks: 100, details: { name: 'developer', age: 30 } } 
// record { subject: 'JS', marks: 50, details: { name: 'developer', age: 23 } }

// now we have copied the entire student object including its non-primitive nested objects values.

// Summary

// You really don't have to worry about copying primitive data types (strings/numbers) in JavaScript. When you make a copy, it will be a real copy.
// Shallow copy is used to copy a non-primitive value such as array/object, which has all values of primitive type.
// Deep Copy is also used to copy a non-primitive value such as an array/object which has non-primitive values in it such as a nested array/object.









