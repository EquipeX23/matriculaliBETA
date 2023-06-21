const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const server = require('http').createServer(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port= '5500'
app.use(express.static('src/public'))
//criando rotas
//rota principal
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/src/index.html')
})
//rota para authenticação
app.get('/auth/entrar',(req,res)=>{
    res.sendFile(__dirname + '/src/auth/login.html')
})
//rota principal da matricula
app.get('/user/:id/home',(req,res)=>{
    res.sendFile(__dirname + '/src/home.html')
})
let data = []
app.post('/auth/matricula/new/aluno',(req,res) => {
    const newData = req.body
    data.push(newData)
    res.sendFile(__dirname+ '/src/home_parents.html')
})
app.get('/auth/alunos/api',(req,res) => {
    res.send(data)
})






//rodando servidor
server.listen(port , () =>{
    console.log('servidor rodando na porta '+port)
})