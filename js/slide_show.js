/*--------------------------------------------*/
/*-------------------slider-------------------*/
/*--------------------------------------------*/

//the initial slide position is set -- set to slide 1
let slideIndex = 1;
showSlides(slideIndex);

//this increments the slideIndex value
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//an onclick event executes this function
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// this makes the slide change automatically every 2,5 seconds
let change = setInterval(slide, 2500);
  function slide(){
    plusSlides(1)
  }

function showSlides(n) {
  //i is set to underfined but it has to exist for the rest of the code to work
  let i;
  //getting all slides and dots with the respective class name, the variable is automatically made into an array
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // since the slideIndex keeps on incrementing, eventually when it reaches the end, it will exceed the number of slides and the slide will continue pointlessly -- thats why it needs to be set bak to the starting point
  if (n > slides.length) {
    slideIndex = 1
  }

  //a loop is used to hide all images
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //the active class is disabled
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //slide index is originally 1, but the arrays starts from 0 thats why 1 is being subtracted
  slides[slideIndex-1].style.display = "block";
  //a class is being added
  dots[slideIndex-1].className += " active";
}