
=> JS Array Methods

push() – Insert an element at the end of the array.
pop() – Remove an element from the end of the array.
unshift() –Insert an element at the beginning of the array.
shift() – Remove an element from the beginning of the array.
slice() – Create a shallow copy of an array.
Array.isArray() – Determine if a value is an array.
length – Determine the size of an array.

const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'); // or
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(salad);
console.log(salad[3]);
const len = salad.length;
console.log(salad[len -1]); // last index
console.log(salad[len -3]); 

=> loop through array using for or forEach

for(let i = 0; i< salad.length; i++){
    console.log(`Element at index ${i} is ${salad[i]}`);
}

console.log(`--------------`);

salad.forEach((item, index) => {
    console.log(`Element at index ${index} is ${item}`);
})

=> Add or remove elements 
// add element to the end
salad.push('🥜'); 
console.log(salad);
// add element to the begining
salad.unshift('🥜');
console.log(salad);
// remove element from the end of the array
salad.pop();
console.log(salad);
// remove element from the begining
salad.shift();
console.log(salad);
// pop() and shift() returns the removed element and changes original array

=> copy and clone an array
// slice method does not change the original array. instead, it creates new shallow copy of the original array.
// alternatively, we can use spread operator to create a copy of the array
const saladCopy = salad.slice();
console.log(saladCopy);
console.log(salad === saladCopy); // false

=> Determine if a value is an array
console.log(Array.isArray(salad)); // true
console.log(Array.isArray('Random text')); // false
console.log(Array.isArray({'name': 'praveen'})) // false

=> Array destructuring
// we have new syntax to extract multiple properties from an array and assign them to variables in one go. 
let [tomato, mushroom, carrot] = ['🍅', '🍄','🥕']
console.log(tomato, mushroom, carrot); // 🍅 🍄 🥕
// without destructuring
let vegetables = ['🍅', '🍄', '🥕'];
let tomato = vegetables[0];
let mushroom= vegetables[1];
let carrot= vegetables[2];
// destructuring syntax saves you from writing lots of code.
// Assign defaut value to variable when there is no value or undefined
let [tomato , mushroom = '🍄'] = ['🍅'];
// Skip a value in an Array
let [tomato, , carrot] = ['🍅', '🍄', '🥕'];
// Nested Array destructuring
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
// without destructuring 
const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot = veg[2]; // returns '🥕'
// or shorter syntax
fruits[4][2]; // returns '🥕'
// with destructuring
let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

=> Spread Syntax and Rest Parameter.
// For the rest parameter, the ... appears on the left side of the destructuring syntax.
// For the spread syntax, the ... appears on the right side of the destructuring syntax.
// Rest operator
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
// Spread Operator 
// we can clone or copy of existing array
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
salad === saladCloned // false

=> Destructuring use cases with spread and rest
// swap the value of two variables
let first = '😔';
let second = '🙂';
[first, second] = [second, first];
console.log(first);  // '🙂'
console.log(second); // '😔'
// // Merge Arrays
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];
const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]

=> Create, remove, update, and access arrays.
// The concat() method merges one or more arrays and returns a merged array. 
// It is an immutable method. This means it doesn't change (mutate) existing arrays.
const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = first.concat(second);
console.log(merged); // [1, 2, 3, 4, 5, 6]
console.log(first); // [1, 2, 3]
console.log(second); // [4, 5, 6]
array.concat(arr1, arr2,..,..,..,arrN);
const first =  [1, 2, 3];
const second = [4, 5, 6];
const third =  [7, 8, 9];
const merged = first.concat(second, third);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// The join() method joins all the elements of the array using a separator and returns a string.
const emotions = ['🙂', '😍', '🙄', '😟'];
const joined = emotions.join(); // join(""), join("whatever")
console.log(joined); // "🙂,😍,🙄,😟"

// The fill() method fills an array with a static value. it changes the original value
const colors = ['red', 'blue', 'green'];
colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]
const colors = ['red', 'blue', 'green'];
colors.fill('pink', 1,3); // ["red", "pink", "pink"]

// The includes() array method: determine the presence on an element in an array,
// If the element is found, the method returns true, and false otherwise.
const names = ['tom', 'alex', 'bob', 'john'];
names.includes('tom'); // returns true
names.includes('july'); // returns false

// The indexOf() array method
// returns the index of the element, if not found returns -1
const names = ['tom', 'alex', 'bob', 'john'];
names.indexOf('alex'); // returns 1
names.indexOf('rob'); // returns -1

// The lastIndexOf() array method
// helps you find the index of the last occurrence of an element in the array.
// Like indexOf(), lastIndexOf() also returns -1 if the element is not found.
const names = ['tom', 'alex', 'bob', 'tom'];
names.indexOf('tom'); // returns 0
names.lastIndexOf('tom'); // returns 3

// The reverse() array method reverses the elements' positions in the array so that the last element goes into
// the first position and the first one to the last.
// The reverse() method modifies the original array.
const names = ['tom', 'alex', 'bob'];
names.reverse(); // returns ["bob", "alex", "tom"]

// The sort() array method
// The default sort() method converts the element types into strings and then sorts them.
// The default sorting order is ascending. 
// The sort() method changes the original array.
const names = ['tom', 'alex', 'bob'];
names.sort(); // returns ["alex", "bob", "tom"]
const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
const ascendingComp = (a, b) => a -b;
numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]
numbers.sort((a, b) => (b-a)); // descending order,

// The splice() method helps you add, update, and remove elements in an array. 
// The main purpose of the splice() method is to delete elements from array. 
// It returns an array of the elements deleted and modifies the original array. 
const names = ['tom', 'alex', 'bob'];
names.splice(1, 0, 'zack');
console.log(names); // ["tom", "zack", "alex", "bob"]
const names = ['tom', 'alex', 'bob'];
const deleted = names.splice(2, 1, 'zack');
console.log(deleted); // ["bob"]
console.log(names); // ["tom", "alex", "zack"]

// delate methods
- 🗑️arr.length = 0
- 🗑️arr = []
- 🗑️arr.shift()
- 🗑️arr.pop()
- 🗑️arr.splice()

=> Static Array Methods
// The Array.from() array method converts an array-like object to an array so that you can perform all the array
// operations on it.
const collection = Array.from(document.getElementsByTagName('li'))
// The Array.of() method creates a new array using any number of elements of any type.
Array.of(2, false, 'test', {'name': 'Alex'})

=> Array Iterator Methods
// these methods for iterating through array and performing computations, making decisions, filtering out stuff,
// and more.
// Example of an array of objects.
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
// All the array iterator methods take a function as an argument. You need to specify the logic to iterate and 
// apply in that function.

// The filter() method creates a new array with all the elements that satisfies the condition mentioned in the
// function.
const femaleStudents = students.filter((element, index) => {
    return element.gender === 'F';
})
console.log(femaleStudents);

// The map() method creates a new array by iterating through the elements and applying logic we provided in the
// function as an argument.
const fullNames = students.map((element, index) => {
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
});
console.log(fullNames);

// The reduce() method applies a reducer function on each of the array elements and returns an output value.
const total = students.reduce(
(accumulator, student, currentIndex, array) => {
    accumulator = accumulator + student.paid;
    return (accumulator);
}, 
0);
console.log(total); // 1000

// The some() method returns a boolean value (true/false) based on at least one element in the array passing
// the condition in the function. 
// Let's see if there are any students below the age 30.
let hasStudentBelow30 = students.some((element, index) => {
    return element.age < 30;
});
console.log(hasStudentBelow30); // true

// The find() array method returns the first matched element from the array that satisfies the condition in the
// function.
const student = students.find((element, index) => {
    return element.age < 30;
});
console.log(student);

// The every() method detects if every element of the array satisfies the condition passed in the function. 
// Let's find if all the students have subscribed to at least two courses.
const atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2;
});
console.log(atLeastTwoCourses); // true


// Proposed Array Methods
// The at() Method access the elements using both positive and negative indexes using a single method.
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];
junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined


// ways to convert an array-like object to an array
let arr1 = Array.prototype.slice.call(arrLike); // works faster in many browsers
let arr2 = Array.from(arrLike);
let arr3 = [...arrLike];



// v2

=> Manipulate Arrays in JavaScript

toString()
let colors = ['green', 'yellow', 'blue'];
console.log(colors.toString()); // green,yellow,blue

join()
// The JavaScript join() method combines all array elements into a string.
let colors = ['green', 'yellow', 'blue'];
console.log(colors.join('-')); // green-yellow-blue

concat()
// This method combines two arrays together or add more items to an array and then return a new array.
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]

push()
// This method adds items to the end of an array and changes the original array.
let browsers = ['chrome', 'firefox', 'edge'];
browsers.push('safari', 'opera mini');
console.log(browsers); // ["chrome", "firefox", "edge", "safari", "opera mini"]

pop()
// This method removes the last item of an array and returns it.
let browsers = ['chrome', 'firefox', 'edge'];
browsers.pop(); // "edge"
console.log(browsers); // ["chrome", "firefox"]

shift()
// This method removes the first item of an array and returns it.
let browsers = ['chrome', 'firefox', 'edge'];
browsers.shift(); // "chrome"
console.log(browsers); // ["firefox", "edge"]

unshift()
// This method adds an item(s) to the beginning of an array and changes the original array.
let browsers = ['chrome', 'firefox', 'edge'];
browsers.unshift('safari');
console.log(browsers); //  ["safari", "chrome", "firefox", "edge"]

splice()
// This method changes an array, by adding, removing and inserting elements.
// array.splice(index[, deleteCount, element1, ..., elementN])

split()
// This method is used for strings. It divides a string into substrings and returns them as an array.
let firstName = 'hello, my name is bolaji, I am a dev.';
firstName.split(',', 2); // ["hello", " my name is bolaji"]
let firstName = 'Bolaji';
firstName.split('') // ["B", "o", "l", "a", "j", "i"]

indexOf()
// This method looks for an item in an array and returns the index where it was found else it returns -1
let fruits = ['apple', 'orange', false, 3]
fruits.indexOf('orange'); // returns 1
fruits.indexOf(3); // returns 3
friuts.indexOf(null); // returns -1 (not found)

lastIndexOf()
// This method works the same way indexOf() does except that it works from right to left. It returns the
// last index where the item was found
let fruits = ['apple', 'orange', false, 3, 'apple']
fruits.lastIndexOf('apple'); // returns 4

filter()
// This method creates a new array if the items of an array pass a certain condition.
let results = array.filter(function(item, index, array) {
    // returns true if the item passes the filter
});

const countryCode = ['+234', '+144', '+233', '+234'];
const nigerian = countryCode.filter( code => code === '+234');
console.log(nigerian); // ["+234", "+234"]

map()
// This method creates a new array by manipulating the values in an array.
const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item => {
    return '<li>' + item + '</li>';
})
const render = '<ul>' + display.join('') + '</ul>';
document.write(render);

reduce()
// This method is good for calculating totals.
let value = array.reduce(function(previousValue, item, index, array) {
    // ...
}, initial);
const numbers = [100, 300, 500, 70];
const sum = numbers.reduce((accummulator, value) =>
accummulator + value
, 0);
console.log(sum); // 970

forEach()
// This method is good for iterating through an array.
const colors = ['green', 'yellow', 'blue'];
colors.forEach((item, index) => console.log(index, item));
// returns the index and the every item in the array
// 0 "green"
// 1 "yellow"
// 2 "blue"

every()
// This method checks if all items in an array pass the specified condition and returntrue if passed, else false.
const numbers = [1, -1, 2, 3];
let allPositive = numbers.every((value) => {
return value >= 0;
})
console.log(allPositive); // would return false // check if all numbers are positive

some()
// This method checks if an item (one or more) in an array pass the specified condition and return true if
// passed, else false.
const numbers = [1, -1, 2, 3];
let atLeastOnePositive = numbers.some((value) => {
return value >= 0;
})
console.log(atLeastOnePositive); // would return true // checks if at least one number is positive

includes()
// This method checks if an array contains a certain item. It is similar to .some(),
// but instead of looking for a specific condition to pass, it checks if the array contains a specific item.
let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true


=> SUMMERY

toString() converts an array to a string separated by a comma.

join() combines all array elements into a string.

concat combines two arrays together or add more items to an array and then return a new array.

push() adds item(s) to the end of an array and changes the original array.

pop() removes the last item of an array and returns it

shift() removes the first item of an array and returns it

unshift() adds an item(s) to the beginning of an array and changes the original array.

splice() changes an array, by adding, removing and inserting elements.

slice() copies a given part of an array and returns that copied part as a new array. It does not change the
original array.

split() divides a string into substrings and returns them as an array.

indexOf() looks for an item in an array and returns the index where it was found else it returns -1

lastIndexOf() looks for an item from right to left and returns the last index where the item was found.

filter() creates a new array if the items of an array pass a certain condition.

map() creates a new array by manipulating the values in an array.

reduce() calculates a single value based on an array.

forEach() iterates through an array, it applies a function on all items in an array

every() checks if all items in an array pass the specified condition and return true if passed, else false.

some() checks if an item (one or more) in an array pass the specified condition and return true if passed,
else false.

includes() checks if an array contains a certain item.





