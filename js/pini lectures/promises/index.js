//! Synchronous vs Asynchronous
// console.log("doing some magic");
// console.log("doing some more magic");

//!Blocking
// console.log("doing some code");
// alert("STOP EVERYTHING AND BLOCK THE CODE");
// console.log("doing some more code");

//! Event loop to the rescue!

// console.log("doing some amazing code");
// setTimeout(() => {
//   console.log("getting some data from the server,ill be back soon");
// }, 1000);

// console.log("doing some more amazing code");

//!WEB API's
//* DOM(Document) ---> window.document
//* setTimeOut  ---> window.setTimeOut
//* setInterval ---> window.setinterval
//* Ajax Call --> window.XMLhTTPrequest

//!Call Stack
//* tracks our code line by line

//! Memory Heap
//* We need to store our data osmewhere (variables, objects etc)

//! Callback queue
//* We need a plce to queueu our ashcronous code, once the call stack is empty, yalla go to the call stack and get executed!

//!Event Loop
//* We need a middle man for our callback queueu to get pushed to the call stack.

//!Promises
//* A container for a future value

//! A promise can be in 3 states
//* pending ---> async task ---> settled
//* fulfilled
//* rejected

//! A promise object gets a callback function it has 2 parameters
//* resolve
//* reject

//! When a promise is settled we can get their value from:
//* .then if it was fulfilled
//* .catch if the promise was rejected

//! The 3 states of promises

//*fulfilled and rejected

// const myPromise = new Promise((resolve, reject) => {
//   const fetchingData = false;
//   if (fetchingData) {
//     resolve("Got the data");
//   } else {
//     reject("Didn't get the data, something went wrong");
//   }
// });

// console.log(myPromise);

//*pending

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const fetchingData = true;
//     if (fetchingData) {
//       resolve("Got the data");
//     } else {
//       reject("Didn't get the data, something went wrong");
//     }
//   }, 1000);
// });
// console.log(myPromise2);

//! Consume my Promise

// myPromise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Promises returning from function

// const myFuncPromise = (name, bool) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fetchingData = bool;
//       if (fetchingData) {
//         resolve(`Got the data ${name}`);
//       } else {
//         reject(`Didn't get the data, something went wrong ${name}`);
//       }
//     }, 1000);
//   });
// };
// myFuncPromise("Pini", false)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! Fetching data returns also a promise
// const getCountryData = (nameCountry) => {
//   return fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`);
// };

// getCountryData("Finland")
//   .then((data) => {
//     return data.json();
//   })
//   .then((response) => {
//     console.log(response[0].borders);
//     const target = document.body;
//     const el = document.createElement("h4");
//     el.textContent = response[0].borders;
//     target.appendChild(el);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
