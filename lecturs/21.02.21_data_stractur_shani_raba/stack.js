let stack = [];
let queue = [];

// 
stack.push(1);
//top => 1 => bottom
stack.push(2);
//top => 2 => 1 => bottom
stack.push(3);
//top => 3 => 2 => 1 => bottom
stack.push(4);
//top 4 => 3 => 2=> 1 => bottom
//

stack.pop()// now get the top item => 4
stack.pop()// now get the top item => 3

//
queue.push(1);
queue.push(2);
queue.push(3);

queue.shift();//
queue.shift();//
queue.shift();//
