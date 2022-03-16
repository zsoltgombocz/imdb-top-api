const schema = require('../database/schemas/showSchema');
const db = require('../database/db');
const movieModel = db.model('movies', schema);

async function getAllMovie(limit=null) {
    limit = (typeof limit === 'number') ? limit : null;
    let data = await movieModel.find({}).limit(limit);

    return data;
}

module.exports = {
    getAllMovie
}