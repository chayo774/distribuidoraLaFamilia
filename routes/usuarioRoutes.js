import express from 'express';
import { formularioLogin, formularioRegistro } from '../controllers/usuarioController.js';
const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/nosotros', function(req, res){
    res.send('Informacion de nosotros')
})

export default router