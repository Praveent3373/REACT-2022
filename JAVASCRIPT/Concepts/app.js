const url = 'https://jsonplaceholder.typicode.com/users';

// 3 display users 

// const displayUsers = async () => {
//   const resp = await fetch(url);
//   const result = await resp.json();
// // in alphabetical order
//   let filterUsers = result.sort((a, b) => {
//       return a.name.localeCompare(b.name)
//   })

// // Sort users in descending order:
// //   let filterUsers = result.sort((a, b) => {
// //       return b.id - a.id
// //   })
//   console.log(filterUsers)
// }
// displayUsers();   

// promises

// const count = true;
// const newCount = new Promise((resolve, reject) => {
//     if(count){
//         resolve('there is a count')
//     }
//     else{
//         reject('there is no count value')
//     }
// }) 
// console.log(newCount);


// async / await

// const fetchData = async () => {
//     const resp = await fetch(url);
//     const output = await resp.json();
//     console.log(output); 
// }
// fetchData();

// callback function

// call, apply, bind
const person  = {
    name: 'praveen',
    age: 33, 
    msg: function(style, time){
       if(style === 'formal'){
           return `Hi ${time} this is ${this.name} how are you`
        }
        if(style === 'freindly'){
            return `Hey ${time} this is ${this.name} how are you`
       }
    }
}
// const person2 = {name: 'naveen', age: 32}
// console.log(person.msg('freindly'))
// console.log(person.msg.call(person2, 'formal'))
// console.log(person.msg.apply(person2, ['freindly']))
// const bindA = person.msg.bind(person2);
// let val = bindA('formal', 'good morning')
// let val2 = bindA('formal', 'good afternoon')
// console.log(val);
// console.log(val2);

// closure

// function wcg(position) {
//     var name = "Web Code Geeks"; 
//     function displayMessage() {
//        console.log(name, position)
//     }
//    displayMessage();
// }
// wcg('web developer');


// event loop
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// hoisting

// console.log(add(4,5))
// console.log(nameZ);
// console.log(obj);
// console.log(book);

// function add (n1, n2){
//     return n1 + n2;
// }
// var nameZ = 'praveen kumar';
// let obj = {name: 'naveen', age: 32}
// const book = 'life is too short'
// console.log(typeof(obj))

// 
// const nums = [1,2,3,4];
// nums.push(5);
// nums.unshift(0)
// console.log(nums);

// console.log(a);
// a = 30;
// var a;


// prototype

// constructor function
// function dog (name, bread, color){
//     this.name = name;
//     this.bread = bread;
//     this.color = color;
// }

// const d1 = new dog('tommy', 'abc', 'black');
// const d2 = new dog('zommy', 'bac', 'white & black');
// dog.prototype.bark = function(){
//     return 'Barks'
// }
// console.table(d1);
// console.table(d2);
// console.log(d1.bark())

// class with constructor
// class dog_c {
//     constructor(name, bread, color){
//         this.name = name;
//         this.bread = bread;
//         this.color = color;
//     }
//     bark(){
//         return 'woof!'
//     }
// }

// const c1 = new dog_c('tommy', 'abc', 'black');
// const c2 = new dog_c('zommy', 'bac', 'white');
// console.table(c1);
// console.table(c2);
// console.table(c1.bark());

// extend class

// class dog_c1{
//     constructor(name){
//         this.name = name;
//     }
//     bark(){
//         return 'barked'
//     }
// }

// class dog_c2 extends dog_c1{
//     constructor(name){
//         super(name)
//     }
//     smallBark(){
//         return 'woofed'
//     }
// }

// const myPet = new dog_c1("max");
// console.log(myPet);

// promise

// const value = 2;
// const promise = new Promise((resolved, reject) => {
//    try {
//        if(value === 3){
//            resolved('the value is resolved')
//        }
//        else{
//            reject('the value is rejected')
//        }
//    } catch (error) {
//        console.log(error);
//    }
// })
// console.log(promise);

// const msg = 'welcome to js'
// const msg2 = msg.split('').reverse().join('');
// console.log(msg2);

// function msg(){
//     console.log('hello world')
// }

// const btn = document.querySelector('#btn');

// var item = {
//     name: 'brinjal',
//     cost : 10,
//     color: 'black',
//     render: function(time){
//        if(time === 'morning'){
//            console.log(`hey good morning this is ${this.name}`)
//        }
//        if(time === 'afternoon'){
//            console.log(`hey good afternoon this is ${this.name}`)
//        }
//     },
//     increment: function(){
//         let count = this.cost ++;
//         console.log(count);
//     }
// }

// let item2 = {
//     name : 'kira',
//     cost: 5,
//     color : 'black',
//     time : 'morning'
// }

// item.render('morning');
// item.render.call(item2, 'afternoon');
// item.render.apply(item2, ['afternoon']);
// let n1 = item.render.bind(item2, 'morning');
// n1();

// bind example
// let increment = item.increment.bind(item)
// btn.addEventListener('click', increment)

// these methods lets you reuse methods of another objects for diffrent objects


// class Parent{
//     constructor(name, age, color){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }
//     greet(){
//         console.log(`Hi this is ${this.name}`)
//     }
// }

// class Child extends Parent{
//     constructor(name, age, color){
//         super(name, age, color)
//     }
//     // greetFreindly(){
//     //     console.log('hi ra this ' + this.name);
//     // }
// }


// let p1 = new Parent('praveen', 28, 'white');
// let p2 = new Child('naveen', 30, 'black');
// console.log(p1.greet());
// console.log(p2.greet());


 
console.log('first');
 
const event2 = function(){
   console.log('second');
}
 
setTimeout(event2, 0);
console.log('third');
