const inputNewTast = document.querySelector('.new_task');
const inputImportance = document.querySelector('.importance');
const inputImportanceHigh = document.querySelector('#high');
const form = document.querySelector('form');
const taskDiv = document.querySelector('.task_Ulist');
const downLoad = document.querySelector('.down_load');

class Task {
    static taskId = 0;
    constructor(task = '', priority1t3 = 1, isCompleted = false) {
        const date = new Date;
        this.task = task;
        this.isCompleted = isCompleted;
        this.date = getStingDate(date);
        this.time = date.toLocaleTimeString('it-IT');

        this.id = ++Task.taskId;
        this.priority = priority1t3 === 'high' ? 1 : priority1t3 === 'medium' ? 2 : 3;
        this.tillDdate;
        this.tillTime;
    }
    getTask() {
        return this.task;
    }
    getId() {
        return this.id;
    }
    getDate() {
        return this.date;
    }
    getTime() {
        return this.time;
    }
    getStatus() {
        return this.isCompleted;
    }
    switchStatus() {
        this.isCompleted === true ? this.isCompleted = false : this.isCompleted = true;
    }
    setDate(date) {
        this.date = date;
    }
    setTime(time) {
        this.time = time;
    }
    setTask(string) {
        this.task = string;
    }
    setEndTime(date, time) {
        this.tillTime = time;
        this.tillDate = date;
    }
    setPriority(oneToThree) {
        let temp = oneToThree === 'high' ? 1 : oneToThree === 'medium' ? 2 : 3;
        this.priority = temp;
    }
}

class ToDo {
    constructor(list = []) {
        this.list = list;
    }
    addTask(task) {
        this.list.push(task);
    }
    getTaskById(id) {
        return this.GetIndex(id) === 0 || this.GetIndex(id) ? this.list[this.GetIndex(id)] : false;
    }
    setPriorityById(id, oneToThree) {
        return this.getTaskById(id).setPriority(oneToThree);
    }
    deleteTask(id) {
        return this.GetIndex(id) === 0 || this.GetIndex(id) ? this.list.splice(this.GetIndex(id), 1) : false;
    }
    setEndTime(id, date, time) {
        return this.getTaskById(id).setEndTime(date, time) || false;
    }
    //utill
    GetIndex(id) {
        let index = this.list.findIndex(e => e.id === id);
        if (index === -1) {
            return false;
        }
        return index;
    }
    sortByPriorityU() {
        let temp = this.list.sort((a, b) => {
            return a.priority - b.priority;
        })
        return temp;
    }
    sortByPriorityD() {
        let temp = this.list.sort((a, b) => {
            return b.priority - a.priority;
        })
        return temp;
    }
    sortByStatusD() {
        let temp = [];
        this.list.forEach(e => {
            e.getStatus() ? temp.push(e) : temp.unshift(e);
        })
        return temp;
    }
    sortByStatusU() {
        let temp = [];
        this.list.forEach(e => {
            e.getStatus() ? temp.unshift(e) : temp.push(e);
        })
        return temp;
    }
    setDownLoad(arr) {
        this.list = arr;
    }
}


let td = new ToDo();
// td.addTask(new Task('do'))
getNewInputs();
edit();
// getLocal();


// console.log(JSON.parse(localStorage.getItem('todoList')))



function getNewInputs() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        td.addTask(new Task(inputNewTast.value, inputImportance.value));
        document.querySelector(`.task_Ulist`).innerHTML += setInnerLi(td.list[td.list.length - 1]);
        inputImportanceHigh.selected = 'true';
        // td.list[td.list.length - 1].setPriority();
        resetPage();
        // console.log(td)
    })
}
function edit() {
    taskDiv.addEventListener('click', (e) => {
        switch (e.target.classList[0]) {
            case ('task_list_undone'):
                td.getTaskById(Number(e.target.parentElement.id)).switchStatus();
                e.target.classList.remove('task_list_undone');
                e.target.classList.add('task_list_done');
                resetPage();
                break;
            case ('task_list_done'):
                td.getTaskById(Number(e.target.parentElement.id)).switchStatus();
                e.target.classList.add('task_list_undone');
                e.target.classList.remove('task_list_done');
                resetPage();
                // console.log(td)
                break;
            case ('task_list_delete'):
                td.deleteTask(Number(e.target.parentElement.id));
                e.target.parentElement.remove();
                resetPage();
                // console.log(td.sortByStatus());
                // console.log(td.sortByPriority())
                break;
            case ('sort_statusD'):
                let sortedD = td.sortByStatusD();
                let tempD = setTopList('U');
                for (let i = 0; i < td.list.length; i++) {
                    tempD += setInnerLi(sortedD[i]);
                }
                taskDiv.innerHTML = tempD;
                break;
            case ('sort_statusU'):
                let sortedU = td.sortByStatusU();
                let tempU = setTopList('D');
                for (let i = 0; i < td.list.length; i++) {
                    tempU += setInnerLi(sortedU[i]);
                }
                taskDiv.innerHTML = tempU;
                break;
            case ('sort_priorityU'):
                let tempPriority = setTopList('U', 'D');
                for (let i = 0; i < td.list.length; i++) {
                    tempPriority += setInnerLi(td.sortByPriorityU()[i]);
                }
                taskDiv.innerHTML = tempPriority;
                break;
            case ('sort_priorityD'):
                let tempPriority2 = setTopList('U', 'U');
                for (let i = 0; i < td.list.length; i++) {
                    tempPriority2 += setInnerLi(td.sortByPriorityD()[i]);
                }
                taskDiv.innerHTML = tempPriority2;
                break;
        }

    })
}

function onLoad() {
    let tempList = JSON.parse(localStorage.getItem('todoList'));
    taskDiv.innerHTML = setTopList();
    for (let i = 0; i < tempList.list.length; i++) {
        taskDiv.innerHTML += setInnerLi(tempList.list[i]);
    }
    td.setDownLoad(tempList.list);
    console.log(td.list);
}


//utilites 
function setInnerLi(task) {
    return `
<li class="task_list" id="${task.id}">
<h4 class="task_list_text">${task.id}</h4>
<h4 class="task_list_text">${task.task}</h4>
<h4 class="task_list_text">${task.priority}</h4>
<h4 class="task_list_text">${task.date}</h4>
<h4 class="task_list_text">${task.time}</h4>
<button class="task_list_${task.isCompleted ? 'done">' : 'undone">'}</button>
<button class="task_list_delete">delete</button>
</li>
`;
}

function setTopList(sort = 'U', prio = 'U') {
    return `<li class="top_task_list">
<h4>Id</h4>
<h4>Task</h4>
<h4 class="sort_priority${prio} cursorP">Priority${prio === 'U' ? '↑' : '↓'}</h4>
<h4 class="sort_date">Date</h4>
<h4>Time</h4>
<h4 class="sort_status${sort} cursorP">Status${sort === 'U' ? '↑' : '↓'}</h4>
</li>`
}
function getStingDate(today) {
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = `${mm}/${dd}/${yyyy}`;
    return today;
}

function resetPage() {
    inputImportanceHigh.selected = 'true';
    inputNewTast.focus();
    inputNewTast.value = '';
    localStorage.setItem('todoList', JSON.stringify(td));
}