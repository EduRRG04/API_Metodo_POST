let mysql = require('../db/mysql');
module.exports = {
    buscar: (req, res) => {
        mysql.query('SELECT * FROM dependiente WHERE id=?', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    crear: (req, res) => {
        mysql.query("INSERT INTO dependiente (nombre, edad, contacto) VALUES (?,?,?) "), req.body.nombre, req.body.edad, (err, results, fields) => {
            if (err) {
                console.log(err);
            } else {
                res.json(results);
            }
        }

    },

    borrar: (req, res) => {
        mysql.query('delete from dependiente WHERE id=?', req.params.id, (err, results, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    listar: (req, res) => {
        mysql.query('SELECT * FROM dependiente', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    }
}