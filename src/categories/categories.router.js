const router = require ('express').Router()
const categoryServices = require('./categories.services')


//? /

//? /:id

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)//!hacer protegida por adm

router.route('/:id')

.get(categoryServices.getCategoryById)
.delete(categoryServices.deleteCategory)//!hacer protegida por adm

module.exports = router