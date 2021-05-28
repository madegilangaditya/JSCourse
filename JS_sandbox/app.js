let val;

// number to string
val = String(5);
val = String(4+4);
// bool to string
val = String(true);
// date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.31');



// output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));


// coersion
const val1 = String('5');
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);


/*Numbers and Math Object*/
const num1 = 100;
const num2 = 50;
let numVal;

// simple math with number
numVal = num1 + num2;
numVal = num1 * num2;
numVal = num1 - num2;
numVal = num1 / num2;
numVal = num1 % num2;

// Math Object
numVal = Math.PI;
numVal = Math.E;
numVal = Math.round(2.4);
numVal = Math.ceil(2.4);
numVal = Math.floor(2.8);
numVal = Math.sqrt(64);
numVal = Math.abs(-3);
numVal = Math.pow(8, 2);
numVal = Math.min(2,33,4,1,55,6,3,-2);
numVal = Math.max(2,33,4,1,55,6,3,-2);
numVal = Math.random();

numVal = Math.floor(Math.random() * 20 + 1);

console.log(numVal);


/* String Methods & Concatenation*/ 

const firstName = 'Williams';
const lastName = 'Johnson';
const age = 36;
const str = 'Helllo my name is Gilang';
const tags = 'Web Developemt,Web Design,Youtuber';

let stringVal;

stringVal = firstName + lastName;

// concatenation
stringVal = firstName + ' ' + lastName;

// Append
stringVal = 'Gilang ';
stringVal += 'Aditya';

stringVal = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
stringVal = 'That\'s awesome, I can\'t wait';

// Length
stringVal = firstName.length;

// concat()
stringVal = firstName.concat(' ', lastName)

// Change case
stringVal = firstName.toUpperCase();
stringVal = firstName.toLowerCase();

stringVal = firstName[4];

// indexOf()
stringVal = firstName.indexOf('l');
stringVal = firstName.lastIndexOf('l');

// charAt()
stringVal = firstName.charAt('2');
// get last char
stringVal = firstName.charAt(firstName.length - 1);

// substring()
stringVal = firstName.substring(0, 4);

// slice()
stringVal = firstName.slice(0,4);
stringVal = firstName.slice(-3);

// split
stringVal = str.split(' ');
stringVal = tags.split(',');

// replace
stringVal = str.replace('Gilang', 'Aditya')

// includes()
stringVal = str.includes('foo');


console.log(stringVal);


/* Section 12 Template String*/ 
const name1 = 'John';
const age1 = 28;
const job1 = 'Web Developer';
const city1 = 'Miami';
let htmlContent;

function hello(){
    return 'hello';
}

// wihtout template string
htmlContent = '<ul><li>Name: ' + name1 + '</li><li>Age: ' + age1 +'</li><li>Job:' + job1 + ' </li><li>City: ' + city1 + '</li><ul>';

// with Template string
htmlContent =`
    <ul>
        <li>Name: ${name1}</li>
        <li>Age: ${age1}</li>
        <li>Job: ${job1}</li>
        <li>City: ${city1}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age1 >30 ? 'Over 30' : 'Under 30'}</li>
    </ul>`;

//document.body.innerHTML = htmlContent;

/* Section 13 Arrays */
const arrNumbers = [45,56,33,23,44,36,5];
const arrNumbers2 = new Array(22,45,33,76,54);
const fruit = ['Banana', 'Apple', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let arrVal;

// Get array length
arrVal = arrNumbers.length;
// Check if is array
arrVal = Array.isArray(arrNumbers);
// Get single value
arrVal = arrNumbers[3];
arrVal = arrNumbers[0];
// Insert into array
arrNumbers[2] = 100;
// Find index of value
arrVal = arrNumbers.indexOf(100);

// // MUTATING ARRAYS
// // Add on to end
// arrNumbers.push(250);
// // Add on to front
// arrNumbers.unshift(120);
// // Take off from end
// arrNumbers.pop();
// // Take off from front
// arrNumbers.shift();
// // Splice values
// arrNumbers.splice(1,3);
// // Reverse
// arrNumbers.reverse();

// Concatenate array
arrVal = arrNumbers.concat(arrNumbers2);

// Sorting arrays
arrVal = fruit.sort();
arrVal = arrNumbers.sort();

// Use the "compare function"
arrVal = arrNumbers.sort(function(x,y){
    return x-y;
});

// Reverse sort
arrVal = arrNumbers.sort(function(x,y){
    return y-x;
});

// Find
function over50(num){
    return num > 50;
}

arrVal = arrNumbers.find(over50);

console.log(arrNumbers);
console.log(arrVal);

/* Section 14 Object Literals */
const obPerson = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address:{
        city:'Miami',
        state:'FL'
    },
    getBirhtYear: function(){
        return 2020 - this.age;
    }
}

let obVal;

obVal = obPerson;
// Get specific value
obVal = obPerson.firstName;
obVal = obPerson['lastName'];
obVal = obPerson.age;
obVal = obPerson.hobbies[1];
obVal = obPerson.address.state;
obVal = obPerson.address['city'];
obVal = obPerson.getBirhtYear();

console.log(obVal);

// Object array
const obPeople = [
    {name: 'John', age:30},
    {name: 'Mike', age:23},
    {name: 'Nancy', age:40}
]

for(let i = 0; i<obPeople.length; i++){
    console.log(obPeople[i].name);
}

/* Section 15 Date and times*/
let dateVal;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('maret 10 1981');
birthday = new Date('9/10/1981')

dateVal = birthday;
dateVal = today.getMonth();
dateVal = today.getDate();
dateVal = today.getDay();
dateVal = today.getFullYear();
dateVal = today.getHours();
dateVal = today.getMinutes();
dateVal = today.getSeconds();
dateVal = today.getMilliseconds();
dateVal = today.getTime();

birthday.setMonth(11);
birthday.setDate(12);
birthday.setFullYear(2012);
birthday.setHours(12);
birthday.setMinutes(12);
birthday.setSeconds(12);

console.log(birthday);

/* Section 16 if Statements & comaparison Operators */

// if(something){
//     do something
// }else {
//     do something else
// }

const ifId = 100;

// // Equal To
// if(ifId == 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// // Not Equal To
// if(ifId != 101){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// // Equal To Value & Type
// if(ifId === 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// // Not Equal To Value & Type
// if(ifId !== 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// // Test if undefined
// if (typeof ifId !== 'undefined'){
//     console.log(`The ID is ${ifId}`);
// } else{
//     console.log('No ID');
// }

// Greater or Less than
// if(ifId >= 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

//  If Else IF
const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// }else if(color === 'blue') {
//     console.log('Color is blue');
// }else {
//     console.log('Color is not red or blue');
// }

// Logical Operators
const ifName = 'Steve';
const ifAge = 16;

// AND &&
if(ifAge > 0 && ifAge < 12){
    console.log(`${ifName} is a child`);
}else if(ifAge >= 13 && ifAge <= 19){
    console.log(`${ifName} is a teenager`);
}else{
    console.log(`${ifName} is an adult`);
}

//  OR ||
if(ifAge < 16 || ifAge > 65){
    console.log(`${ifName} can not run in race`);
}else{
    console.log(`${ifName} is registered for the race`);
}

// Ternary Operator
console.log(ifId === 100 ? 'Correct' : 'Incorrect');

// Without Braces
if(ifId === 100)
    console.log('Correct');
else   
    console.log(`Incorrect`);


/* Section 17 Switches */
const swColor = 'yellow';

switch (swColor) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);


/* Section 18 Function Declaration & Expressions */ 

// FUNCTION DECLARATIONS

function greet(funFirstName = 'John', funLastName = 'Doe'){
    // avoid undefined es5
    // if(typeof funFirstName === 'undefined'){funFirstName = 'John'}
    // if(typeof funLastName === 'undefined'){funLastName = 'Doe'}
    
    // console.log('Hello');
    return 'Hello ' + funFirstName + ' ' + funLastName;
}

// console.log(greet());

//  FUNCTION EXPRESSIONS

const square = function (funX = 3){
    return funX * funX;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(funName){
//     console.log('Hello ' + funName);
// })('brand');

// PROPERTY METHODS

const funTodo = {
    add: function(){
        console.log('add todo..');
    },
    edit: function(funId){
        console.log(`Edit todo ${funId}`);
    }
}

funTodo.delete = function(){
    console.log('Delete todo..');
}

funTodo.add();
funTodo.edit(22);
funTodo.delete();

/* Section 19 General Loops */

// FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         // skip looping when i = 2
//         continue;
//     }

//     // stop the looping using break
//     if(i === 5){
//         console.log('Stop the loop')
//         break;
//     }
//     console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number '+ i);
//     i++;
// }

// DO WHILE

// let i = 19;

// do{
//     console.log('Number '+i);
//     i++;
// }

// while(i < 10);

// LOOPING THROUGH ARRAYS VALUE

const lopCars = ['Ford', 'Chevrolet', 'Honda', 'Toyota'];

// for(let i = 0; i < lopCars.length; i++){
//     console.log(lopCars[i]);
// }

// FOREACH LOOP
// lopCars.forEach(function(lopcar, index, array){
//     console.log(`${index} : ${lopcar}`);
//     console.log(array);
// });

// MAP
// const lopUsers = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];

// const lopIds = lopUsers.map(function(lopUser) {
//     return lopUser.id;
// });

// console.log(lopIds);

// OBJECT LOOPING USING FOR IN LOOP
const lopUser = {
    firsName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in lopUser){
    console.log(`${x} : ${lopUser[x]}`);
}

/* Section 20 A Look At The Window Object */

// WINDOWS METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const winInput = prompt();
// alert(winInput);

// Confirm
// if(confirm('Are You Sure?')){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

// Get height and Width
let winVal;

// Outer height and Width
winVal = window.outerHeight;
winVal = window.outerWidth;

// Inner height and Width
winVal = window.innerHeight;
winVal = window.innerWidth;

// Scroll Points
winVal = window.scrollY;
winVal = window.scrollX;

// Location Object
winVal = window.location;
winVal = window.location.hostname;
winVal = window.location.port;
winVal = window.location.href;
winVal = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
winVal = window.navigator;
winVal = window.navigator.appName;
winVal = window.navigator.appVersion;
winVal = window.navigator.userAgent;
winVal = window.navigator.platform;
winVal = window.navigator.vendor;
winVal = window.navigator.language;

console.log(winVal);

/* Section 21 Block Scope With let & const */

// Global Scope
var blA = 1;
let blB = 2;
const blC = 3;

// function test(){
//     var blA = 4;
//     let blB = 5;
//     const blC = 6
//     console.log('Function Scope: ', blA, blB, blC);
// }

// test();

// if(true){
//     // Block Scope
//     var blA = 4;
//     let blB = 5;
//     const blC = 6
//     console.log('If Scope: ', blA, blB, blC);
// }

// for(var blA = 1; blA < 10; blA++) {
//     console.log(`Loop:${blA}`);
// }


console.log('Global Scope: ', blA, blB, blC);