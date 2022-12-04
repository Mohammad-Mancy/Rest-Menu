const { Router } = require('express');
const { addCategoryFunction,addItemFunction,addItemToCategory,editCategory,editItem,removeFromArray } = require('./service')
const { deleteCategory,deleteItem,getCategory,getItem,getItemByCat,getCategoriesPopulated } = require('./controller')
const multer = require('multer');
const uuidv4 = require('uuid/v4'); 
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');
const Category = require('../../model/Category');

// *********** Category storage **************

var newfilename = uuidv4()+Date.now()+'.png'
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/media/icon/')
    },
    filename:(req, file ,cb) => {
        cb(null, newfilename)
    }
})

const upload = multer({storage: storage})

// *********************************************

// *********** Item Storage *********************

var newImagename = uuidv4()+Date.now()+'.png'
const storageItem = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/media/images/')
    },
    filename:(req, file ,cb) => {
        cb(null, newImagename)
    }
})

const uploadItem = multer({storage: storageItem})

// ************************************************

const router = Router();

// Category APIs

// ************ store image in icon folder ************************
router.post('/add', upload.single('image'), async function (req, res) {
    // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        cat = await addCategoryFunction(req.body.title,newfilename);
        res.status(200).send(req.body);
      })
  })
// ****************************************************************
// ********************* Edit category ****************************

router.put('/edit',upload.single('image'),async (req, res) => {
  console.log(req.body)
      // Check the token if it's Valid
      const token =  await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        // if there was an image then do this
        if (req.file) {
          const cat = await editCategory(req.body,newfilename);
          res.status(200).send(cat);
        }else{
          const cat = await editCategory(req.body);
          res.status(200).send(cat);
        }
        
      })
});

// ****************************************************************

router.delete('/delete', deleteCategory);
router.get('/get/:id?', getCategory);
router.get('/getCategoriesWithItems', getCategoriesPopulated);

// Items APIs

// ************ store image in images folder ************************
router.post('/item/add', uploadItem.single('image'), async function (req, res) {
  // Check the token if it's Valid
    const token = await req.headers.authorization;
    jwt.verify(token, TOKEN_SECRET, async (err) => {
      if (err) {
        return res.status(401).send(err);
      }
        //add Item and return the genarated id
        const itemId = await addItemFunction(req.body,newImagename);
        //get category id
        const catId = await req.body.categoryId;
        // Add item to category.items Array
        const addItem = await addItemToCategory(itemId,catId)
      res.status(200).send(req.body);
    })
})
// ****************************************************************
// ********************* Edit category ****************************

router.put('/item/edit',uploadItem.single('image'),async (req, res) => {
      // Check the token if it's Valid
      const token =  await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        // if there was an image then do this
        if (req.file) {
          const cat = await editItem(req.body,newImagename);
        }else{
          const cat = await editItem(req.body);
        }
        // if the user change the category
        if (req.body.categoryId) {
          console.log(req.body.id)
          addItemToCategory(req.body.id,req.body.categoryId)
          const cat = await Category.findById(req.body.currentCategoryId)
          removeFromArray(cat,req.body.id)
        }
        res.status(204).send();
      })
});

// ****************************************************************
router.delete('/item/delete', deleteItem);
router.put('/item/edit', editItem);
router.get('/item/get/:id?', getItem);

router.post('/item/get/byCategory', getItemByCat);

module.exports = router;