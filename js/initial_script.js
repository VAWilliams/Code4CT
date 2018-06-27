/*--------------------------------------------*/
/*---------navbar+button+menu_display---------*/
/*--------------------------------------------*/

let burger = document.getElementById("burger")
burger.name = "closed";

let uList = document.getElementById("uList");

let one = document.getElementById("one");
let three = document.getElementById("three");

$("#burger").click(function menu() {
  if (burger.name == "closed") {
    $("#uList").animate({height:"200px"}, 1000)
    uList.style.borderTop = "2px rgb(215, 55, 107) solid";
    one.style.transform = "rotate(-144deg) translate(-12px, -16px)";
    $("#two").animate({opacity: "0"}, 500)
    three.style.transform = "rotate(-40deg) translate(12px, -15px)";
    burger.name = "open";

  } else {

    $("#uList").animate({height:"0"}, 1000)
    one.style.transform = "translate(0, 0)";
    $("#two").animate({opacity: "1"}, 1500)
    three.style.transform = "translate(0, 0)";
    uList.style.borderTop = "none";
    burger.name = "closed";
  }
})






/*--------------------------------------------*/
 /*----------------backToTop-----------------*/
/*--------------------------------------------*/


window.onscroll = function() {display()};
let backToTop = document.getElementById('backToTop');

function display() {
    if (window.pageYOffset >= 1000) {
        backToTop.style.transform = "translateX(-70px)";
        backToTop.style.opacity = "1";
    } else {
        backToTop.style.transform = "translateX(0px)";
    }
}

backToTop.onclick = function accend() {
    window.scrollTo({
        "top": document.getElementById('logo').offsetTop,
        "left": 0,
        "behavior": "smooth"
    });
}





/*--------------------------------------------*/
  /*----------------counter-----------------*/
/*--------------------------------------------*/

  let count = setInterval(incNum, 30);
  let s1 = 200; let s2 = 680;
  let s3 = 3020; let s4 = 8665;
  let i = 0;
  function incNum() {
    $("#counter1").html(s1 + "+");
    $("#counter2").html(s2 + "+");
    $("#counter3").html(s3 + "+");
    $("#counter4").html(s4 + "+");
    if (i >= 100) {
      clearInterval(count);
    }
    s1++; s2++; s3++; s4++; i++;
  };



/*--------------------------------------------*/
  /*----------------carousel-----------------*/
/*--------------------------------------------*/
for (let n = 1; n <= 16; n++) {
  $("#carItem" + n).css("margin-left", -955+(100*n) + "px")
}
//functionality for the carousel
let move = setInterval(frame, 1000);
//variable m represents the number of moves till an image in the carousel "loops"
let m = 0;
function frame() {
  // variable i is resonsible for shortening the amount of coding needed
  //as such, the incementation of i allows the same instruction to be given to each img via the concatination function made possible with jQuerie's id selection
  for (let i = 1; i <= 16; i++) {
    //there are only four images in this example
    if (m == 16) {
      $("#carItem" + i).animate({marginLeft: "660px"}, 0)
      m = 0;
    } else {
      $("#carItem" + i).animate({marginLeft:"-=100px"}, 2000)
      m++;
    }
  }
}
/*----------------------------------------------------------------------*/


/*--------------------------------------------*/
  /*----------------buttons-----------------*/
/*--------------------------------------------*/

$(".sectionButton").hover(function expand() {
  $(this).animate({width: "125px"}, 200)
})
$(".sectionButton").mouseleave(function detract() {
  $(this).animate({width: "110px"}, 130)
})
