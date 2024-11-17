import { Product } from './06-functions-destructuring';
import { taxCalculation } from './06-functions-destructuring';


const shoppingCart: Product []=[
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {

        description: 'iPad',
        price: 250.0
    }


];

const [total, tax] = taxCalculation({
        products:shoppingCart, 
        tax:0.15 
});
console.log("Total: ", total);
console.log("Tax: ", tax);