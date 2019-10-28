var spielerScore = 0;
var computerScore = 0;
var spielerScore_span = document.getElementById("score_vom_user");
var computerScore_span = document.getElementById("score_vom_computer");
const scoreboard_div = document.querySelector(".score-board");
const ergebnis_div = document.querySelector(".Ergebnis > p");
const stein_div = document.getElementById("Stein_png");
const papier_div = document.getElementById("Papier_png");
const schere_div = document.getElementById("Schere_png");

function getComputerChoice() {
	var choices = [ 'Stein_png' ,'Schere_png' ,'Papier_png'];
	var randomNumber = Math.floor(Math.random() * 3)
	return choices[randomNumber];
};

var sound1 = new Audio();
sound1.src = "music/ooh_nochmal.mp3"
var sound2 = new Audio();
sound2.src = "music/wahuu.mp3"
var sound3 = new Audio();
sound3.src = "music/mmh.mp3"

function game(userChoice){
    const computerchoice = getComputerChoice();
    console.log("PC :  " + computerchoice);
    console.log("Du :  " + userChoice );
    switch (userChoice + computerchoice) {
            case"Stein_pngSchere_png" :  ergebnis_div.innerHTML ="Yes man, was ein starker Schlag auf die Schere!";
            spielerScore++;
            spielerScore_span.innerHTML = spielerScore;
            document.getElementById(userChoice).classList.add('greenglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},300);
            sound2.play();
            break;
            
            case"Stein_pngPapier_png": ergebnis_div.innerHTML ="Du wurdest gerade in Papier eingewickelt. 💩";
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            document.getElementById(userChoice).classList.add('redglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},300);
            sound1.play();
            break;
            
            case"Schere_pngStein_png": ergebnis_div.innerHTML ="Du wurdest gerade plattgemacht";
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            document.getElementById(userChoice).classList.add('redglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},300);
            sound1.play();
            break;
            
            case"Schere_pngPapier_png": ergebnis_div.innerHTML ="Yes man,du schneidest grad ein Papier durch!";
            spielerScore++;
            spielerScore_span.innerHTML = spielerScore;
            document.getElementById(userChoice).classList.add('greenglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},300);
            sound2.play();
            break;
            
            case "Papier_pngSchere_png":ergebnis_div.innerHTML ="Uff,er hat eine Schere...";
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            document.getElementById(userChoice).classList.add('redglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},300);
            sound1.play();
            break;
            
            case "Papier_pngStein_png":ergebnis_div.innerHTML ="You win,denn er hat ein Stein genommen";
            spielerScore++;
            spielerScore_span.innerHTML = spielerScore;
            document.getElementById(userChoice).classList.add('greenglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},300);
            sound2.play();
            break;
            
            case"Schere_pngSchere_png": ergebnis_div.innerHTML ="Ihr wollt Scheren schneiden? Ne, das geht nicht.";
            document.getElementById(userChoice).classList.add('greyglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greyglow')},300);
            sound3.play();
            break;
            
            case"Papier_pngPapier_png": ergebnis_div.innerHTML ="2 Blätter habt ihr auf dem Lehrerpult hingelegt. Leer... ";
            document.getElementById(userChoice).classList.add('greyglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greyglow')},300);
            sound3.play();
            break;
            
            case"Stein_pngStein_png":ergebnis_div.innerHTML ="Stein + Stein, wow";
            document.getElementById(userChoice).classList.add('greyglow');
            setTimeout(function(){document.getElementById(userChoice).classList.remove('greyglow')},300);
            sound3.play();
            break;
            
            }
    if (ergebnis_div.innerHTML !== "Spiel einmal!"){
    document.getElementById("action-message").innerHTML = "Versuch es noch einmal!";
    
};
}
game();


function main(){
stein_div.addEventListener('click',  () => game("Stein_png"));
	
papier_div.addEventListener('click', ()=> game("Papier_png"));
	
schere_div.addEventListener('click',()=> game("Schere_png"));
               };
main();

