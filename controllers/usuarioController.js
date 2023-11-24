import { check, validationResult } from "express-validator"
import Usuario from "../models/Usuarios.js"
import {generarId} from '../helpers/tokens.js'
const formRegister = (req, res) =>{
    res.render('auth/register',{
        pagina: 'Sign up'
    })
}
const formLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: 'Sign in'
    })
}
const formForgetPassword = (req, res) =>{
    res.render('auth/forget-password',{
        pagina: 'Recovery Password'
    })
}
const toregister = async (req, res)=>{
    await check('nombre').notEmpty().withMessage('The name can not be empty').run(req)
    await check('email').isEmail().withMessage('Email is obligatory').run(req)
    await check('password').isLength({min:6}).withMessage('Password must be 6 characteres').run(req)
    await check('repeat_password').equals(req.body.password).withMessage('The password are not equals').run(req)
    let resultado = validationResult(req)
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/register',{
            pagina:'Create account',
            errores: resultado.array(),
            user:{
                nombre:req.body.nombre,
                email:req.body.email
            }
               })
    }
    const {nombre, email, password} = req.body
    const existUser = await Usuario.findOne({where:{email}});
    if(existUser){
        return res.render('auth/register',{
            pagina:'Sign up',
            errores: [{msg:'User is registered'}],
            user:{
                nombre:req.body.nombre,
                email:req.body.email
            }
        })
    }
    await Usuario.create({
        nombre, email, password, token:generarId()
    })
    res.render('templates/message',{
        pagina: "Account created correctly.",
        mensaje: "Whe have sent a confirm email. Click in the link"
    })

}
// export nombrado
export {
    formLogin,
    formRegister,
    formForgetPassword,
    toregister
}