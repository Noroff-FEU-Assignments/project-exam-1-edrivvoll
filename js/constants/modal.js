
const images = document.querySelectorAll("figure img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const close = document.querySelector(".close");


document.querySelectorAll("figure img").forEach(image => {
    image.addEventListener("click", (click) => {       
        modalImg.src = image.src;
        modal.style.display = "block";
        click.stopPropagation();
    });
});

close.addEventListener("click", () => {
    modal.style.display = "none";
   
});

document.addEventListener("click", (click) => {
    if (click.target === modal) {
        modal.style.display = "none"; 
    }
});



