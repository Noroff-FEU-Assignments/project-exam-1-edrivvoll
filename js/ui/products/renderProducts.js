export function renderProducts(products){
    const htmlProducts = products.map(createProduct);
    console.log("html products", htmlProducts);
    const productContainer = document.querySelector("#container");
    productContainer.innerHTML = "";
    productContainer.append(...htmlProducts)
}

function createProduct(product) {
    const div = document.createElement("div")
    div.className = "products";
    const title = document.createElement("h2")
    title.textContent = product.name;
    div.append(title);
    return div;

}