const {DataTypes}= require('sequelize')

const db= require ('../utils/database')
const Users = require('./users.models')
const Ingredients = require('./ingredients.models')


const UsersIngredients = db.define('users_ingredients',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false
    },

    amount:{
        type:DataTypes.STRING,
        defaultValue:false
    },

    ingredientId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'ingredient_id',
        references:{
            key:'id',
            model:Ingredients
        }
    },

    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'user_id',
        references:{
            key:'id',
            model:Users
        }
    },
})

module.exports = UsersIngredients