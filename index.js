import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
//Creating app
const app = express()
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
    console.log("Working");
})

// about the middeware: https://chat.openai.com/c/eedbfe55-2a93-49e7-93e6-6162fbb12e9f