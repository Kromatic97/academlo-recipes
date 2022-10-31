const Users = require('./users.models')
const Categories = require ('./categories.models')
const Ingredients = require ('./ingredients.models')
const Instructions = require ('./instructions.models')
const RecipesIngredients = require ('./recipes_ingredients.models')
const Recipes = require ('./recipes.models')
const Types = require ('./types.models')
const UsersIngredients = require ('./users_ingredients.models')
const UsersRecipes = require ('./users_recipes.models')


const initModels = () => {
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

//***********************************/
    //*Users 1:M UserRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //*Recipes 1:M UserRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)
//**********************************/

    //*Users 1:M UserIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //*Ingredients 1:M UserIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

//!**********************************/

//*Recipes 1:M RecipesIngredients
Recipes.hasMany(RecipesIngredients)
RecipesIngredients.belongsTo(Recipes)

//*Ingredients 1:M RecipesIngredients
Ingredients.hasMany(RecipesIngredients)
RecipesIngredients.belongsTo(Ingredients)
//*********************************/


//*Categories 1:M Recipes
Categories.hasMany(Recipes)
Recipes.belongsTo(Categories)

//*Recipes 1:M Instructions
Recipes.hasMany(Instructions)
Instructions.belongsTo(Recipes)


//*Recipes 1:M Instructions
Types.hasMany(Ingredients)
Ingredients.belongsTo(Types)





}


module.exports = initModels