$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -100
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash+50;
      });
    } // End if
  });
});
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 86){
    $("#banner").addClass("shrink");
  }
  else
  {
    $("#banner").removeClass("shrink");
  }
});
$(document).ready(function(){
$('.navbar_call_order').on('click',function(){
  $('.overlay-popup').fadeIn( "slow")
});
$(document).on("click", function(){
  $('#overlay-popup').fadeOut( "slow")
});
});
new WOW().init();

$(document).ready(function(){
$(".input-phone").mask("+7 (999) 999-99-99");
});
