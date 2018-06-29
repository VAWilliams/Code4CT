/*--------------------------------------------*/
  /*----------------buttons-----------------*/
/*--------------------------------------------*/

$("button").hover(function expand() {
    $(this).animate({width: "125px"}, 200)
  })
  $("button").mouseleave(function detract() {
    $(this).animate({width: "110px"}, 130)
  })