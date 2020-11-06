const { Router } = require('express');
const router= Router();

const mysqlConnection = require('../database');

const {getUsuarios, postUsuario, getUsuario, delteUsuario} = require('../controllers/usuario.controllers');

router.route('/')
    .get(getUsuarios)
    .post(postUsuario);

router.route('/:id')
    .get(getUsuario)
    .put()
    .delete(delteUsuario)


/*
router.put('/:id', (req, res) => {
    const {  } req.body;
    const { id } = req.params;
    const query = 'CALL usuarioAddorEdit(?,?,?,?,?)';
    mysqlConnection.query(query, [id, rfc8, admi, problema, descri], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Usuario Actualizado'});
        } else {
            console.log(err);
        }
    });
});*/

module.exports = router;