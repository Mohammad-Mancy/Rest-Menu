const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');
const Category = require('../../model/Category');
const { addCategoryFunction } = require('./service')

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
module.exports = {
    addCategory,
    deleteCategory,
    editCategory
}