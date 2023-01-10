const express = require('express');
const storeController = require('../controllers/storeController')

const router = express.Router();

router.get('/', storeController.allStore)
/*router.get('/category/:id', storeController.apiGetCategory)
router.get('/subcategory/:id', storeController.apiGetSubcategory)*/


module.exports = router;