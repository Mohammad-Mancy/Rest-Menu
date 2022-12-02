const { Router } = require('express');
const { addCategory,deleteCategory,editCategory,addItem } = require('./controller')

const router = Router();

// Category APIs
router.post('/add', addCategory);
router.delete('/delete', deleteCategory);
router.put('/edit', editCategory);

// Items APIs
router.post('/item/add', addItem);

module.exports = router;