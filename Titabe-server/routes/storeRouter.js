const express = require('express');
const multer = require('multer');
const storeController = require('../controllers/storeController')

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './images/products');
    },
    filename: (req, file, cb) => {
      cb(
        null,
        new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
      );
    },
  });
  const filefilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({ storage: storage, filefilter: filefilter });

router.get('/', storeController.allStore)
router.get('/detail/:id', storeController.detail)

router.post('/create',upload.single('mainImage'), storeController.create)


module.exports = router;