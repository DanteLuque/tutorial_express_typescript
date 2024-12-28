import express from 'express'

import diariosRouter from './routes/diariosRoutes'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

// En caso de no utilizar un parametro, podemos usar _ (raya baja) para indicar que no se usará, esto tambien funciona en nombres de archivos.
app.get('/ping', (_, res) => { // tambien puedes indicar a que parametro se refiere usando _req (raya seguido del nombre)
  console.log('funcionando, hoy es ', new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diariosRouter)

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`)
})
