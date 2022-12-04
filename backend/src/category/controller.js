const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');
const Category = require('../../model/Category');
const Item = require('../../model/Item');
const { removeFromArray,getItemsByCategory } = require('./service')

// ********************* Category functions *****************************


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

async function getCategory(req,res) {
    try {
        var category = ''
        if (req.params.id) {
            category = await Category.findById(req.params.id)
        }else{
            category = await Category.find()
        }
        res.status(200).send(category)
    } catch (error) {
        console.error(error);
    }
}

async function getCategoriesPopulated(req,res ) {
  try {
    const categories = await Category.find().populate('items')
    res.status(200).send(categories)
  } catch (error) {
    console.error(error);
  }
}

// *******************************************************************

// ********************* Item functions ******************************

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

async function getItem(req,res) {
    try {
        const item = await Item.find()
        res.status(200).send(item)
    } catch (error) {
        console.error(error);
    }
}

async function getItemByCat(req,res) {
    try {
        const result = await getItemsByCategory(req.body.id);
        if(result.items.length === 0){
          res.status(404).send('No Items');
        }
        res.status(200).send(result.items);
    } catch (error) {
        console.error(error);
    }
}

// *********************************************************************
module.exports = {
    deleteCategory,
    deleteItem,
    editItem,
    getCategory,
    getItem,
    getItemByCat,
    getCategoriesPopulated
}