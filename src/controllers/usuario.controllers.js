const usuarioCtrl= {};

const mysqlConnection = require('../database');

usuarioCtrl.getUsuarios = (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

usuarioCtrl.postUsuario = (req, res) => {

    const { id, rfc8, admi, problema, descri } = req.body;
    console.log(id, rfc8, admi, problema, descri);
    const query = `
        CALL usuarioAddOrEdit(?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [id, rfc8, admi, problema, descri], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Enviado' });
        } else {
            console.log(err);
        }
    });
}

usuarioCtrl.getUsuario = (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM usuario WHERE id = ?', [id], (err,
        rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

usuarioCtrl.updateUsuario

usuarioCtrl.delteUsuario = (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM usuario WHERE id = ?', [id], (err,
        rows, fields) => {
            if(!err){
                res.jason({Status: 'Actividad Borrada'});
            }else {
                console.log(err);
            }
    });
}

module.exports = usuarioCtrl;