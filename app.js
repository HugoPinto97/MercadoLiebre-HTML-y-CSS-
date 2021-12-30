let express = require('express')
let app = express()
const PORT = 3001
let path = require('path')

//middlewares
app.use(express.static('public'))

//rutas
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})

//servidor
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
