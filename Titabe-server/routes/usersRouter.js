const express = require('express');
const usersController = require('../controllers/usersController')
const verifyToken = require('../middlewares/auth')

const router = express.Router();

router
    .route('/login')
    .get(verifyToken, usersController.logged)
    .post(usersController.login)

router.post('/register', usersController.register)

router.post('/forgotPassword', usersController.forgotPassword)
//router.get('/resetPassword/:token', usersController.resetPassword)
//router.post('/resetPassword', usersController.postResetPassword)

module.exports = router;