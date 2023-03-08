const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/:id', (req, res) => {
    const foundUser = users[req.params.id - 1]
    res.json(foundUser)
})

router.post('/', [check ("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.json({error: errors.array()})
    } else {
        users.push(req.body)
        res.json(users)
    }
})

router.patch('/:id', (req, res) => {
    const id = req.params.id - 1
    users[id].name = req.body.name
    users[id].age = req.body.age
    res.json(users)
})

router.delete('/:id', (req, res) => {
    const deletedUser = [req.params.id - 1]
    users.splice(deletedUser, 1)
    res.send('User has been removed!')
})

module.exports = router