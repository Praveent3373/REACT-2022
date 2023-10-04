
// Event Delegation

// Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

//  <ul id="category">
//     <li id="books">Books</li>
//     <li id="camera">Camera</li>
//     <li id="sports">Sports</li>
// </ul>

// One way to do this is to attach an event listener to each of the li element like the below code snippet:

document.querySelector('#books').addEventListener('click', (e)=>{
    console.log(e.target.id);
})

document.querySelector('#camera').addEventListener('click', (e)=>{
    console.log(e.target.id);
})

document.querySelector('#sports').addEventListener('click', (e)=>{
    console.log(e.target.id);
})

// it is not an optimized way to implement this functionality. There may be a possibility that there are more li elements in the future which leads to more code addition & violates the rule: Don't repeat yourself 
// Let's take a look at how we can implement the same using Event Delegation.

document.querySelector('#category').addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        console.log(e.target.id);
    }
})

// more examples

let tasks = document.getElementById("tasks");
tasks.addEventListener("click", (event) => {
    event.target.classList.toggle("completed");
});


// In the above code snippet, instead of attaching a handler to each of the li elements – we put a single handler on their common parent ul and it implements the same functionality using the concept of Event Bubbling under the hood.

// The “behavior” pattern
// We can also use event delegation to add “behaviors” to elements declaratively, with special attributes and classes.

// We add a custom attribute to an element that describes its behavior.
// A document-wide handler tracks events, and if an event happens on an attributed element – performs the action.

// <div id="operation">
// <input type="text" value="10" data-action="increase">
// <input type="text" value="10" data-action="decrease">
// </div> 

// For instance, here the attribute data-action adds a behavior: “increase/decrease value on click” to inputs:

document.querySelector('#operation').addEventListener('click', (e) => {
    let action = e.target.dataset.action;
    switch (action) {
        case "increase":
            e.target.value++;
            break;
        case "decrease":
            e.target.value--;
            break;
    }
})

// Advantages of Event Delegation

// Saves a lot of memory
// Mitigates the risk of performance bottleneck
// Write less code

// Important Points To Remember

// There are some points to note down before implementing Event Delegation:
// Not all events are bubbled up like blur, scroll, etc.
// If you are using stopPropagation() in your code anytime then events are not bubbled up and event delegation won't work.