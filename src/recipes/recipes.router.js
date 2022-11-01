
const passport = require ('passport')

const router = require ('express').Router()

const recipeServices = require('./recipes.services')
require('../middlewares/auth.middleware')(passport)

// /recipes
// /recipes/:recipe_id

router.route ('/')

.get(recipeServices.getAllRecipes)
.post(
    passport.authenticate('jwt', {sesion:false}),
    recipeServices.createRecipe
)



router.route('/:recipe_id')

.get(recipeServices.getRecipeById)
.patch(
    passport.authenticate('jwt', {sesion:false}),
    recipeServices.patchRecipe
)
.delete(
    passport.authenticate('jwt', {sesion:false}),
    recipeServices.deleteRecipe
)

module.exports = router