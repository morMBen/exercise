const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require('../middeleware/auth')

//find all users
router
    .get("/", async (req, res) => {
        //get all users
        try {
            const users = await userController.getUsers(req, res);
            // console.log(users)
            res.send(users)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })

    //using authentication
    .get("/me", auth, async (req, res) => {
        //get user profile
        try {
            // console.log(users)
            res.send(req.user)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })

    .get("/:id", (req, res) => {
        //get specific user
        userController.getUser(req, res);
    })
    .post("/", async (req, res) => {
        //create user
        try {
            const addUser = await userController.addUser(req, res);
            res.send(addUser)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .post('/login', async (req, res) => {
        //user login
        try {
            const user = await userController.userLogin(req, res);
            res.send(user)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .patch('/:id', async (req, res) => {
        //update user
        try {
            const user = await userController.updateUser(req, res);
            res.send(user)
        } catch (e) {
            res.status(400).send(e.message)
        }
    })
    .delete("/:id", (req, res) => {
        //delete user
        userController.deleteUser(req, res);
    })
    .delete("/", (req, res) => {
        //delete all users
        userController.deleteUsers(req, res);
    });

module.exports = router;