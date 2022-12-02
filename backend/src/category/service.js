const Category = require("../../model/Category");

async function addCategoryFunction(body) {
    const {
      title,
      icon,
    } = body
  
    const category = new Category({
      title,
      icon
    })

    return await category.save();
}

module.exports = {
    addCategoryFunction
  }