const User = require("../models/user.model");

const getUsers = async (req, res) => {
    let result;
    try {
        result = await User.find({});
    } catch (e) {
        throw new Error(e)
    }
    return result
}

const addUser = async (req, res) => {
    let result;
    try {
        result = await new User(req.body).save()
    } catch (e) {
        throw new Error(e)
    }
    return result
}

module.exports = { addUser, getUsers };