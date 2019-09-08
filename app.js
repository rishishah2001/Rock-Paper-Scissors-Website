let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-bored")
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p")
  })
  scissors_div.addEventListener('click', function() {
    game("s")
  })
}

function convertWords(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallWordYou = "You".fontsize(3).sub();
  const smallWordComp = "Ai".fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertWords(user) + smallWordYou + " beats " + convertWords(computer) + smallWordComp + ". You win!"
  

}



function lose(user, computer) {
  const smallWordYou = "You".fontsize(3).sub();
  const smallWordComp = "Ai".fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertWords(user) + smallWordYou + " loses to " + convertWords(computer) + smallWordComp + ". You lost!"
}

function draw(user, computer) {
  const smallWordYou = "You".fontsize(3).sub();
  const smallWordComp = "Ai".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertWords(user) + smallWordYou + " ties with " + convertWords(computer) + smallWordComp + ". You tie!"
}
