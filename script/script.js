/*################# navbar ########################################### */
/************* menu tab ***************************/
$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".bar1").toggleClass('bar1_2');
        $(".bar2").toggleClass('bar2_2');
        $(".bar3").toggleClass('bar3_2');
    })
})

/************* navbar animation ***************************/
$(document).ready(function() {
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 70) {
            $(".navbar-default").stop(true).animate({ backgroundColor: "rgb(0,0,0,.8)", padding: "10px" }, '50');  /** need jquery-ui */
            $(".navbar-default").css("box-shadow", "0 3px 3px 0 rgba(0, 0, 0, 0.2)");
        } else {
            $(".navbar-default").stop(true).animate({ backgroundColor: "transparent", padding: "30px" }, '50');
            $(".navbar-default").css("box-shadow", "none");
        }
    });
});

/************* return to top when refresh ***************************/
/* 
  window.scrollTo(0, 0);
} */

/*################# Readmore ########################################### */
$(document).ready(function(){
    $(".read_more").click(function(){
        $("#more").slideToggle();
    })
})

/*################# overley ########################################### */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

/*################# smooth animation ########################################### */
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})