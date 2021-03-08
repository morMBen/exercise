class Room {
    //1
    constructor(roomId, level, amount) {
        this.roomId = roomId;
        this.level = level;
        this.amount = amount;
        this.isFree = true;
    }
    //2
    checkNumOfP(num) {
        if (num > this.amount) {
            return false;
        } else {
            this.amount = num;
            this.isFree = false;
        }
    }
    print() {
        console.log(`roomId: ${this.roomId}
level: ${this.level}
amount: ${this.amount}
isFree: ${this.isFree}`)
    }
}
// r1.print();

class Hotel {
    //1
    constructor() {
        this.roomList = [];
    }
    //2
    addRoom(room) {
        let fleg = true;
        if (!this.roomList[0]) {
            this.roomList.push(room);
            return true;
        } else {
            for (let i = 0; i < this.roomList.length; i++) {
                if (this.roomList[i].roomId === room.roomId) {
                    return false;
                }
            }
            this.roomList.push(room);
            return true;
        }
    }
    //3
    addNewRoom(roomId, level, amount) {
        return this.addRoom(new Room(roomId, level, amount));

    }
    //4
    removeRoom(roomI) {
        let temp;
        for (let i = 0; i < this.roomList.length; i++) {
            if (this.roomList[i].roomId === roomI && this.roomList[i].isFree === true) {
                console.log(this.roomList[i].roomId)
                this.roomList.splice(i, 1);
            }
        }
    }
    //5
    checkFreeRooms(am) {
        let counter = 0;
        for (let i = 0; i < this.roomList.length; i++) {
            if (this.roomList[i].amount >= am && this.roomList[i].isFree) {
                counter++;
            }
        }
        return counter;
    }
    checkIn(ro, am) {
        let result = false;
        this.roomList.forEach(e => {
            if (e.roomId === ro && e.amount >= am && e.isFree) {
                e.isFree = false;
                result = true;
            }
        })
        return result;
    }
    highRoomFree() {
        let highestFlore = this.roomList[0].level;
        let freeHighRooms = [this.roomList[0]];
        for (let i = 0; i < this.roomList.length; i++) {
            if (this.roomList[i].level > highestFlore) {
                freeHighRooms = [this.roomList[i]];
                highestFlore = this.roomList[i].level;
            } else if (this.roomList[i].level === highestFlore) {
                freeHighRooms.push(this.roomList[i]);
            }
        }
        return freeHighRooms.sort((a, b) => b.amount - a.amount);
    }
    getAllRooms(isF) {
        return this.roomList.filter((e => {
            return e.isFree === isF;
        })).sort((a, b) => a.roomId - b.roomId)
    }
}

let r8 = new Room(125, 2, 3);
let r5 = new Room(116, 2, 3);
let r3 = new Room(115, 3, 5);
let r4 = new Room(118, 4, 6);
let r2 = new Room(119, 2, 3);
let r6 = new Room(120, 2, 2);
let r7 = new Room(121, 4, 5);
let r1 = new Room(122, 4, 7);
let r9 = new Room(123, 4, 5);
let r10 = new Room(124, 4, 8);

let h1 = new Hotel();
// console.log(h1);
h1.addRoom(r2);
h1.addRoom(r2);
h1.addRoom(r3);
h1.addRoom(r4);
h1.addRoom(r5);
h1.addRoom(r6);
h1.addRoom(r7);
h1.addRoom(r8);
h1.addRoom(r9);
h1.addRoom(r10);
// console.log(h1);
// console.log(h1.addNewRoom(119, 2, 5));
// h1.removeRoom(5);
// console.log(h1.checkFreeRooms(5));
h1.checkIn(119, 3);
h1.checkIn(121, 3);
h1.checkIn(125, 3);
// console.log(h1);
console.log(h1.getAllRooms(false));
