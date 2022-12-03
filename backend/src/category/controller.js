const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');
const Category = require('../../model/Category');
const Item = require('../../model/Item');
const { addCategoryFunction,addItemFunction,addItemToCategory,removeFromArray } = require('./service')

// ********************* Category functions *****************************

async function addCategory(req,res) {
    try {
      // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        cat = await addCategoryFunction(req.body);
        res.status(200).send(cat);
      })
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

async function deleteCategory(req,res) {
    try {
      // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        await Category.findByIdAndRemove(req.body._id);
        res.status(204).send();//not content to send just success status
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

async function editCategory(req,res) {
    try {

      // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        //create Category object
        const updatedCategory = new Category({
            _id: req.body.id,
            title: req.body.title,
            icon: req.body.icon
        },{ upsert: true, new: true })//only mentioned attributes

        // updating category with new one
        Category.updateOne({_id: req.body.id}, updatedCategory).then(
            () => {
                res.status(204).send();
            }
            ).catch(
            (error) => {
                res.status(400).json({error: error});
            });
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

async function getCategory(req,res) {
    try {
        const category = await Category.find()
        res.status(200).send(category)
    } catch (error) {
        console.error(error);
    }
}

// *******************************************************************

// ********************* Item functions ******************************

async function addItem(req,res) {
    try {
      // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        //add Item and return the genarated id
        const itemId = await addItemFunction(req.body);
        //get category id
        const catId = await req.body.categoryId;

        // Add item to category.items Array
        const addItem = await addItemToCategory(itemId,catId)
        res.status(200).send();

        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

async function deleteItem(req,res) {
    try {
        const token = await req.headers.authorization;
        jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
          if (err) {
            return res.status(401).send(err);
          }

          //remove from category.items array
          const cat = await Category.findOne({ _id: req.body.cat_id });
          const result = await removeFromArray(cat,req.body.id)

          //delete item
          await Item.findByIdAndRemove(req.body.id)

          res.status(204).send();
        })
    } catch (error) {
        console.error(error);
    }
}

async function editItem(req,res) {
    try {
        const token = await req.headers.authorization;
        jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
          if (err) {
            return res.status(401).send(err);
          }

        //create Item object
        const updatedItem = new Item({
            _id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        },{ upsert: true, new: true })

        // updating Item with new one
        Item.updateOne({_id: req.body.id}, updatedItem).then(
            () => {
                res.status(204).send();
            }
            ).catch(
            (error) => {
                res.status(400).json({error: error});
            });
        })
    } catch (error) {
        console.error(error);
    }
}
// *********************************************************************
module.exports = {
    addCategory,
    deleteCategory,
    editCategory,
    addItem,
    deleteItem,
    editItem,
    getCategory
}