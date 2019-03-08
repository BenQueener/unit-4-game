

//Make an object with all the characters and thier attributes
var transformer = {
        bumblebee : {
            name: "Bumblebee",
            healthpoints: 100,
            attackpower : 10,
            counterattackpower :5,
            imageUrl : "assets/images/bumblebee.jpg"
        },
        jazz : {
            name: "Jazz",
            healthpoints: 100,
            attackpower : 20,
            counterattackpower :15,
            imageUrl : "assets/images/jazz.jpg"
        },
        rachet : {
            name: "Rachet",
            healthpoints: 200,
            attackpower : 15,
            counterattackpower :10,
            imageUrl : "assets/images/rachet.jpg"
        },
        skywarp : {
            name: "Skywarp",
            healthpoints: 100,
            attackpower : 20,
            counterattackpower : 20,
            imageUrl : "assets/images/skywarp.jpg"
            },
        soundwave : {
            name: "Soundwave",
            healthpoints: 75,
            attackpower : 10,
            counterattackpower :20,
            imageUrl : "assets/images/soundwave.jpg"
            },
        shockwave : {
            name:"Shockwave",
            healthpoints: 50,
            attackpower : 25,
            counterattackpower :25,
            imageUrl : "assets/images/shockwave.jpg"
            }
}

//make global variables
yourTransformer = 0;
opponentTransformer = 0;

//make functions to place the transformers in the right place in the game
//hide opponents and chosen
//$(".robot-image").hide(".arena");




//make a function that carrys out the logic of the game once the attack button is pressed
//What happens when we attack
//What happens when they attack
//What happens when they die
//   and there are still opponents left
//   and there are no opponents left (we win)
//What happens when we loose

//function to display all the availabe robots.
// var renderCharacters = function(charObj, areaRender) {
//     //render all characters
//     if (areaRender == '#characters-section') {
//       $(areaRender).empty();
//       for (var key in transformer) {
//         if (transformer.hasOwnProperty(key)) {
//           renderOne(charObj[key], areaRender, '');
//         }
//       }
//     }


// //function to make your character and put it in a render area 
// var renderOne = function(character, renderArea, makeChar) {
//     //character: obj, renderArea: class/id, makeChar: string
//     var charDiv = $("<div class='character' data-name='" + transformer.name + "'>");
//     var charName = $("<div class='character-name'>").text(transformer.name);
//     var charImage = $("<img alt='image' class='character-image'>").attr("src", transformer.imageUrl);
//     var charHealth = $("<div class='character-health'>").text(transformer.healthpoints);
//     charDiv.append(charName).append(charImage).append(charHealth);
//     $(renderArea).append(charDiv);
//     //Capitalizes the first letter in characters name
//     // $('.character').css('textTransform', 'capitalize');
//     // conditional render
//     if (makeChar == 'enemy') {
//       $(charDiv).addClass('enemy');
//     } else if (makeChar == 'defender') {
//       currDefender = character;
//       $(charDiv).addClass('target-enemy');
//     }
//   };

//$("#coin-image").html( "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'>") 

 $(document).ready(function(){
     $(".bg").css("background-image", "url('assets/images/unicron.webp')");
     $(".arena").hide();
    // $(".choosetransformer .bumblebee").hide();
 });