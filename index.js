index.js

import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

app.use('/', usuarioRoutes)

const port = 3300
app.listen(port,()=>{
    console.log("Working");
})

// about the middeware: https://chat.openai.com/c/eedbfe55-2a93-49e7-93e6-6162fbb12e9f