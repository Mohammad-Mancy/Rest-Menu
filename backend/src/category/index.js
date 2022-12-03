const { Router } = require('express');
const { addCategory,deleteCategory,editCategory,addItem,deleteItem,editItem,getCategory } = require('./controller')

const router = Router();

// Category APIs
router.post('/add', addCategory);
router.delete('/delete', deleteCategory);
router.put('/edit', editCategory);
router.get('/get', getCategory);

// Items APIs
router.post('/item/add', addItem);
router.delete('/item/delete', deleteItem);
router.put('/item/edit', editItem);

module.exports = router;