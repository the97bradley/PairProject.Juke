const router = require('express').Router();
const {db, Album, Artist, Song} = require('../db/db');

router.get('/', async (req, res) => {

    res.json(await Album.findAll({include: [{all: true}]}));
})


router.get('/:albumId', async (req, res) => {
    res.json(await Album.findById(req.params.albumId));
})


module.exports = router;