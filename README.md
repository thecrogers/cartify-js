# Cartify-js
Simple js cart managment, for use with serverless infastructure. 

## Install

`yarn` or `npm` install cartify-js


## API 

* Products - array of products that exist in the store, and can be added to a cart. Provides the following methods: 
  * get
  * list
  * add
* Cart - a structure that shows current items in the cart, subtotal, total, fees. Provides the following methods: 
  * get
  * list
  * add
  * delete
  * checkout
  * abandon
  * coupon
  * fees
  * taxes

