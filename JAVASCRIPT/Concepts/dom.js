
var headings = document.getElementsByTagName('h1');
headings[0].style.color = 'red';

var items = document.getElementsByTagName('li');
 console.log(items); // node list
 items.forEach(function(item){
 console.log(item); // forEach is not function
})

var spreadItems = [...items];
 spreadItems.forEach(function(item){
 console.log(item); // items
 })

 var items = document.querySelector('#items');
 console.log(items.childNodes); // returns including white spaces (8)
 console.log(items.children); // returns without white spaces (4)
 console.log(items.firstChild); // retunrs white space
 console.log(items.lastChild); // retunrs white space

//  Parent Element
 var item = document.querySelector('li');
 item.parentElement // immidiate parent
 console.log(item.parentElement.parentElement.parentElement)
item.parentElement.style.backgroundColor = 'red';

// PreviousSibling {PreviousSibling.PreviousSibling}
// nextSibling {nextSibling.nextSibling }
// return whitespace

var first = document.querySelector('.first');
var second = first.nextSibling // returns whitespace
var second = first.nextSibling.nextSibling; // returns item
var second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

var last = document.querySelector('.last');
var third = last.previousSibling.previousSibling;
third.style.color = 'blue'
last.nextSibling;
console.log(third);
console.log(last.nextSibling.nextSibling) // null

// nextElementSibling , PreviusElementSibling (no white space)
var first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red'; // no white space

// setAttribute vs getAttribute

var heading = document.querySelector('.heading');
console.log(heading.getAttribute('id')); // id value
console.log(heading.getAttribute('class')); // class value
var setAtt = heading.nextElementSibling;
setAtt.setAttribute('class', 'dynamic-class');
setAtt.textContent = 'heading has been changed dynamically';

// className (overrides)
// classList (best way to add or remove)

var first = document.querySelector('#heading1');
var second = document.querySelector('#heading2');
var third = document.querySelector('#heading3');
first.className = 'class1';
first.className = 'class2'; // removes class1 and adds class2
//overides
first.className = 'class1 class2'; // can use this
second.classList.add('class1', 'class2');
second.classList.remove('class1');
if (second.classList.contains('class2')) {
    console.log('does class');
} else {
    console.log('does not have class');
}

// createElement - createTextNode - appendChild

// createElement('element')
// createTextNode('text content')
// appendChild (child Element)

var output = document.querySelector('.headings');
// create Empty Element
var div = document.createElement('div');
// create Text node
var content = document.createTextNode('this is dynamic heading');
// append to empty div
div.appendChild(content);
// append to body
document.body.appendChild(div);
var h1 = document.createElement('h1');
var h1Content = document.createTextNode('this dynamic heading');
h1.appendChild(h1Content);
h1.classList.add('class', 'class1');
output.appendChild(h1);


insertBefore('element', 'location')
var output = document.querySelector('.headings');
var heading1 = document.querySelector('#heading1');
var h1 = document.createElement('h2');
var h1Content = document.createTextNode('this is heading 0');
h1.appendChild(h1Content);
output.insertBefore(h1, heading1);
replaceChild('new', 'old');
document.body.replaceChild(smallHeading, heading1);
// prepend innerText
var heading = document.createElement('h4');
heading.innerText = 'hey there...';
document.body.prepend(heading);

// remove , removeChild

var parent = document.querySelector('.headings');
parent.remove(); // removed parent
var child = parent.querySelector('#heading2');
parent.removeChild(child);
console.log(child);

// innerHTML vs textContent

var values = document.querySelector('#heading1');
console.log(values.innerHTML); // returns html structure
console.log(values.textContent); // returns content
var dynamicvar = 'dynamic var';
var ul = document.createElement('ul');
ul.innerHTML = `<li>${dynamicvar}</li>
<li>list item dynamic</li>
<li>list item dynamic</li>
<li>list item dynamic</li>`
document.body.appendChild(ul);
console.log(ul)

// Change css with style property

var value = document.querySelector('#heading1');
value.style.color = 'red';
value.style.fontSize = '1rem';
value.classList.add('class2'); // much faster

// click event

// select Element
addEventListener('event', cb);
// what event, what to do

var btn = document.querySelector('#btn');
var h2 = document.querySelector('#heading2');
btn.addEventListener('click', function() {
    // console.log('button has cliked');
    h2.classList.add('class2');
});

// Function reference

function changeColors() {
    var hasClass = h2.classList.contains('class1');
    if (hasClass) {
    h2.classList.remove('class1');
    } else {
    h2.classList.add('class1');
    }
}

btn.addEventListener('click', toggleFunction()) // already invoked
btn.addEventListener('click', changeColors); // reference

// click - fires after full action occures
// mouseup -- button is pressed
// mousedown -- button is released
// mouseenter -- moved onto an element
// mouseleave -- moved out of an element

// KEY EVENTS

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

var inputvalue = document.getElementById('inputvalue');
inputvalue.addEventListener('keypress', function() {
    console.log('yoy pressed a key');
});
inputvalue.addEventListener('keydown', function() {
    console.log('yoy pressed a key');
});
inputvalue.addEventListener('keyup', function() {
    console.log(inputvalue.value);
});

// event object

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// use instead of event.currentTarget
// not supports in arrow functions
// preventDefault() - prevents defaults behaviour
var heading = document.getElementById('title');
var btn = document.getElementById('btn');
var link = document.getElementById('link');
heading.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    console.log(this);
});
btn.addEventListener('click', function(event) {
    event.currentTarget.classList.add('class1');
    this.classList.add('class1');
    console.log(event.type);
});
function linkFunc(e) {
    e.preventDefault();
}
link.addEventListener('click', linkFunc);

// currentTarget vs target

// currentTarget : always referes to the element to which the event handler has been attached to .
// target : identifies the element on which the event occured.
var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
btn.addEventListener('click', function(e) {
    console.log(e.currentTarget);
    e.currentTarget.style.backgroundColor = 'blue';
    console.log(e.target);
    e.target.style.backgroundColor = 'red';
    });
}); 

// event propogation - bubbling - capturing

// allows Select dynamic Elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target.
var container = document.querySelector('.container');
var list = document.querySelector('#items');
function showBubbling(e) {
    console.log('current target : ', e.currentTarget);
    console.log('target : ', e.target);
    if (e.target.classList.contains('list')) {
        console.log('you clicked on the link');
    }
}
// stop bubbling
function stopPropagation(e) {
    console.log('you clicked on the list');
    e.stopPropagation();
}
// bubbling by default
list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
// stop bubbling
list.addEventListener('click', stopPropagation);
capturing
list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });

// Event Propagation example
var container = document.querySelector('.container');
var btn = document.querySelector('#btn');
var heading = document.querySelector('.heading');
console.log(heading);
btn.addEventListener('click', function(e) {
    var h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = 'dynamic creation';
    container.appendChild(h1);
    });
heading.addEventListener('click', function(e) {
    console.log('printed'); // null
    alert('hello there');
});
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('list')) {
    console.log('hello there');
}
});

// LOCAL STORAGE

// Web storage API - provided by browser
// session storage , local storage
// setItem, getItem, removeItem, clear
// JSON.stringify(), JSON.parse()
localStorage.setItem('name', 'praveen kumar');
sessionStorage.setItem('name', 'praveen kumar');
var name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('name');
var name1 = localStorage.getItem('name');
console.log(name1);
var friends = ['ram', 'teja', 'seedha'];
localStorage.setItem('friends', JSON.stringify(friends));
var getValue = JSON.parse(localStorage.getItem('friends'));
console.log(getValue[0]);

// var fruits;
if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else {
    fruits = [];
}
console.log(fruits);
fruits.push('apple');
fruits.push('mango');
console.log(fruits);
localStorage.setItem('fruits', JSON.stringify(fruits));

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
        count--;
        } else if (styles.contains("increase")) {
        count++;
        } else {
        count = 0;
        }
    }
};

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
// console.log(links.classList);
// console.log(links.classList.contains("random"));
// console.log(links.classList.contains("links"));
// if (links.classList.contains("show-links")) {
// links.classList.remove("show-links");
// } else {
// links.classList.add("show-links");
// }
links.classList.toggle("show-links");
});

closeBtn.addEventListener("click", function () {
     sidebar.classList.remove("show-sidebar");
});

btn.addEventListener("click", function () {
    // console.log(question);
    questions.forEach(function (item) {
    if (item !== question) {
    item.classList.remove("show-text");
    }
    });
    question.classList.toggle("show-text");
    });
});

    // traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
// btn.addEventListener("click", function (e) {
// const question = e.currentTarget.parentElement.parentElement;
// question.classList.toggle("show-text");
// });
// });

function displayMenuButtons() {
    const categories = menu.reduce(
    function (values, item) {
    if (!values.includes(item.category)) {
    values.push(item.category);
    }
    return values;
    },
    ["all"]
);

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    } else {
    linksContainer.style.height = 0;
    }
    // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
    if (scrollHeight > 500) {
        console.log("helo");
        topLink.classList.add("show-link");
        } else {
        topLink.classList.remove("show-link");
        }
});