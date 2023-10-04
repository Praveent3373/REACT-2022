
//================== A.BASIC TYPESCRIPT TYPES ===============

// 1.string
let message: string = "Hello world";
message = 'Hello'

// 2.number
let age:number = 20;
age = 10;

// 3.boolean
let isAdmin: boolean = true;
isAdmin = false;

// 4.any : not recommonded (js feature)
let a:any = 10;
a = 20;
a = {name: 'praveen'}
a = [1, 2, 3]
a = 10;
a = 'naveen'

for(let i = 0; i< a.length; i++){
    console.log(a[i]) //failed
}

// 5. arrays
let students: number[] = [1, 2, 3, 4];
students = [10]

let teachers: string[] = ['vivek', 'kalayn']
teachers = ['Naveen']

let users: any[] = []; // not recommonded
users = [10, 'string']

// 6.Tuples - fixed length and fixed type arrays
let user: [string, number] = ['venkatesh', 20]
user = ['naveen', 15]

let userData: [string, number][] = []
userData = [['naveen', 20], ['praveen', 15]]

// 7.Union
let person : string | number;
person = "venkatesh";
person = 20;

// 8.Enum
const RED = "Red";
const BLUE = "Blue";

enum colors {
    RED = 'Red',
    BLUE = 'Blue',
    GREEN = 'Green'
}
console.log(colors.RED)

//9.objects

type Car = {
    name: string,
    price: number
}

let car: Car = {
    name: 'Tesla',
    price: 200000
}
car.name = 'Audi'

// 10.Type Assertion
let username: unknown = 'Naveen';
let userId: number = <number>username;
let userNames: string = <string>username; // or
let firstname: string = username as string;

// 11.null
let abc:null = null;

// 12.undefined
let noValue: undefined = undefined



//================== B.ADVANCED TYPESCRIPT TYPES ===============

// 1. functions

function sum(a:number, b:number, c?:number):number{
    return a + b;
}
sum(10, 20)
// we are returning number so we are given type number ():number

function log(message: string):void{
    console.log(message)
}
log('Hello world')
// we are not returning anything so we are giving type void ():void

function error():never{
    throw new Error("Network Error")
}
// it does not return or print, throws error and never end, so we are giving never ():never


// 2. interfaces vs custom types

interface MobileInterface{
    title: string
    price: number
}

let mobile = {
    title: 'Redmi',
    price: 20000
}

// interface with functions

interface SumFunction{
    (a:number, b: number, c?:number):number
}

let addition: SumFunction = (a:number, b:number, c?:number) => a + b
let substrac: SumFunction = (a:number, b:number, c?:number) => a - b

// custom types

type MobileType = {
    name: string
    age: number
}

let user2: MobileType = {
    name: 'Naveen',
    age: 20
}

type stringType = string | number;
let n1: stringType = 29
let n2: stringType = 'praveen'

// 3. Unknown vs Any
let userage: unknown = 10;
let userage2: number = <number>userage;

let userage3: any = 20;
let userage4: string = userage3;

// 4. class

class Person{
    private name: string
    protected age: number
    public profession: string
    constructor(name:string, age:number, profession: string){
        this.name = name;
        this.age = age;
        this.profession = profession
    }
}

class Person2 extends Person{
    city: number
    constructor(name:string, age:number, profession: string, city: number){
        super(name, age, profession)
        this.city = city
    }
    changeAge(age:number){
        this.age = age;
    }
}

let p1 = new Person('Praveen', 28, 'React Dev');
let p2 = new Person2('Naveen', 30, 'Angular', 39)

// interfaces
interface HumanInterface{
    name: string
    age: number
    profession?: string
}

class Human implements HumanInterface{
      constructor(public name:string, public age: number, public profession:string){}
}

class Naveen extends Human{
    city: number
    constructor(name:string, age: number, profession:string, city: number){
        super(name, age, profession);
        this.city = city
    }
    changeAge(age:number){
        this.age = age;
    }
}

let vinod = new Human('Vinod', 20, 'Salesforce');
let naveen = new Naveen('Naveen', 20, 'React js', 20)


// 5. Generics

function createItems<Type>(items:Type[]):Type[]{
    return new Array().concat(items)
}
let stringArray = createItems<number>([1, 2, 3])
let numberArray = createItems<string>(['Praveen', 'Naveen'])
