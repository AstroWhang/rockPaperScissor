//normal variables
let userScore = 0
let computerScore = 0
//dom variables, span tag
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissor'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " beats " + computerChoice + ". You Win!!";
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " loses " + computerChoice + ". You Lost!!";
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = userChoice + " equals " + computerChoice + ". It's a Draw!!";
}


function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissor":
		case "paperrock":
		case "scissorpaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissor":
		case "scissorrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorscissor":
			draw(userChoice, computerChoice);
			break;
	}

}

function main() {
	rock_div.addEventListener('click', function() {
		game("rock");
	})

	paper_div.addEventListener('click', function() {
	game("paper");
	})

	scissor_div.addEventListener('click', function() {
	game("scissor");
	})
}

main();