import { fetchProducts } from "../api/products/fetchProducts.js";
import { getProducts } from "../logic/products/getProducts.js";
import { renderPost } from "./products/renderPost.js";
/* import { renderPost } from "../ui/products/renderPost.js"; */

getProducts();
/* renderPost(); */

renderPost();
