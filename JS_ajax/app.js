/** Section 59 XHR Object Methods & Working with text */
// document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create an XHr Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinner/loader
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Older syntax
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Request error..')
  }

  xhr.send(); 
  
  // readyState Values
  // 0: Request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: OK
  // 403 : Forbidden
  // 404 : Not Found
}

/** Section 60 Working with ajax & JSON */

// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer
function loadCustomer(e){
  const xhr2 = new XMLHttpRequest();

  xhr2.open('GET', 'customer.json', true);

  xhr2.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      const output =`
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr2.send();
}

// Load Customers
function loadCustomers(e){
  const xhr2 = new XMLHttpRequest();

  xhr2.open('GET', 'customers.json', true);

  xhr2.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output +=`
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      })
      

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr2.send();
}

/** Section 61 Data from External API - Chuck Noris Joke */
// document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

  const number = document.querySelector('input[type="number"]').value;
  
  const xhr3 = new XMLHttpRequest();

  xhr3.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr3.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      let output ='';

      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;

    }
  }

  xhr3.send();

  e.preventDefault();
}

/** Section 63 Callback Function  */
// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post tow'}
// ];

// // Syncrounush way (dengan reload)
// // function createPost(post){
// //   setTimeout(function(){
// //     posts.push(post);
// //   }, 2000);
// // }

// // function getPosts(){
// //   setTimeout(function(){
// //     let output = '';
// //     posts.forEach(function(post){
// //       output += `<li>${post.title}</li>`;
// //     });
// //     document.body.innerHTML = output;
// //   }, 1000);
// // }

// // createPost({title:'Post three', body:'This is post three'});

// // getPosts();

// // aschyncrounush way (tanpa reload) pake callback()
// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title:'Post three', body:'This is post three'}, getPosts);

/** Section 66 ES6 Promises  */
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post tow'}
];

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      const error = false;

      if(!error){
        resolve();
      }else{
        reject('error: Something went wrong');
      }
      
    }, 2000);
  });
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// createPost({title:'Post three', body:'This is post three'})
// .then(getPosts)
// .catch(function(err){
//   console.log(err);
// });

/** Section 71 Async and Await */
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hellow'), 1000);
//   });
//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Somenthing went wrong'));
//   }  
// }

// myFunc()
// .then(res => console.log(res));

async function getUsers(){
  // Await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();
  
  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));