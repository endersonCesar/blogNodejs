const express = require('express');
const res = require('express/lib/response');
const app = express()
const bodyParser= require('body-parser')
const connection = require('./database/database')
const Articles = require('./articles/Article')
const Categories = require('./categories/Categories')
app.set("view engine",'ejs')
const session = require('express-session')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(session({
        secret:'teste',
        cookie:{maxAge:30000000}
}))


const categoriesController  = require('./categories/CategoriesController')
const articlesController  = require('./articles/ArticlesController');
const { application } = require('express');


connection.authenticate().then(()=>{
    console.log('Conexão feita com sucesso')
}).catch((error)=>{
    console.log(error)
})


app.use('/',categoriesController)
app.use('/',articlesController)

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(8080,()=>{
    console.log('O servidor está rodando ! ')
})

app.get('/session',(req,res)=>{
    req.session.treinamento = 'batata'
    req.session.ano = 20;
    req.session.email='enderson@batata'
})

app.get("/leitura",(req,res)=>{
        res.json({
            treinamento:req.session.treinamento,
            ano:req.session.ano,
            email:req.session.email
        })
        res.send("Sessão gerada")
})
