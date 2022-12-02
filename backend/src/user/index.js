const { Router } = require('express');
const { login } = require('./controller');

const router = Router();

router.post('/auth/login', login);

module.exports = router;