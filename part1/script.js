//1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(() => console.log("Let’s get ready to party with jQuery!"));

//2
const $artImg = $('article img').addClass("image-center")

//3
$("p").last().remove();

//4
$("#title").css("font-size", Math.floor(Math.random(0)*101))

//5 
$("ol").append("<p>pup in cup</p>")

//6 
$("aside").html("<p>Sorry!</p>")

//7 
$("input").on("mouseleave", function(){
    $("body").css("background-color", "rgb(" + $("input").eq(0).val() + ","
    + $("input").eq(1).val() + "," + $("input").eq(2).val() + ")")
})

// 8 

$("img").click(function(){
    $(this).remove();
});