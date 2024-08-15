let first__left = document.querySelector("#first-left");
let first__right = document.querySelector("#first-right");
let second__left = document.querySelector("#second-left");
let second__right = document.querySelector("#second-right");
let f__container = document.querySelector(".first-container");
let s__container = document.querySelector(".second-container");
let Sign__In__button = document.querySelector(".s-in");
let Sign__Up__button = document.querySelector(".s-up");
let a = 10;

Sign__Up__button.addEventListener("click",()=>{
    a += 1;
    first__left.style.bottom = "100%";
    first__left.style.left = 0;
    first__right.style.top= "100%";
    second__left.style.top = 0;
    second__right.style.bottom = 0;
    f__container.style.backgroundColor = "transparent";
    s__container.style.backgroundColor = "white";
    s__container.style.zIndex = a;
});
Sign__In__button.addEventListener("click",()=>{
    a += 1;
    first__left.style.top = 0;
    first__right.style.top= 0;
    second__left.style.top = "100%";
    second__right.style.bottom = "100%";
    s__container.style.backgroundColor = "transparent";
    f__container.style.backgroundColor = "white";
    f__container.style.zIndex = a;
});
