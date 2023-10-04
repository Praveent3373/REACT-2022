
// Event Capturing Vs Event Bubbling In Javascript

// Event propagation is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward.

// The standard DOM Events describes 3 phases of event propagation:
// Capturing phase – the event goes down to the element.
// Target phase – the event reached the target element.
// Bubbling phase – the event bubbles up from the element.

// In the capturing phase, events propagate from the Window down through the DOM tree to the target node.
// In the bubbling phase, events propagate from the target element to Window up through the DOM tree by visiting all the ancestors of the target element one by one.


// Event Handling

let event1 = document.getElementById("event1");
event1.addEventListener("click", (event) => {
    console.log("Event 1 clicked");
    // event.stopPropagation(); this and next elements attached to same events 1 will be called
    // event.stopImmediatePropagation(); // only this will be called others not.
});
event1.addEventListener("click", () => {
    console.log("Event 1 duplicate clicked");
});
event1.addEventListener("click", () => {
    console.log("Event 1 duplicate 1 clicked");
});
// event.stopPropagation() allows other handlers on the same element to be executed, while 
// event.stopImmediatePropagation() prevents every event from running.


// Event Bubbling
let event2 = document.getElementById("event2");
    event2.addEventListener("click", () => {
    console.log("Event 2 clicked");
});
let child = document.getElementById("child");
child.addEventListener("click", () => {
    console.log("Child clicked");
});
let parent = document.getElementById("parent");
parent.addEventListener("click", () => {
    console.log("Parent clicked");
}
);

// Event Capturing

let event2 = document.getElementById("event2");
event2.addEventListener("click", () => {
    console.log("Event 2 clicked");
},true);
let child = document.getElementById("child");
child.addEventListener("click", () => {
    console.log("Child clicked");
},true,);
let parent = document.getElementById("parent");
parent.addEventListener("click", () => {
    console.log("Parent clicked");
},true,);

// Event Delegation
let tasks = document.getElementById("tasks");
tasks.addEventListener("click", (event) => {
    event.target.classList.toggle("completed");
});


// html code

{/* 
    <div id="parent">
        <h1 id="sample">Parent</h1>
            <div id="child">
                <h1>Child</h1>
                <button id="event1">Event 1</button>
                <button id="event2">Event 2</button>
            </div>
    </div>

    <div>
        <ul id="tasks">
            <li>Task-1</li>
            <li>Task-2</li>
        </ul>
    </div> 
*/}


// explanation 2:

{/* 
    <div class="grandParent">
    <h2>grandParent</h2>
    <div class="parent">
        <h2>parent</h2>
        <div class="child">
            <h2>child</h2>
        </div>
    </div>
    </div> 
*/}

// Event Bubbling

const divs = document.querySelectorAll('div');
function logText(e) {
    console.log(this.classList.value);
}
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,  //set Event Capturing to false
}));

// Event Capturing

const divs = document.querySelectorAll('div');
function logText(e) {
    console.log(this.classList.value);
}
divs.forEach(div => div.addEventListener('click', logText, {
    capture: true, //set Event Capturing to true
}));

// Stop Propagation
// The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

const divs = document.querySelectorAll('div');
function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop further bubbling and capturing
}
divs.forEach(div => div.addEventListener('click', logText, {
    capture: true, //set Event Capturing to true
}));

// If you add e.stopPropagation(); then it prevents the event propagation.


// Summery
// The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
// event.stopImmediatePropagation() prevents every event from running.

// event.preventDefault()
// If you have a form and don’t want the page to refresh when it’s submitted.
// You’re setting up your own route functionality and don’t want the page to refresh.





