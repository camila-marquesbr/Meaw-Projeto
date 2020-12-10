const app = require('./src/app')
const PORT = process.env.PORT 

app.listen(PORT, function() {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

