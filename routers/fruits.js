const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/', (req, res) => {
    res.json(fruits)
})

router.get('/:id', (req, res) => {
    const foundFruit = fruits[req.params.id - 1]
    res.json(foundFruit)
})

router.post('/', [check("color").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.json({errors: errors.array()})
    } else {
        fruits.push(req.body)
        res.json(fruits)
    }
})

router.patch('/:id', (req, res) => {
    const id = req.params.id - 1
    fruits[id].name = req.body.name
    fruits[id].color = req.body.color
    res.json(fruits)
})

router.delete('/:id', (req, res) => {
    const deletedFruit = [req.params.id - 1]
    fruits.splice(deletedFruit, 1)
    res.send('Fruit has been removed!')
})

module.exports = router