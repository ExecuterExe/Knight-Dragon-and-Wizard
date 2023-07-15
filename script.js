const playerDecision = document.querySelectorAll('.game');
const valuesGame = ['choice_knight', 'choice_dragon', 'choice_wizard'];
const rules = {
    'choice_knight': {
        'choice_dragon': {
            message: 'The knight defeats the dragon. You win!',
            playerScore: 1,
            computerScore: 0
        },
        'choice_wizard': {
            message: 'The knight was bewitched by the wizard before the blow. You lost!',
            playerScore: 0,
            computerScore: 1
        },
        'choice_knight': {
            message: 'The knights attack each other, but to no avail. It\'s a tie!',
            playerScore: 0,
            computerScore: 0
        }
    },
    'choice_dragon': {
        'choice_knight': {
            message: 'The dragon falls into the knight\'s trap and is killed by his sword. You lost!',
            playerScore: 0,
            computerScore: 1
        },
        'choice_wizard': {
            message: 'The dragon maneuvers away from the wizard\'s spells and burns him with its breath. You win!',
            playerScore: 1,
            computerScore: 0,
        },
        'choice_dragon': {
            message: 'The dragons in the sky try to hurt each other, but to no avail. It\'s a tie!',
            playerScore: 0,
            computerScore: 0,
        }
    },
    'choice_wizard': {
        'choice_knight': {
            message: 'The wizard manages to send a fireball towards the knight and destroys it. You win!',
            playerScore: 1,
            computerScore: 0,
        },
        'choice_dragon': {
            message: 'The wizard fails to cast a spell on the dragon and is killed by its breath. You\'ve lost',
            playerScore: 0,
            computerScore: 1
        },
        'choice_wizard': {
            message: 'Wizards anticipate each other\'s spells and manage to defend themselves. It\'s a tie!',
            playerScore: 0,
            computerScore: 0
        }
    }
};
let playerChoice = null;
let computerChoice = null;
let result = null;
let playerScore = null;
let computerScore = null;

playerDecision.forEach(button => {
    button.addEventListener('click', () => processGame(button));
});

function processGame(choice) {
    choicePlayer(choice);
    choiceComputer();
    displayChoices()
    compareChoices();
    displayReasonScore();
    displayScore();
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
    resultCompare = rules[playerChoice][computerChoice].message;
    return resultCompare;
}

function displayReasonScore() {
    const displayReasonScore = document.querySelector('.board__reason');
    displayReasonScore.innerHTML = resultCompare;
}

function displayScore() {
    const displayScoreBoard = document.querySelectorAll('.score');

    playerScore += rules[playerChoice][computerChoice].playerScore;
    displayScoreBoard[0].textContent = playerScore

    computerScore += rules[playerChoice][computerChoice].computerScore;
    displayScoreBoard[1].textContent = computerScore
}
