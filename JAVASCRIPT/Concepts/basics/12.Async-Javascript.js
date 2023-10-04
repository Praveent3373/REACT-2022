
// SYNCHRONOUS

// 👉 Most code is synchronous;
// 👉 Synchronous code is executed line by line;
// 👉 Each line of code waits for previous line to finish;
// 👎 Long-running operations block code execution.

// ASYNCHRONOUS 

// 👉 Asynchronous code is executed after a task that runs in the “background” finishes;
// 👍 Asynchronous code is non-blocking;
// 👉 Execution doesn’t wait for an asynchronous task to finish its work;
// 👉 Callback functions alone do NOT make code asynchronous!

// 👉 Example: Asynchronous image loading with event and callback
// 👉 Other examples: Geolocation API or AJAX calls

// WHAT ARE AJAX CALLS?

// Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

// Ajax stands for Asynchronous JavaScript and XML. It is used to make asynchronous communication with the server. Ajax is used to read data from the server
// and update the page or send data to the server without affecting the current client page. Ajax is a programming concept. 

// WHAT IS AN API?

// 👉 Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other;
// 👉 There are be many types of APIs in web development: DOM API, Geolocation API, Own Class API, “Online” API
// 👉 “Online” API: Application running on a server, that receives requests for data, and sends data back as response;
// 👉 We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs.

// There is an API for everything
// 👉 Weather data
// 👉 Data about countries
// 👉 Flights data
// 👉 Currency conversion data
// 👉 APIs for sending email or SMS
// 👉 Google Maps
// 👉 Millions of possibilities...

// JSON data format : Most popular API data format

// api sources
// https://github.com/public-apis/public-apis

// Callbacks
// a callback is a function passed as an argument to another function.
// When you nest a function inside another function as an argument, that's called a callback.
// this technique allows a function to call another function
// a callback function can run after another function has finished.
// The ancient solution to synchronize these calls was via nested callbacks. This was a decent approach for simple asynchronous JavaScript tasks,
// but wouldn’t scale because of an issue called callback hell.

// Example:
let production = () =>{

setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
    console.log("The fruit has been chopped")
    setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(()=>{
        console.log("start the machine")
        setTimeout(()=>{
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(()=>{
            console.log(`${stocks.toppings[0]} as toppings`)
            setTimeout(()=>{
                console.log("serve Ice cream")
            },2000)
            },3000)
        },2000)
        },1000)
    },1000)
    },2000)
},0000)
};


//   Promises

let is_shop_open = true;

let order = ( time, work ) => {
    return new Promise( ( resolve, reject )=>{
        if( is_shop_open ){
        setTimeout(()=>{
            resolve( work() )
            }, time)
        }
        else{
        reject( console.log("Our shop is closed") )
        }
    })
}
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    return order(0000,()=>console.log('production has started'))
})
.then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
})
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(()=>{
    return order(1000, ()=>console.log("start the machine"))
})
.then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})
.then(()=>{
    return order(2000, ()=>console.log("Serve Ice Cream"))
})


// Async / Await

let is_shop_open = true;
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(0000)
        console.log("production has started")
        await time(2000)
        console.log("fruit has been chopped")
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
        await time(1000)
        console.log("start the machine")
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)
        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch(error){
        console.log("customer left")
    }
}




// Ways of making an API call in JavaScript
// https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b

// XMLHttpRequest
// fetch
// Axios
// jQuery

// XMLHttpRequest
// Before ES 6 comes out, the only way to make an HTTP request in JavaScript was XMLHttpRequest. It is a built-in browser object that allows us to
// make HTTP requests in JavaScript.
// By default we receive the response in the string format, we need to parse into JSON.

let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = () => {
    console.log(request);
    if (request.status === 200) {
        // by default the response comes in the string format, we need to parse the data into JSON
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status} ${request.statusText}`);
    }
};

// Fetch
// Fetch allows you to make an HTTP request in a similar manner as XMLHttpRequest but with a straightforward interface by using promises.
// It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones. We can make an API call by using fetch in two ways.

// m1

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
})

// m2 : Async and Await

async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}
getUsers().then(data => console.log(data));

// The fetch API is very powerful. We can easily send AJAX requests using the browser fetch API. The major disadvantage of fetch API is error handling.

// Axios
// Axios is an open-source library for making HTTP requests and provides many great features, and it works both in browsers and Node.js. 
// It is a promise-based HTTP client that can be used in plain JavaScript and advanced frameworks like React, Vue.js, and Angular.
// It supports all modern browsers, including support for IE 8 and higher.

// Installation
// npm install axios or can also include cdn file in html

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => { 
        console.log(response.data)
    }
)
.catch(error => console.error(error));

// advantages of Axios

// Axios performs automatic transformations and returns the data in JSON format.
// Better error handling
// Axios has a wide range of supported browsers.


// jQuery

// jQuery has many methods to handle asynchronous HTTP requests. In order to use jQuery, we need to include the source file of jQuery,
// and $.ajax() method is used to make the HTTP request.

$(document).ready(function() {
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function(result) {
        console.log(result);
    },
    error: function(error) {
        console.log(error);
    }
});
});

// The $.ajax method takes many parameters, some of which are required and others optional. It contains two callback functions success and error
// to handle the response received.