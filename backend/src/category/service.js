const Category = require("../../model/Category");
const Item = require("../../model/Item");

async function addCategoryFunction(title,filename) {
  
    const category = new Category({
      title:title,
      icon:filename
    })

    return await category.save();
}

async function addItemFunction(body,image) {
    try {
        const {
            name,
            description,
            price
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

async function getItemsByCategory(id) {
    return await Category.findById(id).populate('items');
}

async function editCategory(body,newNameIcon) {
    try {
        //create Category object
        const updatedCategory = new Category({
            _id: body.id,
            title: body.title,
            icon: newNameIcon
        },{ upsert: true, new: true })//only mentioned attributes

        // updating category with new one
        Category.updateOne({_id:body.id}, updatedCategory).then(
            () => {
                return true;
            }
            ).catch(
            (error) => {
                return error;
            });

    } catch (error) {
        console.error(error);
        return error;
    }
}

module.exports = {
    addCategoryFunction,
    addItemFunction,
    addItemToCategory,
    removeFromArray,
    getItemsByCategory,
    editCategory
  }