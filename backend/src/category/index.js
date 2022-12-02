const { Router } = require('express');
const { addCategory,deleteCategory } = require('./controller')

const router = Router();

router.post('/add', addCategory);
router.post('/delete', deleteCategory);

module.exports = router;