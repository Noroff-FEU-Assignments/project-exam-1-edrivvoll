import { base_url } from "../../constants/api.js";
// should: 1. make api call, 2. if sucsess, return json, 3. otherwise show error

export async function fetchProducts() {
    const response = await fetch(base_url);
    const json = await response.json();

    if (!response.ok) {
        throw new Error(products.message);
    }
    return json;
}