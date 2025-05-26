const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/add', productController.showAddForm);
router.post('/add', productController.addProduct);
router.get('/edit/:id', productController.showEditForm);
router.put('/edit/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
