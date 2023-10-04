const title = 'this keyword';
document.getElementsByTagName('h1')[0].innerHTML = title;
document.title = title;

//6. Primatives vs Objects (Primatives vs Reference types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31 // age is re-assigned
console.log(oldAge); // 30 // oldAge did not change in primatives;

const me = {
    name : 'praveen',
    age : 27
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); // {name: 'praveen', age: 27}
console.log('Me', me); // {name: 'praveen', age: 27} 
// both got updated with same value;

// REVIEW: Primatives, Ojbects and the Javscript Engine;

// Primatives Types
// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Objects (Reference Types)
// Object literal
// Arrays
// Functions
// Many more...

// the js engine has two components, the call stack where functions are executed and the heap where objects are stored in memory.
// all the object or reference types will get stored in the memory heap.
// primatives are stored in the call stack and that mean that primative types are stored in the execution contexts in which they are declared.

// in the primatives
// identifier actually points to the address and not to the value itself
// so would say that age variable is equal to 30 but
// infact age is equal to the memory address 0001 which holds value of 30
// in next line we declare oldAge to be equal to age so knowing that a variable actually holds a memory address.
// so oldAge simply point to the same memory address as the age variable so it will look like old age, is 30 as well
// now in next line we set age to 31 so the value at address 0001 will certainly not become 31 because that would change old age as well since they
// both point to the same address also the value at a certain memory address is immutatable or it cannot be changed so a new piece of memory is allocated.
// so its created and age identifier now simply points to the new address, which is holding the new value of 31.

// in reference values

// when a new object created such as me object it is stored in the heap. 
// now in the case of reference values like this me object the me identifier does actually not point directly to this newly created memory address
// in the heap. so in this exaple D30F, instead, it will point to a new piece of memory thats created in the stack
// and this new piece of memory will then point to the object thats in the heap by using the memory address as its value.
// in other words, piece of memory in the call stack has a reference to the piece of memory in the heap which holds me object. 
// and that's the reason why we call objects reference types
// when we declare a variable as an object then identifier is created which point to the piece of memory in the stack which in tern points to
// a piece of memory in the heap and that is where the object is actully stored
// And it works this way because objects might be too large to be stored in the stack. Instead they are stored in the heap, which is like an
//  almost unlimited memory pool. And the stack just keeps a reference to where the object is actually stored in the heap so that it can find
// it whenever necessary. Now, moving on in the code, we create a new variable called Friend that we set equal to the Me object. So what will
// happen here? Well, just like with primitive values, the Friend identifier will point to the exact same memory address as the Me identifier.
// And again, that address contains the reference, which then points to the object itself. And like this the Friend object is now essentially
// the exact same as the Me object. Do you see that here in the diagram? So here comes the interesting part because now we're actually gonna
// change a property in the Friend object by setting friend.age to 27. So what happens then is that the object is found in the heap, and
// the 30 is changed to 27. Great. And by the way, even though we defined the Friend variable as a constant, we can actually still manipulate
// the object without problems. And when we think about that, it makes sense because we're actually not changing the value in memory for the
// Friend identifier, it is still D30F. So the reference to the object. All we did was to change the value in the heap, and that's not a problem.
// So it's a misconception that all variables declared with const are immutable. In fact, that is only true for primitive values, but not for
// reference values. So keep that in mind, whenever you're working with const. Anyway, as we lock the Friend variable to the console, we get
// the age of 27, just as we said it before. But then when we lock the Me object, we get that weird behavior that we could previously not
// explain and not understand. But with everything that we learned in this lecture, it actually now makes sense that in the Me object,
// age is now also 27, even though we never changed me.age directly. And the reason for this, as we can see in this slide is the fact
// that Me and Friend actually point to the exact same object in the memory heap. So whenever we change something in this object,
// it will always be reflected in Friend and in Me. So in both these objects. So these are basically just two different identifiers
// pointing to the exact same value. And once again, that value is the memory address D30F which points to the reference in the memory
// heap. And one important implication of this is that whenever you think that you're copying an object, you're really just creating 
// a new variable that points to the exact same object. And this has huge implications for the way JavaScript works in practice. And 
// we will see that in the next video and throughout the course. Now there are actually ways around this, as we will also learn later.
// but in general, this is how reference values work in JavaScript.


// practical examples

// primative types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Reference types
const jessica = {
    firstName = 'Jessica',
    lastName = 'Williams',
    age: 27
}
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica); // both effected

// copying objects

const jessica2 = {
    firstName = 'Jessica',
    lastName = 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}
const jessicaCopy = Object.assign({}, jessica2); // merges two objects
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage', jessica2); // williams
console.log('After Marriage', JessicaCopy); // Davis

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After Marriage', JessicaCopy); 

// both objects added with changes 
// object.assign could not do this as it second level.
// object.assign technique to copy only works on the first level
// object.assign only creates a shallow copy not a deep clone
// deep clone will copy everthing
// deep clone is external library, like Lo-Dash and this library has ton of helpfull tools and one of them is for deep cloning.


// summery

// js has two types of values, primative and reference values

// you can add, change, delate properties to a reference value whereas you cannot do it with primative values.

// copying a primative value from one variable to another creates a separate value copy. it means that change the value in a variable does not effect other.

// copying a reference from one variable to another creates a reference so that two variables refer to the same object this means changing the object via one
// varibale reflects in another variable.

// primatives are immutatable the variables may be reassigned a new value. but existing value cannot be changed.

// object references however are mutatable and can be changed.

// variables that are assigned a non-primative value are given a reference to that value. that reference points to the object location in memory heap.
// the variable dont actually contains the vlaue.

// when we assign primative variable to another variables, we copy the value to the new variable. so they are copied by the value.

// when  a reference type value, an object is copied to another variable, the address of that value is what's actually copied.
// objects are copied by the reference instead of by value.