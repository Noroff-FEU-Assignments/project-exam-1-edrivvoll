import { fetchProducts } from "../../api/products/fetchProducts.js";
import { renderProducts } from "../../ui/products/renderProducts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function getProducts() {
    try {
        const products = await fetchProducts();
        renderProducts(products);
        
    } catch(error) {
       
        displayMessage("#container", error, "error")
    }
}