const connection = require("./connection");

const orm = {

    selectAll: function(cb) {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(burger_name, cb) {
        const queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, burger_name, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    updateOne: function(id, cb) {
        const queryString = "UPDATE burgers SET devoured = true WHERE ?";
        connection.query(queryString, id, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;