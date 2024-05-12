import { base_url } from "../../constants/api.js";

function displayError(message = "Unknown ERROR!"){
    return `<div class="error">${message}</div>`
};

export async function renderPost(){
    try{

    
    const response = await fetch(base_url + "?_embed&per_page=100");
    const json = await response.json();
    
    const card = document.querySelector(".slider");
    const item = document.querySelector(".item");
    
    card.innerHTML = "";
    
    json.forEach(json => {
        let imgUrl = json._embedded['wp:featuredmedia']['0'].source_url;
        card.innerHTML += `
        
        <div class="item" style="background-image: url(${imgUrl})">
            <a href="blog_specific.html?id=${json.id}">
        <h2>${json.title.rendered}</h2> 
            <div class="hover">
                <p>${json.excerpt.rendered}</p>
            </div> </a>       
        </div>
        
        `;
        
    });
    }
        catch(error){
            card.innerHTML = displayError();
        }

 };