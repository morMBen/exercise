const chalk = require('chalk');
const fs = require('fs')


const addNewUser = (id, name, email) => {
    const users = loadUsers();
    const duplicateUsers = users.filter(u => u.id === id)
    const duplicateUser = users.find(u => u.id === id)
    if (!duplicateUser) {
        users.push({
            id,
            name,
            email
        })
        saveUser(users)
    } else {
        console.log(chalk.red.inverse('The user is all ready written!'))
    }
    console.log(id)
    console.log(name)
    console.log(email)
}



const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveUser = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON)
}

const findUser = (id) => {
    const users = loadUsers().find(u => u.id === id);
    if (users) {
        return users;
    } else {
        console.log(chalk.red.inverse('User not exist'))
        return false
    }
}

const readUser = (id) => {
    const res = findUser(id);
    if (res) {
        console.log(res)
    }
}

const updateUser = (id, name, email) => {
    const res = findUser(id);
    if (res) {
        const users = loadUsers();
        const cleanArr = users.splice(users.indexOf(u => u.id), 1);
        cleanArr.push({ id, name, email })
        saveUser(cleanArr);
    }
}

const deleteUser = (id) => {
    const res = findUser(id);
    if (res) {
        const users = loadUsers();
        const cleanArr = users.splice(users.indexOf(u => u.id), 1);
        saveUser(cleanArr);
    }
}

module.exports = {
    addNewUser,
    readUser,
    updateUser,
    deleteUser
}

