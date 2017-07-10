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
