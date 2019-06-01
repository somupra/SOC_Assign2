var index = 1;
showSlides(index);

function change(event){
    if(event.button == 0) plusSlides(1);
    else if(event.button == 2)plusSlides(-1);
}

function plusSlides(n) {
  showSlides(index += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "block";  
}