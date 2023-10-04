const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"in get"
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message:"in get with id",
        id: id
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message:"in post"
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(201).json({
        message:"in deleted",
        id: id
    });
});

module.exports = router;
