const router = require('./index');
const {db, Album, Artist, Song} = require('../db/db');

router.get('/', async (req, res) => {
        try {
            const albums = await Album.findAll({include: [{all: true}]})
            res.json(albums);


        }
        catch (err) {
            console.log('fuck');
        }
    }
)