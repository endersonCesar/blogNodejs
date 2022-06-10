const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category  = require ('../categories/Categories')
const Articles = connection.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

/**relecionamento um pra muintos */
Category.hasMany(Articles) 

/**CRIO UM RELACIONAMENTO 1 => 1 */
Articles.belongsTo(Category)


// Articles.sync({force:true})
module.exports = Articles