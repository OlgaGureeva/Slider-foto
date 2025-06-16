'use strict'

//let fotoFirst = document.getElementById("first")
//let fotoSecond = document.getElementById("second")
//let fotoThird = document.getElementById("third")

let images = [{
    URL: "./png/chairs-by-window.png",
    title: "Chairs by the window"
}, {
    URL: "./png/tv-zone.png",
    title: "TV zone"
}, {
    URL: "./png/Combined kitchen-living space.png",
    title: "Combined kitchen-living space"
}]

function initSlider() {
 if (!images || !images.length) return;

 let sliderImages = document.querySelector(".content-box__slider");
 let sliderArrows = document.querySelector(".content-box__arrows");
 let sliderDots = document.querySelector(".content-box__dots");
 let sliderTitle = document.querySelector(".content-box__titles");

 initImages();
 initArrows();
 initDots();
 initTitles();

 function initImages() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" 
            : ""}" style="background-image:url('${images[index].URL}');" data-index = "${index}"></div>`;
    sliderImages.innerHTML = sliderImages.innerHTML + imageDiv;
    })
 }

function initArrows() {
    sliderArrows.querySelectorAll(".content-box__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")){
                nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
                nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
        });
    });
}

function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index ===0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
            sliderDots.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        })
    })
}

function initTitles () {
    sliderTitle.querySelectorAll(".titles__item").forEach(title => {
        title.addEventListener("click", function() {
            let curTitle = +sliderImages.querySelector(".active").dataset.index;
            let nextTitle;
            if (title.classList.contains("first")) {
                nextTitle = curTitle ===0? images.length - 1 : curTitle - 1;
            } else {
                nextTitle = curTitle === images.length - 1? 0 : curTitle + 1;
            }
            moveSlider (nextTitle);

        })
    })
        
}

function moveSlider (num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
}

}

document.addEventListener("DOMContentLoaded", () => {
    initSlider()
});