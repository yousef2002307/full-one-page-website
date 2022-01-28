$(document).ready(function(){
 
 $(".qa i").click(function(){
    if($(this).hasClass("fa-chevron-up")){
        $(this).parents(".header").siblings(".footer").slideUp(300);
        $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }else{
$(this).parents(".header").siblings(".footer").slideDown(300);
$(".qa i").not(this).parents(".header").siblings(".footer").slideUp(300);
$(this).addClass("fa-chevron-up");
$(this).removeClass("fa-chevron-down");
$(".qa i").not(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
 });

 $("footer p a").click(function (e) { 
     e.preventDefault();
     $("html,body").animate({
         scrollTop : 0
     },1000);
     
 });
});









