$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $("header").css({"background-color":"#fff","box-shadow":"0 0 1vw 1px rgba(0, 0, 0, 0.2)"});
    }
    else{
      $("header").css({"background-color":"none","box-shadow":"none"});  
    }
  })
})

function openNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "300px";
}

function closeNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "0";
}