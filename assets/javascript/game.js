var orange = 0;
var purple = 0;
var turquise = 0;
var pink = 0;
var wins = 0;
var losses = 0;
var targetScore = 0;
var currentScore = 0;

// when doc is ready, start the function
$(document).ready(function() {

//score tracker
    function score(){
        $("#currentScore").html(currentScore);
    };

//funtions
    function reset() {

//random number - target score between 19 and 120
        var targetScore = Math.floor(Math.random() * 101) + 19;
        console.log("Target Score: " + targetScore);
        
//give a crystals value between 1 - 12 - show on console log crystal val
        orange = Math.floor(Math.random() * 12) + 1;
        console.log("Orange Value : " + orange);

        purple = Math.floor(Math.random() * 12) + 1;
        console.log("Purple Value : " + purple);

        turquise = Math.floor(Math.random() * 12) + 1;
        console.log("Turquise Value : " + turquise);

        pink = Math.floor(Math.random() * 12) + 1;
        console.log("Pink Value : " + pink);

        currentScore = 0;
        $("#currentScore").html(currentScore);
        $("#targetScore").html(targetScore);

    };
    reset();

    function startGame(value){
        currentScore += value;
        score();
    
// check for win or lose
        if  (currentScore > targetScore) {
            losses++;
            $("#lossesTxt").html(losses);
            reset();
        }
        else if (currentScore === targetScore) {
            wins++
            $("#winsTxt").html(wins);
            reset();
        }
    };

// on clicks sum scores to target
    $("#orange").on('click', function(){
        startGame(orange);
    });
    $("#purple").on('click', function(){
        startGame(purple);   
    });
    $("#turquise").on('click', function(){
        startGame(turquise);
    });
    $("#pink").on('click', function(){
        startGame(pink);
    });
});


