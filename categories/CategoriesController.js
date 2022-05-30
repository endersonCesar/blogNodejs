const express = require ('express')
const router = express.Router();

router.get('/categories',(req,res)=>{
    res.send('ROTA DE CATEDORIAS')
})



router.get('/admin/categories',(req,res)=>{
    res.send('ROTA DE formulario')
})


module.exports = router