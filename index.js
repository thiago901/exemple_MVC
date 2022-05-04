const express = require('express')
const handlebars = require('express-handlebars')

const postRoute = require('./src/routes/postsRouter')

const server = express()


server.engine('handlebars',handlebars({
  defaultLayout:'main',
  
}))
server.set('view engine','handlebars')
server.set('views','src/views')


server.use(express.json())
server.use(express.urlencoded({ extended: true}))

// Rotas
server.use(postRoute)


server.listen(8081,()=>{
  console.log('servidor rodando');
})