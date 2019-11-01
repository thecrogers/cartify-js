var cartify = require('./index');

let products = [
    {
        name: "item A",
        price: 1050,
        category: "sports",
        images: [
            "https://photos.com/image/A.jpg",
            "https://photos.com/image/B.jpg",
            "https://photos.com/image/C.jpg",
        ],
        description: "Best Item ever",
        SKU: "513dfa1fe813as5",
    },     
    {
        name: "item B",
        price: 1000,
        category: "sports",
        images: [
            "https://photos.com/image/D.jpg",
            "https://photos.com/image/E.jpg",
            "https://photos.com/image/F.jpg",
        ],
        description: "Best Item ever for real",
        SKU: "513dfa1fe8ewqfd2edas",
    },
    {
        name: "item C",
        price: 2550,
        category: "sports",
        images: [
            "https://photos.com/image/G.jpg",
            "https://photos.com/image/H.jpg",
            "https://photos.com/image/I.jpg",
        ],
        description: "Best Item ever, in existence",
        SKU: "513dfa1f2389138925",
    }
];

let addProd = {
        name: "item D",
        price: 4550,
        category: "sports",
        images: [
            "https://photos.com/image/J.jpg",
            "https://photos.com/image/K.jpg",
            "https://photos.com/image/L.jpg",
        ],
        description: "Best Item to waisting money",
        SKU: "513d523rgosiosdaf345",
    }

function testAPI(){
    let cartManager = cartify.cart();
    let productManager = cartify.products(products)
    testProduct(productManager);
    testCart(cartManager);
    
}

function testCart(cartManager) {
    console.log("Testing cart manage(r");
    console.log("cart product count: " + cartManager.size());
    cartManager.addProducts(addProd.SKU, addProd.price, 3)
}

function testProduct(productManager) {
    console.log("testing product manager")
    console.log("products count: "+ productManager.size())
    productManager = productManager.add(addProd);
    console.log("products count: "+ productManager.size())

    console.log("product sku: " + addProd.name + " product name: " + productManager.get([addProd.SKU])[addProd.SKU].name);
    console.log("list of products: \n" + JSON.stringify(productManager.list()));
}

testAPI();