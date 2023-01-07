const express = require('express');
const usersController = require('../controllers/usersController')
const verifyToken = require('../middlewares/auth')

const router = express.Router();

router
    .route('/login')
    .get(verifyToken, usersController.logged)
    .post(usersController.login)

router.post('/register', usersController.register)

/*
router.get('/', usersController.apiGetAll)
router.get('/subcategory/:id', usersController.apiGetSubcategory)

router
    .route('/detail/:id')
    .get(usersController.apiGetOne)
    .put(usersController.apiUpdateOne)
    .delete(usersController.apiDeleteOne);
*/
module.exports = router;