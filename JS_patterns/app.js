/** Section 95 Module & Revealing Module Patterns */

// Basic Structure
// (function(){
//     // Declare Private vars and functions

//     return {
//         // Declare Public var and function
//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function(){
//     let text = 'Hellow World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();

// // cannot call the variable from outside module
// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...');
    }

    function get(id) {
        return data.find(item =>{
            return item.id === id;
        });
    }
    
    return {
        add: add,
        get:get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));
