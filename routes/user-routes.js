const express = require('express')
const { signUp, login } = require('../controllers/user-controller');


const router = express.Router();


router.post('/', signUp);
router.post('/login', login)

module.exports = router;