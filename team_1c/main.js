//Naviagation Bar
window.addEventListener("scroll", function(){
    const navBar = document.querySelector("nav");
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight >navbarHeight){
        navBar.classList.add('component_sticky');
    }else{
        navBar.classList.remove("component_sticky");
    }
});
 
const menuItem = document.querySelectorAll(".component_links li");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        const activeClass = document.querySelector(".component_active");
        activeClass.className = activeClass.className.replace("active", "");
        item.className += 'component_active';
    });
});
const slides = document.querySelectorAll(".component_slide ");
const preBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector ("#nextBtn");
const indicatorParent = document.querySelector('.component_dot '); 
const indicators = document.querySelectorAll('.component_dot li');
let index = 0;

slides.forEach(function(slide, index){
    slide.style.left= `${index*100}%`;
});
// function for swipe 
function carousel(){
    if (index === slides.length){
        index = 0;
    }
    if (index < 0 ){
        index = slides.length -1 ;
    }
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });
    document.querySelector('.component_dot .component_selected').classList.remove('component_selected');
    indicatorParent.children[index].classList.add('component_selected');
}
// Slider
function autoslide(){
    index++;
    carousel();
    setTimeout(autoslide, 5000);
};

autoslide();

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });
    document.querySelector('.component_dot .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    });
});

nextBtn.addEventListener("click" ,function(){
    index++;
    carousel();


});
preBtn.addEventListener("click" ,function(){
    index--;
    carousel();

});