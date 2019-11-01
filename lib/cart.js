var immutable = require('immutable');
// var utils = require('./util');

function Cart(options) {
    var self = this;
    self._cart={
        options,
        products: immutable.OrderedMap(),
        subTotal: 0.0,
    };
    return self;
}

/******************* 
item = {
    SKU: string,
    unitPrice: int,
    quantity: int,
}
********************/

Cart.prototype.getProducts = function(SKUs) {
    var self = this;
    if (! Array.isArray(SKUs)) {
        console.log("Error: param needs to be array");
        return;
        // utils.log("Error: cannot use non array parameter")
    } 
    retProducts = {};
    SKUs.forEach(SKU => {
        if( self._cart.products.has(SKU)) {
            retProducts[SKU]=self._cart.products.get(SKU);
        }
    });

    return retProducts;
}

Cart.prototype.listProducts = function() {
    var self = this;
    retProducts = {};
    if (self._cart.products.size === 0) {
        return {};
    }
    self._cart.products.forEach(product => {
        retProducts[product.SKU] = product;
    });
    return retProducts;
}

Cart.prototype.addProducts = function(SKU, unitPrice, quantity) {
    var self = this; 
    if (self._cart.products.has(SKU)) {
        let product = self._cart.products.get(SKU);
        product.quantity += quantity;
        self._cart.products = self._cart.products.set(SKU, product);
        return;
    }
    self._cart.products = self._cart.products.set(SKU, {SKU, unitPrice, quantity});
    return;
}

Cart.prototype.deleteProducts = function(SKUs) {
    var self = this;
    if (! Array.isArray(SKUs)) {
        console.log("Error: param needs to be array");
        return;
        // utils.log("Error: cannot use non array parameter")
    } 
    SKUs.forEach(SKU => {
        if( self._cart.products.has(SKU)) {
            self._cart.products = self._cart.products.delete(SKU);
        }
    });
    
    return Cart.listProducts();
}

Cart.prototype.size = function() {
    var self = this;
    return self._cart.products.size;
}

Cart.prototype.checkout = function() {

}

Cart.prototype.abandon = function() {

}

Cart.prototype.coupon = function() {

}

Cart.prototype.fees = function() {

}

Cart.prototype.taxes = function() {

}
 
module.exports = function(options) {
    return new Cart(options);
};
// exports.cart = function (options) {
//     return new cart(options)
// }