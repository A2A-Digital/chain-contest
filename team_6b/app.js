// for testimonail
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// for header
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".l_nav__items");
const links = document.querySelectorAll(".l_nav__items li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

const navLink = document.querySelectorAll('.c_item');

function linkAction(){
    navLinks.classList.remove('open');
    links.forEach(link => {
        link.classList.toggle("fade");
      });
}
navLink.forEach( n => n.addEventListener('click', linkAction));