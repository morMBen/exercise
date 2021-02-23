const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

//creat an orderd list
const orderdList = document.createElement('ol');
document.body.insertAdjacentElement("afterbegin", orderdList);

//set first and last name as an lists
users.forEach((el, index) => {
    const nameInList = document.createElement('li');
    orderdList.insertAdjacentElement("afterbegin", nameInList);
    nameInList.textContent = `${el.firstName} ${el.lastName}`;
})

//remove list style
const allLists = document.querySelector('ol').style;
allLists.listStyleType = 'none';

//creat costum data type for each list

const lists = document.querySelectorAll('li');
lists.forEach((el, index) => {

    el.dataset.id = users[index].id;
    console.log(el);
})