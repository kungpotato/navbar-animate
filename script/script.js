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
        if ($(document).scrollTop() > 0) {
            $(".navbar-default").animate({ backgroundColor: "white" }, '300');  /** need jquery-ui */
            $(".navbar-default").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
            $(".navbar-default").css("padding-top","10px")
        } else {
            $(".navbar-default").stop(true).animate({ backgroundColor: "transparent" }, '300');
            $(".navbar-default").css("box-shadow", "none");
            $(".navbar-default").css("padding-top","50px")
        }
    });
});