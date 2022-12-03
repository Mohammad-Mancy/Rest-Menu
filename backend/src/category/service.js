const Category = require("../../model/Category");
const Item = require("../../model/Item");

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

async function addItemFunction(body) {
    try {
        const {
            name,
            description,
            price,
            image
          } = body
        
          const item = new Item({
            name,
            description,
            price,
            image
          })
          return await (await item.save()).id; 
    } catch (error) {
        console.error(error);
    }
}

async function addItemToCategory(itemId,catId) {
    try {
        // to find all items in the list of items to this category and update them to include this itemId
        await Category.updateMany(
            {
                _id: catId
            },
            {
                $push: 
                { 
                    items: itemId 
                }
            }
        );
        return true

    } catch (error) {
        console.error(error);
    }
}

async function removeFromArray(cat,id) {
    return await Category.updateMany({ _id: cat._id }, { $pull: { items: id } });
  }

module.exports = {
    addCategoryFunction,
    addItemFunction,
    addItemToCategory,
    removeFromArray
  }