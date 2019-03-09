

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
yourHealth =0;
yourAttack=0;
theirHealth=0;
theirCounterattack=0;
attackCounter = 0;
enemiesleft = 2;



//initialize the game
$(document).ready(function() {
    $(".bg").css("background-image", "url('assets/images/unicron.webp')");

    function clickFight(){
        $('#userMessage').text('Click the attack button!!');
        
        $("#attack-button").on("click", function() {
            
            //Basic action of your attack
            //The attack amount is increased every time you attack
            theirHealth = theirHealth - (yourAttack + yourAttack*attackCounter);
            $(".currentOpponent ." + opponentTransformer).text(theirHealth);
            

            //Wnat do we do if we kill them
            if (theirHealth <= 0) {
                attackCounter++;
                $('#userMessage').text(opponentTransformer + " is dead!!");
                if (enemiesleft = 0) {
                    resetGame();    
                }
                else {
                    $(".currentOpponent ." + opponentTransformer).hide();
                    clickOpponent();  
                }
            }
            // What if we just wound them?  We update the message, the health reading and initate another attack round.
            else {
                $('#userMessage').text(opponentTransformer + " took " + (yourAttack + yourAttack*attackCounter) + " damage!!");
                $("." + currentOpponent + " .cardfooter").text(theirHealth);
                attackCounter++;
                clickFight();
            }
        });    
    };


    //function to reset or start the game
    function resetGame(){  
        attackCounter = 0;
        enemiesleft = 2; 
        //hide the right robots
        $(".availableOpponents").hide();
        $(".currentOpponent").hide();
        //initialize the health tracking
        $(".bumblebee .card-footer").text(transformer.bumblebee.healthpoints)  ;
        $(".jazz .card-footer").text(transformer.jazz.healthpoints) ;
        $(".soundwave .card-footer").text(transformer.soundwave.healthpoints) ;
        $(".skywarp .card-footer").text(transformer.skywarp.healthpoints) ;
        
        clickChampion();
        clickOpponent();
        clickFight();        
    }

    function clickChampion() {
        //Message user to click on the robot he chooses
        $("#userMessage").text("Click on a transformer to choose your champion!!");

        //click to set your transformer 
        $(".chooseTransformer .bumblebee").click(function(){ setChampion("bumblebee");});
        $(".chooseTransformer .jazz").click(function(){ setChampion("jazz");});
        $(".chooseTransformer .soundwave").click(function(){ setChampion("soundwave");});
        $(".chooseTransformer .skywarp").click(function(){ setChampion("skywarp");});
    }

    //set up the available transformers
    function setChampion(name)  {
    yourTransformer = name;
        if (yourTransformer === "bumblebee"){
            $(".chooseTransformer .jazz").hide();
            $(".chooseTransformer .soundwave").hide();
            $(".chooseTransformer .skywarp").hide();
            $(".availableOpponents").show();
            $(".availableOpponents .bumblebee").hide();
            yourHealth = transformer.bumblebee.healthpoints;
            yourAttack = transformer.bumblebee.attackpower;
        }
        else if (yourTransformer === "jazz"){
            $(".chooseTransformer .bumblebee").hide();
            $(".chooseTransformer .soundwave").hide();
            $(".chooseTransformer .skywarp").hide();
            $(".availableOpponents").show();
            $(".availableOpponents .jazz").hide();
            yourHealth = transformer.jazz.healthpoints;
            yourAttack = transformer.jazz.attackpower;
        }
        else if (yourTransformer === "skywarp"){
            $(".chooseTransformer .bumblebee").hide();
            $(".chooseTransformer .soundwave").hide();
            $(".chooseTransformer .jazz").hide();
            $(".availableOpponents").show();
            $(".availableOpponents .skywarp").hide();
            yourHealth = transformer.skywarp.healthpoints;
            yourAttack = transformer.skywarp.attackpower;
        } 
        else if (yourTransformer === "soundwave"){
            $(".chooseTransformer .bumblebee").hide();
            $(".chooseTransformer .jazz").hide();
            $(".chooseTransformer .skywarp").hide();
            $(".availableOpponents").show();
            $(".availableOpponents .soundwave").hide();
            yourHealth = transformer.soundwave.healthpoints;
            yourAttack = transformer.soundwave.attackpower;
        }
    
    }

    function clickOpponent() {
        //Message user to click on the first opponent
        $("#userMessage").text("Click on a transformer to choose your first opponent!!"); 

        //click to set your opponent 
        $(".availableOpponents .bumblebee").click(function(){ setOpponent("bumblebee");});
        $(".availableOpponents .jazz").click(function(){ setOpponent("jazz");});
        $(".availableOpponents .soundwave").click(function(){ setOpponent("soundwave");});
        $(".availableOpponents .skywarp").click(function(){ setOpponent("skywarp");});
    }

    //click to set your  opponent transformer 
    function setOpponent(name){

        if (name === "bumblebee"){
            opponentTransformer = "bumblebee";
            $(".currentOpponent").show();
            $(".currentOpponent .jazz").hide();
            $(".currentOpponent .soundwave").hide();
            $(".currentOpponent .skywarp").hide();
            $(".availableOpponents .bumblebee").hide();
            theirHealth = transformer.bumblebee.healthpoints;
            theirAttack = transformer.bumblebee.counterattackpower;
        }

        else if (name === "jazz"){
            opponentTransformer = "jazz";
            $(".currentOpponent").show();
            $(".currentOpponent .bumblebee").hide();
            $(".currentOpponent .soundwave").hide();
            $(".currentOpponent .skywarp").hide();
            $(".availableOpponents .jazz").hide();
            theirHealth = transformer.jazz.healthpoints;
            theirAttack = transformer.jazz.counterattackpower;
        }
        else if (name === "skywarp"){
            opponentTransformer = "skywarp";
            $(".currentOpponent").show();
            $(".currentOpponent .jazz").hide();
            $(".currentOpponent .soundwave").hide();
            $(".currentOpponent .bumblebee").hide();
            $(".availableOpponents .skywarp").hide();
            theirHealth = transformer.skywarp.healthpoints;
            theirAttack = transformer.skywarp.counterattackpower;
        }
        else if (name === "soundwave"){
            opponentTransformer = "soundwave";
            $(".currentOpponent").show();
            $(".currentOpponent .jazz").hide();
            $(".currentOpponent .bumblebee").hide();
            $(".currentOpponent .skywarp").hide();
            $(".availableOpponents .soundwave").hide();
            theirHealth = transformer.soundwave.healthpoints;
            theirAttack = transformer.soundwave.counterattackpower;
        }
    }

    resetGame();
});



// click  and the opponent gets revealed and hidden

//make a function that carrys out the logic of the game once the attack button is pressed
//What happens when we attack
//What happens when they attack
//What happens when they die
//   and there are still opponents left
//   and there are no opponents left (we win)
//What happens when we loose

//function to display all the availabe robots.


// //function to make your character and put it in a render area 


//$("#coin-image").html( "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'>") 
