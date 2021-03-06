const product = require('../models/product');

exports.productIndex = async (req, res, next) => {
    const productData = await product.allProduct();
    const categoryData = await product.allCategory();
    res.render('product/product', {productData,categoryData});
};

exports.productDetail = async (req, res, next) => {
    const pDetail1 = await product.detailProduct(req.params.id);
    res.render('product/single-product',{pDetail1});
};

exports.productSearch = async (req, res, next) => {
    res.render('product/find');
};