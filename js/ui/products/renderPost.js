import { base_url } from "../../constants/api.js";


export async function renderPost(){
    const response = await fetch(base_url + "?_embed&per_page=100&populate=*");
    const json = await response.json();
    
    const card = document.querySelector(".slider-width");
    
    console.log(json.length)
    
    for(let i = 0; i < json.length; i++){
        console.log(json[i].title.rendered)
        card.innerHTML += `
        <div class="item">${json[i].title.rendered}</div>
        
        `;
        console.log("link : " + json._links["wp:attachment"][0].href);
        /* let bgImg = document.getElementsByClassName("item").style.backgrund-image;
        bgImg = json[1]._link["wp:attachment"][0].href;
        console.log(bgImg); */
    }

    
}







/* const response = await fetch(bas);
    const results = await response.json();
    cont.innerHTML = `<div class="lds - ring"><div></div><div></div><div></div><div></div></div>`;

    for (let i = 0; i < results.length; i++) {
        if (results[i].attributes[0].terms[0].name.toLowerCase() === cont.className.split(" ")[0]) {
            
            price = results[i].prices.price / 100
            if (results[i].onSale) {
                price = results[i].prices.sale_price
            }
            
            cont.innerHTML += `
            <li>
            <a href="products/product.html?id=${results[i].id}">
                <img 
                    src="${results[i].images[0].src}"
                    alt = "${results[i].name}"
                    class="carousel_img full_img" title = "${results[i].name}. ${results[i].images[0].alt} NOK: ${price},-" /> 
            <img
            src="${results[i].images[0].src}"
            alt="${results[i].name}"
            class="carousel_img cut_img" title="${results[i].name}. ${results[i].images[0].alt} NOK: ${price},-" />
            </a >
            </li > `
        }
    } */