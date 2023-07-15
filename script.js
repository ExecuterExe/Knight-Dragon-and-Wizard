const playerDecision = document.querySelectorAll('.game');
const valuesGame = ['choice_knight', 'choice_dragon', 'choice_wizard'];
const rules = {
    'choice_knight': {
        'choice_dragon': 'The knight defeats the dragon. You win!',
        'choice_wizard': 'The knight was bewitched by the wizard before the blow. You lost!',
        'choice_knight': 'The knights attack each other, but to no avail. It\'s a tie!'
    },
    'choice_dragon': {
        'choice_knight': 'The dragon falls into the knight\'s trap and is killed by his sword. You lost!',
        'choice_wizard': 'The dragon maneuvers away from the wizard\'s spells and burns him with its breath. You win!',
        'choice_dragon': 'The dragons in the sky try to hurt each other, but to no avail. It\'s a tie!'
    },
    'choice_wizard': {
        'choice_knight': 'The wizard manages to send a fireball towards the knight and destroys it. You win!',
        'choice_dragon': 'The wizard fails to cast a spell on the dragon and is killed by its breath. You\'ve lost',
        'choice_wizard': 'Wizards anticipate each other\'s spells and manage to defend themselves. It\'s a tie!'
    }
};
let playerChoice = null;
let computerChoice = null;
let result = null;

playerDecision.forEach(button => {
    button.addEventListener('click', () => processGame(button));
});

function processGame(choice) {
    choicePlayer(choice);
    choiceComputer();
    displayChoices()
    compareChoices();
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

function displayChoices() {
    const displayChoicePlayer = document.querySelector('.accepted-choice__player');
    displayChoicePlayer.classList.add(playerChoice.slice(7) + '__style');
    displayChoicePlayer.classList.replace(displayChoicePlayer.classList[1], playerChoice.slice(7) + '__style');
    displayChoicePlayer.innerHTML = playerChoice.slice(7)
    const displayChoiceComputer = document.querySelector('.accepted-choice__computer');
    displayChoiceComputer.classList.add(computerChoice.slice(7) + '__style');
    displayChoiceComputer.classList.replace(displayChoiceComputer.classList[1], computerChoice.slice(7) + '__style');
    displayChoiceComputer.innerHTML = computerChoice.slice(7)
}

function compareChoices() {
    result = rules[playerChoice][computerChoice];
    return result;
}
