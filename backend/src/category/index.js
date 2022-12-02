const { Router } = require('express');
const { addCategory } = require('./controller')

const router = Router();

router.post('/add', addCategory);

module.exports = router;