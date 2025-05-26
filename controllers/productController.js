const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render('index', { products });
};

exports.showAddForm = (req, res) => {
    res.render('add');
};

exports.addProduct = async (req, res) => {
    const { name, quantity, price } = req.body;
    await Product.create({ name, quantity, price });
    res.redirect('/');
};

exports.showEditForm = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('edit', { product });
};

exports.updateProduct = async (req, res) => {
    const { name, quantity, price } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, quantity, price });
    res.redirect('/');
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/');
};
