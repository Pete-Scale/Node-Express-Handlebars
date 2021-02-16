const orm = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll(res => cb(res));
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, res => cb(res));
    },
    updateOne: function(id, cb) {
        orm.insertOne(id, res => cb(res));
    }
}

module.exports = burger;