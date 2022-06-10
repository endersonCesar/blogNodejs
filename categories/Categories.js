const Sequelize = require('sequelize')
const connection = require('../database/database')

const Categories = connection.define('Ctegories',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

// Categories.sync({force:true})
module.exports = Categories