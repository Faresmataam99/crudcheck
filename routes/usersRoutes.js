const express = require('express')
const usersController= require('../controllers/usersController')

const router = express.Router()

router.get('/user', usersController.getUser);
router.get('/user',usersController.createUser);
router.put('/user:id',usersController.updateUser);
router.delete('/users:id',usersController.deleteUser);

module.exports=router;