const { Router } = require('express');
const { addCategory,deleteCategory,editCategory } = require('./controller')

const router = Router();

router.post('/add', addCategory);
router.delete('/delete', deleteCategory);
router.put('/edit', editCategory);

module.exports = router;