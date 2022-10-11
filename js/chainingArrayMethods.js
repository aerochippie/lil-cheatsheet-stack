/**
 * https://noroff-content.gitlab.io/feu/javascript-2/array-method-chaining.html
 * Chaining array methods
 * combining the array methods allows to perform complex operations with little effort.
 */

const values = [1,2,3,4,5];
//const result = values   
 //     .filter
 //     .reduce
 //     .map

// example:
// calculating discount for products in stock
// formula for discounting price:
// discount = price - (discount % / 100) * price

const discountPercantage = 20;
const products = [
{ name: 'Milk', price: 5.0, inStock: true },
{ name: 'Cheese', price: 10.0, inStock: true },
{ name: 'Bread', price: 8.0, inStock: false },
{ name: 'Beans', price: 3.0, inStock: true },
{ name: 'Eggs', price: 12.0, inStock: true },
{ name: 'Rice', price: 4.0, inStock: false },
{ name: 'Meat', price: 25, inStock: true },
{ name: 'Coffee', price: 12.0, inStock: true },
{ name: 'Tea', price: 8.0, inStock: false },
{ name: 'Bottled Water', price: 4.0, inStock: false },
];

const discountedProducts = products
        .filter((product) => {
            if(product.inStock === true && product.price >= 5){
                return true;
            }
        })
        .map((product) => {
            product.discountedPrice = product.price - (discountPercantage / 100) * product.price;
            return product;
        });

    console.log(discountedProducts)