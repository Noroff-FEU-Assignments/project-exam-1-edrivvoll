/* const images = document.querySelectorAll("img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const close = document.querySelector(".close");


for(image of images){
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.classList.add("appear");

        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
}; */


const images = document.querySelectorAll("figure img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const close = document.querySelector(".close");

for (const image of images) {
    image.addEventListener("click", (event) => {
        const clickedImage = event.currentTarget;
        modalImg.src = clickedImage.src;
        /* modal.classList.add("appear"); */
        modal.style.opacity = .5;
    });
}

close.addEventListener("click", () => {
    modal.classList.remove("appear");
});

// Attach event listener to the document
document.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("appear");
    }
});
