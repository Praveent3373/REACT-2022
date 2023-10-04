
// Event handling
// let event1 = document.getElementById('event1')
// event1.addEventListener("click", () => {
//   console.log('Event 1 clicked')
// })

// Event bubbling

// document.getElementById('event2').addEventListener('click', () => {
//   console.log('event 2 clicked');
// })
// document.getElementById('child').addEventListener('click', () => {
//   console.log('child elemenent clicked')
// })
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('parent element clicked')
// })

// Event capturing

document.getElementById('event2').addEventListener('click', () => {
  console.log('event 2 clicked');
}, true)
document.getElementById('child').addEventListener('click', () => {
  console.log('child elemenent clicked')
 }, true)
document.getElementById('parent').addEventListener('click', () => {
  console.log('parent element clicked')
}, true)

// stop capturing or bubbling

// document.getElementById('parent').addEventListener('click', (e) => {
//   console.log('parent element clicked')
//   e.stopPropagation();
// }, true)

// document.getElementById('event2').addEventListener('click', (e) => {
//   console.log('event 2 clicked')
//   e.stopPropagation();
// })

// document.getElementById('event2').addEventListener('click', (e) => {
//   console.log('event 2 clicked');
//   e.stopImmediatePropagation();
// })
// document.getElementById('event2').addEventListener('click', (e) => {
//   console.log('event 2 duplicate clicked');
//   e.stopPropagation();
// })



// Event delegation

document.getElementById('tasks').addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
})

