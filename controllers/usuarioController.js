const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        autenticado: true
    })
}
const formularioRegistro = (req, res) =>{
    res.render('auth/register')
}
// export nombrado
export {
    formularioLogin,
    formularioRegistro
}