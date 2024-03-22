const conn = require('../db/conn');

module.exports = class Parts {
    static getParts(){
        const parts = conn.db().collection('parts').find().toArray();
        print(parts)
        return parts;
    }
}