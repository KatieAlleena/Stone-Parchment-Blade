(function () { 
   

/* I am choosing to keep using Rock, Paper, Scissors as variables, as I decided on the Zelda theme during the design phase.  */

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const choices = [rock, paper, scissors];

const resolution = document.querySelector(".resolution");
const playerPickDisplay = document.querySelector(".player-pick");
const playerScoreDisplay = document.querySelector(".player-score");
const cpuPickDisplay = document.querySelector(".cpu-pick");
const cpuScoreDisplay = document.querySelector(".cpu-score");
const roundNumberDisplay = document.querySelector(".round-number");

let playerScoreNumber = 0;
let cpuScoreNumber = 0;
let roundNumber = 0;

// this is how the player chooses! 

rock.addEventListener("click", () => {
   return compareSelection(rock);
});
paper.addEventListener("click", () => {
   return compareSelection(paper);
});
scissors.addEventListener("click", () => {
   return compareSelection(scissors);
});

// this is how CPU will choose!
const getComputerChoice = () => {
   return choices[Math.floor(Math.random() * 3)];
};


const updateDisplay = (playerChoice, cpu) => {
   choices.forEach((event) => {
      if (event.classList) {
         event.classList.remove("player-active", "cpu-active");
      }
   });

   // This is the game itself, and how our choices affect a win or loss condition compared to the CPU.

   if (playerChoice === rock) {
      playerPickDisplay.textContent = "Stone";
      rock.classList.add("player-active");
   } else if (playerChoice === paper) {
      playerPickDisplay.textContent = "Parchment";
      paper.classList.add("player-active");
   } else {
      playerPickDisplay.textContent = "Blade";
      scissors.classList.add("player-active");
   }

   if (cpu === rock) {
      cpuPickDisplay.textContent = "Stone";
      rock.classList.add("cpu-active");
   } else if (cpu === paper) {
      cpuPickDisplay.textContent = "Parchment";
      paper.classList.add("cpu-active");
   } else {
      cpuPickDisplay.textContent = "Blade";
      scissors.classList.add("cpu-active");
   }
};

// This changes the text depending on choice results.

const compareSelection = (playerChoice) => {
   const cpu = getComputerChoice();
   updateDisplay(playerChoice, cpu);

   if (playerChoice === cpu) {
      resolution.textContent = "It's a draw!";
      resolution.style.color = "turquoise";
      return tieRound();
   } else if (
      (playerChoice === rock && cpu === paper) ||
      (playerChoice === paper && cpu === scissors) ||
      (playerChoice === scissors && cpu === rock)
   ) {
      resolution.textContent = "You've lost!";
      resolution.style.color = "palevioletred";
      return loseRound();
   } else {
      resolution.textContent = "You've won!";
      resolution.style.color = "lawngreen";
      return winRound();
   }
};
// this keeps track of how many rounds are won or lost and keeps the game going until the win condition of 5 is met. 

const tieRound = () => {
   roundNumberDisplay.textContent = ++roundNumber;
};

const winRound = () => {
   playerScoreDisplay.textContent = ++playerScoreNumber;

   roundNumberDisplay.textContent = ++roundNumber;

   if (playerScoreNumber === 5) {
      return resetGame();
   }
};

const loseRound = () => {
   cpuScoreDisplay.textContent = ++cpuScoreNumber;

   roundNumberDisplay.textContent = ++roundNumber;

   if (cpuScoreNumber === 5) {
      return resetGame();
   }
};

// resets the game with either result

const resetGame = () => {
   if (playerScoreNumber === 5) {
      resolution.textContent = "The Hero prevails! Click to play again.";
      resolution.style.color = "lawngreen";
   } else {
      resolution.textContent = "This is the downfall timeline, it seems. Click to play again!";
      resolution.style.color = "palevioletred";
   }

   // This updates the counters and round numbers!

   playerScoreNumber = 0;
   cpuScoreNumber = 0;
   roundNumber = 0;

   playerScoreDisplay.textContent = playerScoreNumber;
   cpuScoreDisplay.textContent = cpuScoreNumber;
   roundNumberDisplay.textContent = roundNumber;
   choices.forEach((event) => {
      if (event.classList) {
         event.classList.remove("player-active", "cpu-active");
      }
   });
};

})();