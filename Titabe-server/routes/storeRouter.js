const express = require('express');
const storeController = require('')

const router = express.Router();

router.get('/', storeController.apiGetAll)
router.get('/category/:id', storeController.apiGetCategory)
router.get('/subcategory/:id', storeController.apiGetSubcategory)

router
    .route('/detail/:id')
    .get(storeController.apiGetOne)
    .put(storeController.apiUpdateOne)
    .delete(storeController.apiDeleteOne);

module.exports = router;