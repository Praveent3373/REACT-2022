
// Local storage - Session Storage

// Web Storage API
// Not part of the DOM - refers to the window API
// Availabe to js via the global variable: window
// we do not have to type window. It is implied

// localStorage
// Any content/data saved to the localStorage object will be available after the browser has been restarted (closed and opened again). 
// In order to save an item to localStorage, you can use the method setItem(). This method must be handed a key and a value.

// sessionStorage
// Items saved in the sessionStorage object will remain until the browser is closed by the user. Then, the storage will be cleared.

// stringify() takes a JavaScript object and then transforms it into a JSON string. 
// JSON.parse() takes a JSON string and then transforms it into a JavaScript object.

// data
const myArr = [1, 2, 3, 4];
const myObj = {
    name : 'naveen',
    hobbies: ['eat', 'code', 'sleep'],
    logName : function(){
        console.log(this.name);
    }
}

// local storage 
localStorage.setItem('LocalStrg', JSON.stringify(myObj));
localStorage.setItem('myArr', JSON.stringify(myArr));
const getObj = JSON.parse(localStorage.getItem('LocalStrg'));
const getArr = JSON.parse(localStorage.getItem('myArr'));
console.log(getObj);
console.log(getArr);

// other methods
console.log(localStorage.length); // show how many items in storage
let key = localStorage.key(0); // shows specified value's position key
localStorage.removeItem('myArr'); // delates specified key
localStorage.clear(); // clears everything
console.log(key);
