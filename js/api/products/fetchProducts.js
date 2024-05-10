import { base_url } from "../../constants/api.js";

export async function fetchProducts() {
    const response = await fetch(base_url);
    const json = await response.json();

    if (!response.ok) {
        throw new Error(products.message);
    }
    return json;
}