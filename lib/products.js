var immutable = require('immutable');

function Products (products, options) {
    var self = this;
    if (! Array.isArray(products)) {
        return;
    } 
    self._productManager = {
        products: immutable.OrderedMap(products.map(
            (item) => ([item.SKU, item ]))),
        options,
    };
    return self;
}

Products.prototype.get = function(ids) {
    var self = this;
    if (! Array.isArray(ids)) {
        console.log("error: need an array as a parm");
        return;
        // utils.log("Error: cannot use non array parameter");
    }
    retProducts = {};
    ids.forEach(id => {
        if( self._productManager.products.has(id)) {
            retProducts[id]=self._productManager.products.get(id);
        }
    });
    return retProducts;
}

Products.prototype.list = function() {
    var self = this;
    retProducts = {};
    if (self._productManager.products.size === 0) {
        return {};
    }
    self._productManager.products.forEach(product => {
        retProducts[product.SKU] = product;
    });
    
    return retProducts;
}

Products.prototype.add = function(product) {
    var self = this; 
    self._productManager.products = self._productManager.products.set(product.SKU, product);
    return self;
}

Products.prototype.size = function() {
    var self = this; 
    return self._productManager.products.size
}

module.exports = function (products, options) {
    return new Products(products, options);
}