const Category = require('../models/category.model');

const AddCategory = async (req, res) => {
    const { categoryName, categoryImg } = req.body;

    if (!categoryName || !categoryImg) {
        return res.json({
            success: false,
            message: "Please fill in all fields."
        });
    }

    const categorySave= await Category.create({
        categoryName,
        categoryImg
    })
}