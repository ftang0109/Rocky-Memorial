// function to run when there is mouse cursor over the logo icon, enlarge it (by adding inline CSS) and shake it afterward.

$(".navbar-header-logo").on("mouseover",function(){

    //console.log($(".navbar-header-logo").attr("src"));
    //$(".navbar-header-logo").addClass("enlargelogo");
    //$(".navbar-header-logo").effect("shake",10,2);
    //setTimeout(function(){$(".navbar-header-logo").effect("shake",10,2);},500);
    //$(".navbar-header-logo").effect("shake",10,1);
    //setTimeout(function(){$(".navbar-header-logo").effect("shake",10,1);},5000);
    //setTimeout(function(){$(".navbar-header-logo").addClass("enlargelogo");},100);

    $(".navbar-header-logo").animate({
        height:100,
        width:100,
        margin:0
      }, 500, function() {
        // Animation complete.
       $(".navbar-header-logo").effect("shake",10,1);
      });
    
});

// function to run when there is mouse cursor has left the logo icon, remove all inline css
$(".navbar-header-logo").on("mouseleave",function(){

    $(".navbar-header-logo").attr("style","");

});



