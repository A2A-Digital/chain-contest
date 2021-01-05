
const images = document.querySelectorAll('.l_box');
const pre = document.querySelector('.c_pre');
const next = document.querySelector('.c_next');
const dots = document.querySelectorAll('.c_dot');
let slideIndex = 0;
showSlide(slideIndex);
function showSlide(n){
    if(slideIndex > images.length-1){
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = images.length-1;
    }
    let i;
    for(i=0; i<images.length; i++){
        images[i].style.display = "none";
    }
    images[slideIndex].style.display = "flex";
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(' active',"");
    }
    dots[slideIndex].className += ' active';
}
pre.addEventListener('click',()=>{
    showSlide(slideIndex -= 1);
})
next.addEventListener('click',()=>{
    showSlide(slideIndex += 1);
})
dots.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        showSlide(slideIndex = index);
    })
})

// sticky navbar
window.addEventListener("scroll",()=>{
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 20)
})