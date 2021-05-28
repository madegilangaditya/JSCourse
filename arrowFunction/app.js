// Regular function
// const sayHello = function() {
//     console.log('Hello')
// }

// function with arrow
// const sayHello = () =>{
//     console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Old Style function
// const sayHello = function(){
//     return 'Hello';
// }

// Return object
// const sayHello = () => ({msg:'Hello'});

// single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'John');

const users = ['Nathan','John', 'Williams'];

// Regular way
// const nameLengths = users.map(function(name){
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) =>{
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);