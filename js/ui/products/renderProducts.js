export function renderProducts(products){
    const htmlProducts = products.map(createProduct);
    console.log("html products", htmlProducts);
    const productContainer = document.querySelector("#container");
    productContainer.append(...htmlProducts)
}

function createProduct(product) {
    const div = document.createElement("div")
    div.className = "products";
    const title = document.createElement("h2")
    title.textContent = product.name;
    div.appendChild(title);
    return div;

}