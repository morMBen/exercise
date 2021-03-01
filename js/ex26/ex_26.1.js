//Q 1 - point to the window witch is the global scope of the page.

//Q 2a: the this will point to the global scope of myObj and will return only Hello. because the greet is an arrow function  so it will set the this to the mama scope wich is the function myObj. 
//Q 2b: 
const myObj = {
    name: "Timmy",
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
}; myObj.greet();

//Q 3: that will point on the window object because the this refers to the object that point on the function.

//Q 4: that will point on the window object because the this refers to the object that the object that point on the function is in and the window is the higher scope of the page.

