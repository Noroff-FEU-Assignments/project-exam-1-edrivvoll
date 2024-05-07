export function carousel(){
    const carousel = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-button");
    const nextBtn = document.querySelector(".next-button");

    let counter = 0;

    nextBtn.addEventListener("click", () => {
        counter+=3;
        carousel.style.transform = `translateX(-${counter * 33.333}%)`;
            if (counter === 12) {
            counter = 0;
            carousel.style.transform = `translateX(0)`;
            }
        }
    );

    prevBtn.addEventListener("click", () => {
        counter-=3;
            if (counter < 0) {
            counter = 9;
            carousel.style.transform = `translateX(-${counter * 33.333}%)`;
            } else {
            carousel.style.transform = `translateX(-${counter * 33.333}%)`;
            }
        }
    );
}