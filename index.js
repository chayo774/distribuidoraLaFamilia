import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
//Creating app
const app = express()
//Enable reading data from forms
app.use(express.urlencoded({extended:true}))
// conexion to databases
try{
    await db.authenticate();
    db.sync()
    console.log("Conexion correct to databases");
}catch(error){
    console.log(error);
}
//Hability Pug
app.set('view engine', 'pug')
app.set('views', './views')
//Public directory
app.use(express.static('public'))
//Routing
app.use('/auth', usuarioRoutes)
//Define a port and start project
const port = 3300
app.listen(port,()=>{
    console.log("The server is working in the port 3300");
})

// about the middeware: https://chat.openai.com/c/eedbfe55-2a93-49e7-93e6-6162fbb12e9f