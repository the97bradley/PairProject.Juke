const router = require('express').Router();
const {db, Album, Artist, Song} = require('../db/db');

// connect your API routes here!

router.use('/albums', require('./albumRoutes'))


module.exports = router
