const express = require('express');
const usersController = require('../controllers/usersController')

const router = express.Router();

router.post('/login', usersController.login)
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