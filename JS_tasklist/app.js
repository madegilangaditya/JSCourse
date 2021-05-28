/* Section 23 Examining The Document Object */

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});

console.log(val);

/* Section 24 DOM Selectors for Single Elements */

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red;">Task List</span>';

// // document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

/* Section 25 DOM Selectors For Multiple Elements */

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

/* Section 26 Traversing The DOM */

let traVal;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

traVal = listItem;
traVal = list;

// Get child nodes
traVal = list.childNodes;
traVal = list.childNodes[0];
traVal = list.childNodes[0].nodeName;
traVal = list.childNodes[0].nodeType;

// NODE TYPE VALUE
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
traVal = list.children;
traVal = list.children[1];
list.children[1].textContent = 'Hello';

// Children of Children
list.children[3].children[0].id = 'test-link';
traVal = list.children[3].children[0];

// First Child
traVal = list.firstChild;
traVal = list.firstElementChild;

// Last Child
traVal = list.lastChild;
traVal = list.lastElementChild;

// Count Child Element
traVal = list.childElementCount;

// Get Parent Node
traVal = listItem.parentNode;
traVal = listItem.parentElement;
traVal = listItem.parentElement.parentElement;

// Get next Siblings
traVal = listItem.nextSibling;
traVal = listItem.nextElementSibling.nextElementSibling;

// Get Previous Siblings
traVal = listItem.previousSibling;
traVal = listItem.previousElementSibling;

console.log(traVal);

/* Section 27 Creating Element DOM */

// Create element
const crLi = document.createElement('li');

// Add Class
crLi.className = 'collection-item';

// Add id
crLi.id = 'new-item';

// Add attribute
crLi.setAttribute('title', 'New Item');

// Create text node and append
crLi.appendChild(document.createTextNode('Hello World'));

// Create new link element
const crLink = document.createElement('a');

// add classes
crLink.className = 'delete-item secondary-content';

// add icon HTML
crLink.innerHTML = '<i class = "fa fa-remove"></i>';

// Append link into li
crLi.appendChild(crLink);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(crLi);

console.log(crLi);

/* Section 28 Removing & Replacing Elements */

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add Id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const reLis = document.querySelectorAll('li');
const reList = document.querySelector('ul');

// Remove List Item
reLis[1].remove();

// Remove child Element
reList.removeChild(reLis[3]);

// CLASSES AND ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const reLink = firstLi.children[0];

let reVal;

// Classes
reVal = reLink.className;
reVal = reLink.classList;
reVal = reLink.classList[0];
reLink.classList.add('test');
reLink.classList.remove('test');
reVal = reLink;

// Attributes
reVal = reLink.getAttribute('href');
// reVal = reLink.setAttribute('href', 'http://google.com');
reLink.setAttribute('title', 'Google');
reVal = reLink.hasAttribute('title');
reLink.removeAttribute('title');
reVal = reLink;

console.log(reVal);

/* Section 29 Event Listener & The Event Object */
// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello WOrld');

//     //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onTest);

function onTest(e){
    // console.log('Clicked');

    let evVal;

    evVal = e;

    // Event target Element
    evVal = e.target;
    evVal = e.target.id;
    evVal = e.target.className;
    evVal = e.target.classList;
    
    // Event Type
    evVal = e.type;

    // Timestamp
    evVal = e.timeStamp;

    // Coords event relative to the window
    evVal = e.clientY;
    evVal = e.clientX;

    // Coords event relative to the element
    evVal = e.offsetY;
    evVal = e.offsetX;

    console.log(evVal);
}

/* Section 30 Mouse Events */
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h2');

// // Click 
// clearBtn.addEventListener('click', runEvent);
// // double click
// clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouseenter
// card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// card.addEventListener('mouseleave', runEvent);
// // Mouseover
// card.addEventListener('mouseover', runEvent);
// // Mouseout
// card.addEventListener('mouseout', runEvent);
// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

/* Section 31 Keyboard & Input Events */
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h2');
// const select = document.querySelector('select');

// // Clear Input
// taskInput.value = '';

// // form.addEventListener('submit', inEvent);

// // Keydown
// taskInput.addEventListener('keydown', inEvent);
// // Keyup
// taskInput.addEventListener('keyup', inEvent);
// // Keypress
// taskInput.addEventListener('keypress', inEvent);
// // Focus
// taskInput.addEventListener('focus', inEvent);
// // blur
// taskInput.addEventListener('blur', inEvent);
// // Cut
// taskInput.addEventListener('cut', inEvent);
// // Paste
// taskInput.addEventListener('paste', inEvent);
// // Input
// taskInput.addEventListener('input', inEvent);
// // CHange use select input
// select.addEventListener('change', inEvent);



// function inEvent(e){
//     console.log(`EVENT TYPE: ${e.type}` );

//     console.log(e.target.value);

//     // heading.innerText = e.target.value;

//     // Get Input Value
//     // console.log(taskInput.value);

//     // e.preventDefault();
// }

/** Section 32 Event Bubbling & Delegation */

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', 
// function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', 
// function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', 
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', 
// function(){
//     console.log('col');
// });

// EVENT DELEGATION 

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete Item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete Item');
        e.target.parentElement.parentElement.remove();
    }
}

/* Section 33 Local & Session Storage */

// // Set Local Storage Item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // Set Session Storage Item
// sessionStorage.setItem('name', 'Bath');

// remove from local storage
// localStorage.removeItem('name');

// Get from storage
// const locName = localStorage.getItem('name');
// const locAge = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(locName, locAge);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task Saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});