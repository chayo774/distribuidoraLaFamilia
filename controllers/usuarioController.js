const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        autenticado: true
    })
}
const formularioRegistro = (req, res) =>{
    res.render('auth/register',{
        pagina: 'Crear cuenta'
    })
}
// export nombrado
export {
    formularioLogin,
    formularioRegistro
}