const userScore = 0;
const compScore = 0;
var count = 0;
var count2 = 0;
const showUserScore = document.getElementById("user-score");
const showComputerScore = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// gets a random computer choice 0,1 or 2
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    var num = Math.floor((Math.random()*3));
    console.log(choices[num]);

    return choices[num];
    }



function game(userChoice){
const computerChoice = getComputerChoice();
//console.log(userChoice);
//console.log(computerChoice);
if (userChoice == 'r' && computerChoice == 'p'){
    console.log('computer wins');
    document.getElementById("result").innerHTML = "computer wins"
}
if (userChoice == 'p' && computerChoice == 's'){
    console.log('computer wins');
    document.getElementById("result").innerHTML = "computer wins"
}
if (userChoice == 's' && computerChoice == 'r'){
    console.log('computer wins');
    document.getElementById("result").innerHTML = "computer wins"
}
if (computerChoice == 'r' && userChoice == 'p'){
    console.log('user wins');
    document.getElementById("result").innerHTML = "user wins"
}
if (computerChoice == 'p' && userChoice == 's'){
    console.log('user wins');
    document.getElementById("result").innerHTML = "user wins"
}
if (computerChoice == 's' && userChoice == 'r'){
    console.log('user wins');
    document.getElementById("result").innerHTML = "user wins"
}
console.log(document.getElementById("result").innerHTML);

if (document.getElementById("user-score").innerHTML == 3)
{
document.getElementById("user-score").innerHTML = 0;
document.getElementById("computer-score").innerHTML = 0;
count = 0;
count2 = 0;
alert("game over");
}
  
if (document.getElementById("computer-score").innerHTML == 3){
    document.getElementById("computer-score").innerHTML = 0;
    document.getElementById("user-score").innerHTML = 0;
    count = 0;
    count2 = 0;
    alert("game over"); 
}

// changing the score for the user

if (document.getElementById("result").innerHTML == "user wins") {
    count++;
    document.getElementById("user-score").innerHTML  = count;
}

// changing the score for the computer 

if (document.getElementById("result").innerHTML == "computer wins") {
    count2++;
    document.getElementById("computer-score").innerHTML  = count2;
}


}




// receive user input for rock paper or scissors and pass it to the game method
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
       })
       
       paper_div.addEventListener('click', function(){
       game("p");
       })
       
       scissors_div.addEventListener('click', function(){
       game("s");
       })
}

main();
getComputerChoice();



