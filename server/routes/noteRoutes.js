const express = require('express')
const notess = require('../models/note')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const todos = await notess.getAlltodos();
        console.log(note)
        res.send(note);
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
});

module.exports = router;
