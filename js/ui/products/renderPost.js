/* export function renderPost(products){
    const htmlProducts = products.map(createProduct);
    console.log("html products", htmlProducts);
    const productContainer = document.querySelector(".slider-width");
    productContainer.innerHTML = "";
    productContainer.append(...htmlProducts)
}

function createProduct(product) {
    const div = document.createElement("div")
    div.className = "item";
    const title = document.createElement("h2")
    title.textContent = product.title.rendered;
    div.append(title);
    return div;
} */
/* 
import { fetchProducts } from "../../api/products/fetchProducts";

export async function renderPost(){
    const blog = await fetchProducts();
    const div = document.querySelector(".slider-width");
    console.log(blog);
} */