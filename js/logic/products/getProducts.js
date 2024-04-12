import { base_url } from "../../constants/api.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function getProducts() {
    try {
        const response = await fetch(base_url);
        const products = await response.json();
        console.log (products);
        renderProducts(products);
    }
    catch(error) {
        console.error(error);
        // TODO: display error
    }
}