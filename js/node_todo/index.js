// Lets create a simple todo app with no UI.
// Create an empty array which you will add your todo items.
const toDo = [];
// Create simple functions that will do the following:
// * Add item (id, task name, isCompleted)
function AddItem(id, taskName, isCompleted = false) {
    toDo.push({
        id,
        taskName,
        isCompleted,
    })
}
AddItem(5, 'buy');
AddItem(12, 'work');
AddItem(50, 'clean');
// * Delete item
function deleteItemById(taskId) {
    if (typeof taskId === 'number') {
        let index = toDo.findIndex(e => e.id === taskId)
        if (index === -1) {
            return false;
        } else {
            toDo.splice(index, 1);
            return true;
        }
    }
    return false;
}
function deleteItemByTaskName(taskN) {
    console.log(typeof taskN)
    if (typeof taskN === 'string') {
        let index = toDo.findIndex(e => e.taskName.toLowerCase() === taskN.toLowerCase())
        if (index === -1) {
            return false;
        } else {
            toDo.splice(index, 1);
            return true;
        }
    }
    return false;
}
// * Mark as done
function markAsDone(Id) {
    if (findTaskIndexById(Id)) {
        // console.log(findTaskIndexById(Id));
        findTaskIndexById(Id).isCompleted = true;
    }
}
// * Unmark as done
function markAsUndone(Id) {
    if (findTaskIndexById(Id)) {
        // console.log(findTaskIndexById(Id));
        findTaskIndexById(Id).isCompleted = false;
    }
}
// console.log(toDo);
// console.log(deleteItemById(12));
// console.log(deleteItemByTaskName('buy'));

markAsDone(5);
markAsDone(12);
markAsUndone(5);
console.log(toDo);


// * List – returns all the items with their status. Done items
// should be at the bottom of the list.
function list() {
    return toDo.sort((a, b) => a.isCompleted - b.isCompleted);
}

console.log(list());

//utilitis
function findTaskIndexById(taskId) {
    if (typeof taskId === 'number') {
        let index = toDo.findIndex(e => e.id === taskId)
        if (index === -1) {
            return false;
        }
        return toDo[index];
    }
}

