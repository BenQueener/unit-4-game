//Make an object with all the characters and thier attributes
var transformers = {
        bumblebee : {
            healthpoints: 100,
            attackpower : 10,
            counterattackpower :5,
            imageUrl : "assets/images/bumblebee.jpg"
        },
        jazz : {
            healthpoints: 100,
            attackpower : 20,
            counterattackpower :15,
            imageUrl : "assets/images/jazz.jpg"
        },
        rachet : {
            healthpoints: 200,
            attackpower : 15,
            counterattackpower :10,
            imageUrl : "assets/images/rachet.jpg"
        },
        skywarp : {
            healthpoints: 100,
            attackpower : 20,
            counterattackpower : 20,
            imageUrl : "assets/images/skywarp.jpg"
            },
        soundwave : {
            healthpoints: 75,
            attackpower : 10,
            counterattackpower :20,
            imageUrl : "assets/images/soundwave.jpg"
            },
        shockwave : {
            healthpoints: 50,
            attackpower : 25,
            counterattackpower :25,
            imageUrl : "assets/images/shockwave.jpg"
            }
}



 $(document).ready(function(){
     $(".bg").css("background-image", "url('assets/images/unicron.webp')");
 });