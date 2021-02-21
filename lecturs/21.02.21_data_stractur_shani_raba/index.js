class Node {
    constructor(el) {
        this.element = el;
        this.next = null;
        this.flag = true;
    }
}
class LinkedList {
    constructor() {
        this.head = null;

    }
    isEmpty() {
        return this.size === 0;
    }

    addLast(element) {
        let current;
        let node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        return temp;
    }


    draw() {
        let current = this.head;
        let output = 'head ->';
        while (current) {
            output += `${current.element} ->`
            current = current.next;
        }
        output += 'null';
        return output;
    }
    reverse() {
        let tempHead = this.head;
        let previous = null;
        let tempLast = this.getLast();
        while (tempHead) {
            let tempChain = tempHead.next;
            tempHead.next = previous;
            previous = tempHead;
            tempHead = tempChain;
        }
        this.head = tempLast;
        return previous;
    }
    makeTheListCircular() {
        this.getLast().next = this.head;
    }

    removeKNode(k) {
        let current = this.head;
        let prev = null;
        let counter = 1;
        while (counter < k && current.next) {
            prev = current;
            current = current.next;
            counter++;
        }
        prev.next = current.next;
        current.next = null;
    }
}


//initilize
let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.addLast(6);
console.log(linkedList);


// ---getFirst---
// console.log(linkedList.getFirst());


//---getLast---
// console.log(linkedList.getLast());


//---draw---
console.log(linkedList.draw());


//---reverse---
// linkedList.reverse();
// linkedList.draw();
// linkedList.draw();





//---removeKNode---
// linkedList.removeKNode(2);
// console.log(linkedList);





//---circularLinkedList---!!using flag at class Node
// const circularLinkedList = (list) => {
//     let temp = list.head;
//     temp.flag = false;
//     while (temp.next && temp.next.flag) {
//         temp = temp.next;
//         temp.flag = false;
//     }
//     return temp.next ? temp.next.flag ? false : true : false;
// }
// console.log(circularLinkedList(linkedList));
// linkedList.makeTheListCircular();
// console.log(circularLinkedList(linkedList));
// console.log(linkedList);




//---circularLinkedList---using fast and slow pointers
let circularLinkedList = (list) => {
    if (list.head.next === null || list.head.next === list.head) {
        return list.head.next ? true : false;
    }
    let slow = list.head;
    let fast = list.head.next;
    result = true;
    while (slow !== fast) {
        if (fast.next === null || fast.next.next === null) {
            return false;
        } else {
            fast = fast.next.next;
            slow = slow.next;
        }
    }
    return true;
}
console.log(`Do the list circular? ${circularLinkedList(linkedList)}`);
linkedList.makeTheListCircular(); // making the array circular
console.log(`Do the list circular? ${circularLinkedList(linkedList)}`);
console.log(linkedList);



