$(document).ready(function() {
//Declare global variables
var wins = 0;
var losses = 0;
var blueCrystal = 0;
var orangeCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;
var crystalValue = 0;

function addCrystalValue(value){
    crystalValue += value
    $("#crystalValues").html(crystalValue);
}


//Create a random number generator
var randomNumber = Math.floor(Math.random()*50);

//Display the random number
$("#random-number").append(randomNumber);

//create a random number generator in a for loop looping four times
for(var i = 0; i < 4; i++);{
    var random1 = Math.floor(Math.random()*10);
    var random2 = Math.floor(Math.random()*10);
    var random3 = Math.floor(Math.random()*10);
    var random4 = Math.floor(Math.random()*10);
}


//assign those numbers to the crystals
$("#picture-1").on("click",function(){
blueCrystal = random1;
addCrystalValue(blueCrystal);
alert(blueCrystal);
});

$("#picture-2").on("click",function(){
    greenCrystal = random2;
    addCrystalValue(greenCrystal);
    alert(greenCrystal);
});
$("#picture-3").on("click",function(){
    yellowCrystal = random3;
    addCrystalValue(yellowCrystal);
    alert(yellowCrystal);
});
$("#picture-4").on("click",function(){
    orangeCrystal = random4;
    addCrystalValue(orangeCrystal);
    alert(orangeCrystal);
    });
    //make an on click event that adds those values to their score display their score
    $(document).on("click",function(){
    $("#score-box").html(crystalValue);
    //make a wins and losses if statements
    if(crystalValue === randomNumber){
        wins++;
        $("#wins").html(wins);
        alert("You Win!")
        reset()
    }
    if(crystalValue > randomNumber){
        losses++;
        $("#losses").html(losses);
        alert("You Lost!");
        reset();
    }
    
    

});
function reset(){
    blueCrystal = 0;
    orangeCrystal = 0;
    greenCrystal = 0;
    yellowCrystal = 0;
    crystalValue = 0;
    crystalValue = 0;
    randomNumber = Math.floor(Math.random()*50);
    random1 = Math.floor(Math.random()*10);
    random2 = Math.floor(Math.random()*10);
    random3 = Math.floor(Math.random()*10);
    random4 = Math.floor(Math.random()*10);
    $("#random-number").html(randomNumber);
    
}


});








