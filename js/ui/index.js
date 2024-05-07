import { carousel } from "../constants/carousel.js";
import { getProducts } from "../logic/products/getProducts.js";
import { renderPost } from "./products/renderPost.js";

/* import { renderPost } from "../ui/products/renderPost.js"; */
carousel();
getProducts();
renderPost();



