const mysql = require('../db/mysql');
module.exports = {
    buscar: (req, res) => {
        mysql.query('SELECT * FROM contacto WHERE id=?', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    crear: (req, res) => {
        mysql.query("INSERT INTO contacto (nombre, edad, telefono, activo) VALUES (?,?,?,?)", [req.body.nombre, req.body.edad, req.body.telefono, req.body.activo], (err, results, fields) => {
            if (err) {
                res.json(err);
            } else {
                console.log(results)
                res.json(results);
                for (let i = 0; i < req.body.depends.lenght; i++) {
                    mysql.query("INSERT INTO dependiente (nombre, edad, contacto) VALUES (?,?,?,?)", [req.body.depends[i].nombre, req.body.depends[i].edad, results.insertId],
                        (err, results, fields));
                    if (err) {
                        res.json(err);
                    } else {
                        console.log(results);
                    }
                }
                res.json({ msg: "Se agregó el dato" })
            }
        })

    },

    borrar: (req, res) => {
        mysql.query('delete from contacto WHERE id=?', req.params.id, (err, results, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    },

    listar: (req, res) => {
        mysql.query('SELECT * FROM contacto', req.params.id, (error, resuts, fields));
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(results);
        }
    }
}