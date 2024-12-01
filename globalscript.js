document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevModalBtn = document.querySelector(".modal-prev");
    const nextModalBtn = document.querySelector(".modal-next");

    let currentImageSet = [];
    let currentImageIndex = 0;

    document.querySelectorAll(".images").forEach((img) => {
        img.addEventListener("click", () => {
            currentImageSet = Array.from(img.closest(".imageSlides").querySelectorAll(".images"));
            currentImageIndex = currentImageSet.indexOf(img);
            modalImage.src = img.src;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    prevModalBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + currentImageSet.length) % currentImageSet.length;
        modalImage.src = currentImageSet[currentImageIndex].src;
    });

    nextModalBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % currentImageSet.length;
        modalImage.src = currentImageSet[currentImageIndex].src;
    });

//image slides buttons
    document.querySelectorAll(".eventBox").forEach((eventBox) => {
        const images = eventBox.querySelectorAll(".images");
        let currentSlideIndex = 0;

        const showSlide = (index) => {
            images.forEach((img, idx) => {
                img.style.display = idx === index ? "block" : "none";
            });
        };

        const prevBtn = eventBox.querySelector(".prev1, .prev2");
        const nextBtn = eventBox.querySelector(".next1, .next2");

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener("click", () => {
                currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
                showSlide(currentSlideIndex);
            });

            nextBtn.addEventListener("click", () => {
                currentSlideIndex = (currentSlideIndex + 1) % images.length;
                showSlide(currentSlideIndex);
            });

            showSlide(currentSlideIndex); 
        }
    });
});