"use strict";


const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImg = document.getElementById("modalImg");
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";      
        modalImg.src = img.src.replace("/300/200", "/600/400"); 
    });
});


modal.addEventListener("click", () => {
    modal.style.display = "none";
});

modalContent.addEventListener("click", (event) => {
    event.stopPropagation(); 
});
