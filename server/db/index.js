const {db, Album, Artist, Song} = require('./db')
// require each of your models here...

// ...and give them some nice associations here!

Song.belongsTo(Artist);
Song.belongsTo(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Artist.hasMany(Album);
Artist.hasMany(Song);

module.exports = {
    db,
    Album,
    Artist,
    Song
}
