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
// export nombrado
export {
    formLogin,
    formRegister,
    formForgetPassword
}