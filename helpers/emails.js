import nodemailer from 'nodemailer'

const emailRegister = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      console.log(datos);
      const {email,nombre,token}=datos

      //Enviar el email:this part is documentation of mailtrap
      await transport.sendMail({
        from:'distribuidora_LaFamilia.com',
        to:email,
        subject:'Confirma tu cuenta en Distribuidora LaFamilia.com',
        text:'Confirma tu cuenta en Distribuidora LaFamilia.com',
        html:`
        <p>Hola ${nombre}, comprueba tu cuenta en bienesRaices.com</p>
        <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3300}/auth/confirm/${token}">Confirmar cuenta</a></p>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
      })
}

export {
    emailRegister
}