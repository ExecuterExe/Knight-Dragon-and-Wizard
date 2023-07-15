const playerDecision = document.querySelectorAll('.game');
const valuesGame = ['choice_knight', 'choice_dragon', 'choice_wizard'];
let playerChoice = null;
let computerChoice = null;

playerDecision.forEach(button => {
    button.addEventListener('click', () => processGame(button));
});

function processGame(choice) {
    choicePlayer(choice);
    choiceComputer();
}

function choicePlayer(button) {
    playerChoice = button.classList[0];
    console.log(playerChoice);
    return playerChoice;
}

function choiceComputer() {
    const randomIndex = Math.floor(Math.random() * valuesGame.length);
    computerChoice = valuesGame[randomIndex];
    console.log(computerChoice);
    return computerChoice;
}
