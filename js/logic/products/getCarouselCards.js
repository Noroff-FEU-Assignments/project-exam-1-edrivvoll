/* import { fetchProducts } from "../../api/products/fetchProducts.js";
import { renderProducts } from "../../ui/products/renderPost.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function getCarouselCards() {
    try {
        const products = await fetchProducts();
        renderPost(products);
        
    } catch(error) {
        // console.error(error);
        // TODO: display error
        displayMessage("#container", error, "error")
    }
} */