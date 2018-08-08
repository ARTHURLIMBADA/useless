document.addEventListener("DOMContentLoaded", function() {
var isSkullCrack = false;

var brainSquish = new Audio();
brainSquish.src = "sound.mp3";

var crack = new Audio();
crack.src = "cracks.mp3";

$(".parent").on("click", function(){
    if (isSkullCrack == true) {
    	$(".brain").addClass("vibrate");
    	setTimeout(function(){
    		$(".brain").removeClass("vibrate");
    	},1000);
        brainSquish.play();
    }
    else {
       crack.play(); 
    }
    $(".skull2").addClass("animated rotateOutDownLeft");
    $(".skull1").addClass("animated rotateOutUpLeft");
    (isSkullCrack = true);
  });














});