/* Section 44 Constructor and 'this' keyword */

// // Person constructor
// function Person(name, dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

// const brad = new Person('Brad', '9-10-1991');
// console.log(brad.calculateAge());

/* Section 45 Built in Constructors */

// Primitive Value String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y){
    return x+y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {name: "john"};
const john2 = new Object({name: "John"});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);

/* Section 46 Prototypes Explained */

// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('SMith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

/* Section 47 Prototypal Inheritance */

// Person Constructor
function ProPerson(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
ProPerson.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const proPerson = new ProPerson('john', 'doe');

// console.log(proPerson.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
    // ngambil property yang sama dari object Person
    ProPerson.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(ProPerson.prototype);

// Make customer prototype return Customer()
Customer.prototype.cunstructor = Customer;

// Create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// Customer Greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1);
console.log(customer1.greeting());

/* Section 48 Using Object.create */

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary2 = Object.create(personPrototypes);
mary2.firstName = 'Mary';
mary2.lastName = 'Williams';
mary2.age = 40;

mary2.getsMarried('Thompson');
console.log(mary2.greeting());

const brad2 = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(brad2);

console.log(brad2.greeting());

/* Section 49 ES6 Classes */
class Person2 {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`; 
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMaried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const mary3 = new Person2('Mary', 'Williams', '11-13-1988');

mary3.getsMaried('johnson');
console.log(mary3.calculateAge());

console.log(Person2.addNumbers(1,4));

/* Section 50 Sub Classes */

class Person3{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}`;
    }
}

class Customer2 extends Person3{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john3 = new Customer2('John', 'Doe', '555-555-5555', 'Standard');
console.log(john3.greeting());
console.log(Customer2.getMembershipCost());