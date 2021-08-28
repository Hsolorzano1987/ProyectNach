var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }
   
  for (let i = 0; i < slides.length; i++){
      slides[i].style.display = "none";  
  }  
}