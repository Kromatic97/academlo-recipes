const Categories = require ('../models/categories.models')

//?Ver todas las categorias
const getAllCategories = async () => {
    const data = await Categories.findAll()
    return data
}

//? Ver una categoria en especifico
const getAllCategoryById = async (id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
    return data
}

//?Crear categoria
const createCategory= async (title) => {
    const data = await Categories.create({
        title
    })
    return data
}

//?Eliminar categoria
const deleteCategory = async (id) => {
    const data = await Categories.destroy({
        where:{
            id
        }
    })
    return data
}
module.exports = {
    getAllCategories,
    getAllCategoryById,
    createCategory,
    deleteCategory
}