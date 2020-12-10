const app = require('./src/app')
//const PORT = process.env.PORT 
const PORT = 5555
app.listen(PORT, function() {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

