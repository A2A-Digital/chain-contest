/* ------------- Responsive Toggle Menu ------------------*/

var MenuItem = document.getElementById("MenuItem");

MenuItem.style.maxHeight = "0px";

function menutoggle(x) {
  	x.classList.toggle("change");
	
	if (MenuItem.style.maxHeight == "0px")
		{
			MenuItem.style.maxHeight = "200px";
		}
	else
		{
		MenuItem.style.maxHeight = "0px";
	}
	
}

/*---------------------- Slide-bar --------------------*/

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
  var slides = document.getElementsByClassName("slider-container");
  var dots = document.getElementsByClassName("adot");
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

