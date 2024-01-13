let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random number for secret target
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Determines which guess is closest to the secret number
const compareGuesses = (human, computer, secret) => {
    const userDifference = Math.abs(secret - human);
    const computerDifference = Math.abs(secret - computer);

    // Determine the winner based on the closest guess
    if (userDifference < computerDifference || userDifference === computerDifference) {
        // If both players are tied, the human user should win
        return true;
    } else {
        // Computer player wins
        return false;
    }
};

// Used to correctly increase the winners score
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    };
};

const advanceRound = () => {
    currentRoundNumber++;
};


console.log(updateScore());
console.log(advanceRound());

