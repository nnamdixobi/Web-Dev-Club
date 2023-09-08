const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultMessage = document.querySelector('.result');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const playerWins = (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper');
    
    if (playerChoice === computerChoice) {
    resultMessage.textContent = `You both chose ${playerChoice}. Its a tie!`;
}
    else if (playerWins) {
        resultMessage.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. You win!`;

    } else {
        resultMessage.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`;
    }

}

