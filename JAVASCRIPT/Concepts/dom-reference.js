
const btns = document.querySelectorAll('.btn');
const links = document.querySelectorAll('.link');
const container = document.querySelector('.container');
const article = document.querySelector('.list-item');
const heading = document.querySelector('.list-item > h3');

// Ways of iterating over a NodeList

btns.forEach((item) => {
    item.addEventListener('click', function(){
       console.log(this, 'forEach')
    })
})

for(const btn of btns){
    btn.addEventListener('click', function(){
        console.log(this, 'forof');
    })
}

[...btns].forEach(btn => {
    btn.addEventListener('click', function(){
        console.log(this, 'spread')
    })
})

Array.from(btns).forEach(btn =>{
    btn.addEventListener('click', function(){
        console.log(this, 'Array.from')
    })
})

// selecting elements

console.log(container.children);
console.log(article.parentElement); // immidiate parent
console.log(heading.nextElementSibling);
console.log(heading.previousElementSibling);

// attributes
console.log(container.getAttribute('class'));
heading.nextElementSibling.setAttribute('class', 'paragraph');
heading.textContent = 'content updated dynamically';

// classname(overrides) vs classlist(best way to add or remove)

// heading.parentElement.className = 'heading2' 
heading.parentElement.classList.add('heading2'); //cannot override
if(heading.parentElement.classList.contains('heading2')){
    heading.parentElement.classList.remove('heading2'); 
}

// createElement - createTextNode - appendChild
let div = document.createElement('div');
let Divtext = document.createTextNode('this is dynamic heading');
div.appendChild(Divtext);
div.classList.add('dynamic_div');
// container.appendChild(div);
// insertBefore('element', 'location')
article.insertBefore(div, heading);

// remove , removeChild
article.remove(); // article will removed
article.removeChild(heading); // child of artilce heading will be removed


// innerHTML(returns html structure) vs textContent(returns content)

var dynamicvar = 'dynamic var';
var ul = document.createElement('ul');
ul.innerHTML = `<li>${dynamicvar}</li>
<li>list item dynamic</li>
<li>list item dynamic</li>
<li>list item dynamic</li>`
document.body.appendChild(ul);


// Change css with style property

var value = document.querySelector('#heading1');
value.style.color = 'red';
value.style.fontSize = '1rem';
value.classList.add('class2'); // much faster

// click event
// addEventListener('event', cb);
// what event, what to do

btn.addEventListener('click', function() {
    // console.log('button has cliked');
    heading.classList.add('class2');
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

// Event Propagation example
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

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//         count--;
//         } else if (styles.contains("increase")) {
//         count++;
//         } else {
//         count = 0;
//         }
//     }
// }









