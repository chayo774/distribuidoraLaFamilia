import express from 'express';
import { formLogin, formRegister, formForgetPassword, toregister } from '../controllers/usuarioController.js';
const router = express.Router();

router.get('/login', formLogin);

router.get('/register', formRegister);
router.post('/register', toregister);

router.get('/forget-password', formForgetPassword);



export default router