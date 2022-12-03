const { Router } = require('express');
const { addCategory,deleteCategory,editCategory,addItem,deleteItem } = require('./controller')

const router = Router();

// Category APIs
router.post('/add', addCategory);
router.delete('/delete', deleteCategory);
router.put('/edit', editCategory);

// Items APIs
router.post('/item/add', addItem);
router.delete('/item/delete', deleteItem);

module.exports = router;