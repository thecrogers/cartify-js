var products = require('./lib/products');
var cart = require('./lib/cart');

// var utils = require('./lib/util');

function cartify(options) {
    var self = this;
    self.options = options;
    // utils = utils.utils(options);
}

cartify.cart = function (options) {
    var self = this;
    // if (!utils.isEmptyObject(self.options)) {
    //     return cart(self.options);
    // }
    return cart(options);
}  

cartify.products = function (initProducts, options) {
    var self = this;
    // if (!utils.isEmptyObject(self.options)) {
    //     return products(initProducts, self.options);
    // }
    return products(initProducts, options);
} 

cartify.Cartify = cartify;
cartify.cartify = cartify;

module.exports = cartify;