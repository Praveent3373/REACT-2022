
// Javascript Nuggets

//1 map method
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const people = [
    { name: 'bob', age: 20, position: 'developer', },
    { name: 'anna', age: 25, position: 'designer', },
    { name: 'susy', age: 30, position: 'the boss', },
    { name: 'john', age: 26, position: 'intern', },
];
// 1
const getAges = (person) => person.age *2;
const ages = people.map(getAges);
console.log(ages);

//2
const newPeople = people.map((person) => {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20
    }
})
console.log(newPeople);

// 3
const names = people.map((person) => `<h2>${person.name}</h2>`)
document.querySelector('#app').innerHTML = names.join('');




//2 Unique Values

const menu = [
    { name: 'pancakes', category: 'breakfast', },
    { name: 'burger', category: 'lunch', },
    { name: 'steak', category: 'dinner', },
    { name: 'bacon', category: 'breakfast', },
    { name: 'eggs', category: 'breakfast', },
    { name: 'pasta', category: 'dinner', },
];
const categorys = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categorys);
    



//3 Dynamic Object keys

// dot notation
const person = {name: 'john'}
console.log(person.name);
person.age = 24;
console.log(person);

// squar bracket notaion
const items = {
    'featured-items': ['item1', 'item2']
}
console.log(items["featured-items"]);
console.log(person['name'])

// setup keys dynamically using SBN

// 1: update app
// need to declare key and value
let appState = 'error';
appState = 'loading';
const keyName = 'computer';
const app = {
    [appState]: true
}
app[keyName] = 'apple';
console.log(app);

// 2: update state with function
const state = {
    loading: true, name: '', job: ''
}
function updateState(key, value){
    state[key] = value;
}
updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', true);
updateState('products', []);
updateState('name', 'naveen')
console.log(state);





//4 Filter & Find
// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const peoples = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
];

// filter
const youngPeople = people.filter((person) => {
    // if(person.age < 30){
    //     return person;
    // }
    return person.age < 30
})
console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// no match
const seniorDevs = people.filter((person) => person.position === 'senior dev');
console.log(seniorDevs); // []

// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson) // undefined
// multiple matches
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);
const anna = people.filter((person) => person.name === 'anna');
console.log(anna[0].position)
console.log(peter.position)





//5 Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const reducer = data.reduce(() => {}, 0 || reducer function, initialValue)

const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
];
const cart = [
    { title: 'Samsung Galaxy S7', price: 599.99, amount: 1, },
    { title: 'google pixel ', price: 499.99, amount: 2, },
    { title: 'Xiaomi Redmi Note 2', price: 699.99, amount: 4, },
    { title: 'Xiaomi Redmi Note 5', price: 399.99, amount: 3, },
]
// 1
const dailyTotal = staff.reduce((total, person) => {
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total;
},0)
console.log(dailyTotal);

// 2
let {totalItems, cartTotal} = cart.reduce((total, cartItem) =>{
    const {price, amount} = cartItem;
    total.totalItems += amount;
    total.cartTotal += amount * price;
    return total;
},{totalItems:0, cartTotal:0}
)
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

// 3
const fetchRepos = async () => {
        const response = await fetch('https://api.github.com/users/john-smilga/repos?per_page=100')
        const data = await response.json()
        const newData = data.reduce((total, repo) => {
        const { language } = repo
       /* if (language) {
        if (total[language]) {
        total[language] = total[language] + 1
        } else {
        total[language] = 1
        }
        } */
        if (language) {
            total[language] = total[language] + 1 || 1
        }
        return total
        }, {})
        console.log(newData)
}
fetchRepos()




//6 Destructuring
// faster/easier way to access/unpack variables from arrays, objects

// Array-destructuring
// with array destructuring order is matter.

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly, susan] = friends;
console.log(john, peter, bob, anna, kelly);
console.log(john, peter, bob, anna, kelly, susan);

// skip values
const [enemy, , bob, , kelly, susan] = friends;
console.log(enemy, bob, kelly);

// Swap Variables
let first = 'bob';
let second = 'john';
// let temp = second;
// second = first;
// first = temp;
[second, first] = [first, second];
console.log(first, second);

// Object-destructuring
const bob = {
first: 'bob', 
last: 'sanders',
city: 'chicago',
siblings: { 
    sister: 'jane',
    },
};
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

const { first: firstName, last, city, zip,
siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);

function printperson ({first, last, city, siblings: {sister}}) {
    // const {first, last} = bob;
    console.log(first, last, city, sister,)
}
printperson(bob);




//7 Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest);

// functions
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);

    const average = scores.reduce((total, item) => {
        return (total += item);
    }, 0) / scores.length;

    console.log(average);
};
// getAverage(person.name,67,78,89,78)
const testScores = [67, 78, 99, 100];
getAverage(person.name, ...testScores);




//8 Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';
const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//reference
// const newFriends = friends;
// copy
newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(newFriends);
console.log(friends);

// ES2018 - ES8
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson);




//9 Array.from - NOT ON PROTOTYPE
// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy'
// console.log(Array.from(udemy))
// const text = document.querySelectorAll('.text')
// console.log(text)
// const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText)
const items = Array.from({ length: 120 }, (_, index) => {
    return index
})
console.log(items);
const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)

const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    const tempItems = items.slice(start, start + itemsPerPage)
    return tempItems
})
console.log(newItems)




//10 Optional Chaining
// https://randomuser.me/api

const people = [
    {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
    },
    { name: 'peter', location: { street: '123 Pine street' } },
    {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
    },
]

people.forEach((person) => {
    // console.log(person.name)
    // console.log(person.location)
    // console.log(person.location.street)
    // console.log(person.location.timezone.offset)
    // console.log(
    // person.location &&
    // person.location.timezone &&
    // person.location.timezone.offset
    // )
    console.log(person?.location?.timezone?.offset)
    console.log(person?.location?.timezone?.offset || 'Hello world')
})




//11 Callback Functions

function makeUppercase(value) {
    console.log(value.toUpperCase())
}
// makeUppercase('peter')
function reverseString(value) {
    console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
    const fullName = `${name} smith`
    console.log(fullName)
    cb(fullName)
}
handleName('peter', makeUppercase)
handleName('peter', reverseString)

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function () {
// console.log('hello world')
// })
// btn.addEventListener('click', sayHello)
function sayHello() {
    console.log('hello people')
}
// array methods, setTimeout etc


// Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
    first.style.color = 'red'
        setTimeout(() => {
        second.style.color = 'blue'
            setTimeout(() => {
            third.style.color = 'green'
            }, 2000)
        }, 3000)
    }, 1000)
})





//12 Promises
// async await
// consume/use promises
// Pending, Rejected, FulFilled

const value = 2
const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3)
    console.log(random)
    if (random === value) {
    resolve('you guessed correctly')
    } else {
    reject('wrong number')
    }
})
console.log(promise)
promise.then((data) => console.log(data)).catch((err) => console.log(err))

// Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch((err) => console.log(err))
})

function addColor(time, selector, color) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve(data)
            }, time)
        } else {
            reject(`There is no such element : "${selector}"`)
        }
    })
}





//13 async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async () => {
    return 'hello there'
}
async function someFunc() {
    const result = await example()
    console.log(result)
    console.log('hello world')
}

const users = [
    { id: 1, name: 'john' }, { id: 2, name: 'susan' }, { id: 3, name: 'anna' },
]
const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]

const getData = async () => {
    try {
        const user = await getUser('john')
        const articles = await getArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)
    }
}
// getData()
// getUser('susan')
// .then((user) => getArticles(user.id))
// .then((articles) => console.log(articles))
// .catch((err) => console.log(err))

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)
        if (user) {
            return resolve(user)
        } else {
            reject(`No such user with name : ${name}`)
        }
    })
}
function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)
        if (userArticles) {
            return resolve(userArticles.articles)
        } else {
            reject(`Wrong ID`)
        }
    })
}





//14 Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'
// console.log(fetch(url))
// fetch(url)
// .then((resp) => resp.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

const getTours = async () => {
    try {
        const resp = await fetch(url)
        const data = await resp.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
console.log(getTours().then())

// Fetch-errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = 'https://www.course-api.com/react-tours-projects'
const getTours = async () => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            const msg = `There was an error "${resp.status} ${resp.statusText}"`
            throw new Error(msg)
        }
            const tours = await resp.json()
            console.log(tours)
        } 
    catch (error) {
        console.log(error)
    }
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)





//15 Width/Height - window, any element
// innerHeight - window
// innnerWidth - window
// getBoundingClientRect() - any element

console.log('height', window.innerHeight)
console.log('width', window.innerWidth)

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
    const dimensions = box.getBoundingClientRect()
    console.log(dimensions)
})





//16 Timestamps

console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
console.log(Date.now());
}, 1000);

// create id's in learning apps
let people = [];
people = [...people, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
people = [...people, { id: Date.now(), name: 'john' }];
console.log(people);
}, 1000);

// create/get dates
console.log(new Date(1632961557647));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

// difference between dates
const firstDate = new Date();
const secondDate = new Date(2021, 8, 28);
const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();
console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);
const minutes = timeDifference / (1000 * 60);
console.log(minutes);
const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);





//17 ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

const fetchTabs = () => {
    return fetch('https://www.course-api.com/react-tabs-project').then((resp) =>
    resp.json()
);
};

export default fetchTabs;

// Top Level Await - Basic Example
import fetchTabs from './fetchTabs.js';
const tabs = await fetchTabs();
console.log(tabs);

const scores = [99, 90, 100];
const oldLast = scores[scores.length - 1];
console.log(oldLast);

const newLast = scores.at(-1);
console.log(newLast);

const channel = 'Coding Addict';
console.log(channel.at(0));

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);





//18 Get Element Helper

const heading = document.querySelector('.heading');
const listItems = document.querySelectorAll('.lis-item');

const getElement = (selector, isList) => {
    const el = isList? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);
    // if(!isList && el) return el;
    // if(isList && !el.length < 1) return el;
    if((!isList && el) || (isList && !el.length <1)) return el;
    throw new Error(`Please double check selector: ${selector}`);
}
console.log(getElement('.heading'));
console.log(getElement('.list-item', true));





//19 "for in" loop - iterates over object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use "for of" loop instead

const person = {
    name: 'naveen',
    age: 28,
}

for(const el in person){
    console.log(`${el}: ${person[el]}`)
}

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const cars = ["BMW", "Volvo", "Mini"];

for (let elm of cars) {
    console.log(elm);
}





//20 Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both into array

const person = {
    name: 'naveen',
    age: 28,
    role: 'developer'
}

const k = Object.keys(person);
console.log(k);

const v = Object.values(person);
console.log(v);

const kv = Object.entries(person);
console.log(kv);

// map method
const newResult = kv.map((el) => {
    const [first, second] = el;
    return first;
})
console.log(newResult);

// for of
for(const [first, second] of kv){
    // const [first, second] = item;
    console.log(first, second)
}




//21 Set object - stores a collection of unique values of any type
// new Set();
// add(value);
// delete(value);
// clear();
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

unique.add('first');
unique.add('second');
unique.add('third');
unique.add('first');
unique.add(4);
console.log(unique);

const result = unique.delete('four');
console.log(result);

const isValue = unique.has(4);
console.log(isValue);

const products = [
    {company: 'ikea'},{company: 'marcos'},
    {company: 'caressa'},{company: 'ikea'},
]

const companies = products.map((item) => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = ['all', ...uniqueCompanies];
console.log(finalCompanies);

const mixCompanies = ['all', ...new Set(products.map((el) => el.company))];
console.log(mixCompanies);


//22 String includes() - checks if a string contains another string.

const product = [
    {title: 'Modern Poster'},
    {title: 'Bar Stool'},
    {title: 'Armchair'},
]

const text = 'a';
const filteredProducts = product.filter((el) => 
    el.title.toLocaleLowerCase().includes(text)
);
console.log(filteredProducts);

//23 Array includes() - checks if the item is an array
// usefull in the conditional statements

const groceries = ['milk', 'bread', 'meat'];
let randomItem = 'milk';

if(groceries.includes(randomItem)){
    console.log('Yeah! its on the list')
}