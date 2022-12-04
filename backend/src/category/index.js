const { Router } = require('express');
const { addCategoryFunction,addItemFunction,addItemToCategory } = require('./service')
const { deleteCategory,editCategory,deleteItem,editItem,getCategory,getItem,getItemByCat,getCategoriesPopulated } = require('./controller')
const multer = require('multer');
const uuidv4 = require('uuid/v4'); 
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');

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

router.delete('/delete', deleteCategory);
router.put('/edit', editCategory);
router.get('/get', getCategory);
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
router.delete('/item/delete', deleteItem);
router.put('/item/edit', editItem);
router.get('/item/get', getItem);

router.post('/item/get/byCategory', getItemByCat);

module.exports = router;