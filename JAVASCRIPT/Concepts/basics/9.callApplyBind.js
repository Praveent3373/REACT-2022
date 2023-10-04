const title = 'call, apply, bind methods';
document.getElementsByTagName('h1')[0].innerHTML = title;
document.title = title;

// call, apply, bind 
// these three methods are actually used to play with this keyword

function displayName(){
    console.log('praveen kumar')
}
displayName();
// behind the scenes its get converted into displayName.call and same this goes for apply method
displayName.call(); // also used to invoke the function
displayName.apply();
// when we dont use any methods call or apply for displayName() behind the scene it is actully doing displayName.call();

let participant1 = {
    name: 'Lily',
    battery: 70,
    chargeBattery: function(){
        this.battery = 100;
    }
}

participant1.chargeBattery();
console.log(participant1); // battery life changed to 100;

let participant2 = {
    name: 'John',
    battery: 30
}

// 1.call

// now participant2 does not have a chargeBattery.
// there is a way to take the chargeBattery method from participant1 and use it for particepent2.
// this is where your call method comes into picture and that would be the use case of call method.

// participant1.chargeBattery.call(participant2);

// this means we want take the chargeBattery method of particpant1 but we want use the data from particpant2 
// that means you want to call chargeBattery function from particpant1 on the object particpant2 this what the call funtion does.
// so whatever argument you pass to your call method the first argument on that we should be applying this charge battery function. 
// so this is how you can reuse methods of other objects for difrrent particular objects.

// console.log(participant1);
// console.log(participant2);

// but what if you dont want to charge the battery to 100 and is should be taken as an input of how much we want to chare our battery or how much addinal
// battery do we want to add so for that particular use case you can pass other parameters or arguments to your call methods.    

let participantA = {
    name: 'Lily',
    battery: 70,
    chargeBattery: function(a, b){
        this.battery = this.battery + a + b;
    }
}

let participantB = {
    name : 'John',
    battery: 30
}

participantA.chargeBattery(5, 2);
participantA.chargeBattery.call(participantB, 20, 23);

console.log(participantA); // 7
console.log(participantB); // 73

// so you can also pass arguments to call method so after passing the first object you can pass additional arguments which are comma separated and 
// you can also recieve it in your method.

// 2.apply

// apply method is very similar to call method instead of taking comma separated arguments it actually takes array of arguments
// so instead of passing directly comma separated it takes two arguments the first one is object and the second is an array of arguments

participantA.chargeBattery(5, 2);
participantA.chargeBattery.apply(participantB, [20, 23]);

console.log(participantA); // 77
console.log(participantB); // 73

// so in case of call pass comma separated arguments and in case of apply you pass array of arguments so this is the only diffrence between the call
//  and apply.

// 3.bind method.

// bind
// the way we use bind is actually very similar to call method
// again it is going to take first argument as ojbect and the next few arguments  will be comma separted.so very similar to call syntax

participantA.chargeBattery(5, 2);
participantA.chargeBattery.bind(participantB, 20,23);

console.log(participantA); // 77
console.log(participantB); // 30

// in case of call and apply your function is immidiatly called.
// in case bind it does not get called infact it just returns another function which you can call later
// but basically bind method returns a function it does not immidiatly invoke it but it returns a function that you can call it any later point.
// that means your bind method returns a function and it is not immidialty invoked and whatever it returns you can invoke it at any later point. 

participantA.chargeBattery(5, 2);
let chargeBatteryOfParticipant2 =  participantA.chargeBattery.bind(participantB, 20,23);
chargeBatteryOfParticipant2();
console.log(participantA); // 77
console.log(participantB); // 73

// we can say that call apply and bind are used to pass a diffrent value of this to a function.
// so by using dot call, dot apply and dot bind whatever argument the first argument that you pass will be the value of this keyword inside of anyfunction
// that you want .
// and the second point is this these three methods let you reuse methods of another objects for a diffretn object .
// and the third thing is this when you use call and apply your function is immidiatly invoked but incase of bind it actually returns a function that 
// you can inovke at a later stage in your code


// more examples 

// 1:

const airAsia = {
    airline: 'airAsia',
    iataCode: 'AA',
    bookings: [],
    book(flightNum, name){
       console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
       this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
    },
}
airAsia.book(3443, 'praveen kumar tekuri');
airAsia.book(3444, 'simran');
console.log(airAsia);

const indigo = {
    airline: 'indigo',
    iataCode: 'IG',
    bookings: [],
}

const bookingMethod = airAsia.book;

// does not works
bookingMethod(23, 'vinod kumar') // Cannot read properties of undefined (reading 'push')

// call method : receivs list of arguments after this keyword
// bookingMethod.call()
// that bookingMethod is really just an object and objects are have methods and therefore, functions can have methods too. and call methods is one of them.
// and in the call method the first argument is exactly what we want the this keyword to point to.

bookingMethod.call(indigo, 3234, 'vinod kumar');
console.log(indigo);
bookingMethod.call(airAsia, 3253, 'ShivaKumar');
console.log(airAsia);

// so this time we did actully not call the book function ourselves instead , we called the call method and its then this call method which will call
//  the book function with this keyword set to "indogo".
// so whatever we pass has the first argument of the call method and so this allows us to manually and explicitly set the this keyword of any function
//  that we want to call. then all the arguments after the first one are simply the arguments of the original function
// so even though the code of this function is inside of the "airAsia" object we made it so that this keyword in here pointed to "indigo".

// apply : does not receive a list of arguments after this keyword but instead, its gonna take an array of the arguments.

const airIndia = {
    airline: 'airIndia',
    iataCode: 'AI',
    bookings: [],
}
const flightData = [3034, 'Naveen Kumar Adigopula'];
bookingMethod.apply(airIndia, flightData);
console.log(airIndia);

// this apply method is not that used anymore in modern javascript because now, we have betterway of doing the exact same thing.
// call method with spread operater which does the same

const flightDataSpread = [3034, 'Naveen Kumar'];
bookingMethod.call(airIndia, ...flightDataSpread);
console.log(airIndia);

// with modern javascript prefer to use the call method and then spread out the arguments from any array.

// summery:
// we now have yet another tool in our toolbox here and this one is one that allows us to explicitly define the this keyword in any function that we want
// but there is actully yet another method which allows us to do the same thing that is the bind method. it's more important than the call and apply methods.

// bind method.

// bind also allows us to manually set this keyword for any function call now the difrence is that 
// bind method does not immidiatly call the function instead it returns a new function where this keyword is bound.

const bookAA = bookingMethod.bind(airAsia);
const bookID = bookingMethod.bind(indigo);
const bookAI = bookingMethod.bind(airIndia);
bookAA(203, 'kiran');
bookID(204, 'Anurudh');
bookAI(205, 'Pawan');
// pre setting the values for multiple persons
const bookAA1 = bookingMethod.bind(airAsia, 2323232);
bookAA1('Sathish');
bookAA1('Omkar');

// with event listeners

airAsia.planes = 200;
airAsia.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

airAsia.buyPlane();

document.querySelector('.buy').addEventListener('click', airAsia.buyPlane)

// here this means the buy button
// in the event handler function this keyword  always points to the element on which that handler is attached to.
// so here 'airAsia.buyPlane' is the handler function and so it is attached to the 'document.querySelector('.buy') element so this button'
// that's why this keyword here returns the button.

// in this handler function here we still need this keyword to point to the airAsia object itself otherwise this logic here will not work
// this means we need to manually define this keyword right here.
// should we use call, apply, or bind method ?
// well we need to pass in a function and not to call it , as we know call method calls the function that's not what we need and so therefore we use bind.
// because bind is gonna return a new function so this keyword should be airAsia and so that exactly what we define below.

document.querySelector('.buy').addEventListener('click', airAsia.buyPlane.bind(airAsia))

// now this points to airAsia and now no. of planes increasing each time that we click on this button.

// partial application
// partial application means that we can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
//same as const addVat = value => value * value * 23;
console.log(addVat(100));
console.log(addVat(200));

// or
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


const airAsia = {
    planes : 300,
    buy:function(){
        this.planes --;
        console.log(this)
    },
    reset: function(){
        this.planes = 0;
    }
}
airAsia.buy();
console.log(airAsia.planes)

document.querySelector('.buy').addEventListener('click', airAsia.buy.bind(airAsia));
let value = document.querySelector('.count');
value.innerHTML = airAsia.planes;

