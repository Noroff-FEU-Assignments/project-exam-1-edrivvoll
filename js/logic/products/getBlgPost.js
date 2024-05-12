
function displayError(message = "Unknown ERROR!"){
    return `<div class="error">${message}</div>`
};

const blogPost = document.querySelector(".blog-post");
const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");

 let url = "https://cms.drivvoll.no/wp-json/wp/v2/posts/"+id;

async function getBlogPost(){
    try{
    const response = await fetch(url);
    const json = await response.json();
    document.title = "Cake Haven | " + json.title.rendered;
    let jsonEmbed = url + "?_embed";
    let featImg =  json.featured_media_src_url;
   
    blogPost.innerHTML = "";
    blogPost.innerHTML = `
        <div class="blog_featured_img" style="background-image: url(${featImg})"></div>
        <div class="blog-spesific-container">
        <h1 class="blog-post-h1">${json.title.rendered}</h1>
        <p class="blog-post-p">${json.content.rendered}</p>
        </div>
    `
    }
    catch (error){
    blogPost.innerHTML = displayError();
    }
}

getBlogPost();