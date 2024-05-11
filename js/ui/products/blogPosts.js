import { base_url } from "../../constants/api.js";

function displayError(message = "Unknown ERROR!"){
    return `<div class="error">${message}</div>`
};

let page = 1;

const container = document.querySelector(".blog-container");
const viewMorePosts = document.querySelector(".view-more-posts");
container.innerHTML="";

export async function blogPost(){
    try{

    
    const postPerPage = 10;
    const response = await fetch(`${base_url}?_embed&per_page=${postPerPage}&page=${page}`);
    const json = await response.json();
    
    
    
    if(json.length < postPerPage){
        viewMorePosts.style.display = "none";
    } 
    
    
    json.forEach(json => {
        let imgUrl = json._embedded['wp:featuredmedia']['0'].source_url;
        container.innerHTML += `
        <a href="blog_specific.html?id=${json.id}">
        <div class="card-item" >
        
            <div class="card-img" style="background-image: url(${imgUrl})"></div>
            <div class="c">
                <h2>${json.title.rendered}</h2>
                <p>${json.excerpt.rendered}</p>         
            <a class="card-btn cta" href="blog_specific.html?id=${json.id}">View Blog Post</a>
            </div> 
        </div>
        </a>
        `;
    });
            
    page++;
    }
catch(error){
    container.innerHTML = displayError();
}

}; 
blogPost();

document.querySelector('.view-more-posts').addEventListener('click', () => {
    blogPost();
});