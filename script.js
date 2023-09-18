const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultButton = document.getElementById("result");
const resultElement = document.getElementById("result-element");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
// Get the leaderboard tbody element
const leaderTable = document.getElementById("leader-table");

let gameResults = [
  // { userChoice: "rock", computerChoice: "scissors", winner: "You win!" },
  // { userChoice: "paper", computerChoice: "rock", winner: "You win!" },
  // Add more game results as needed
];

document.addEventListener("DOMContentLoaded", function () {
  // event listeners
  rockButton.addEventListener("click", playGame);
  paperButton.addEventListener("click", playGame);
  scissorsButton.addEventListener("click", playGame);

  var score = 0;
  var scoreCompute = 0;

  const leaderTable = document.getElementById("leader-table");
  console.log("leaderTable", leaderTable);
  // Your code here
  // Initialize an array to store game results

  // functions
  function playGame() {
    // Get the user's choice
    const userChoice = this.id;

    // For Generaing a random choice for the computer
    const computerChoice = generateComputerChoice();

    // To Determine the winner
    const winner = getWinner(userChoice, computerChoice);
    resultButton.innerText = winner;

    console.log("score", score, "scoreCompute", scoreCompute);
    function addLeaderBoard(winner) {
      console.log("Winner:", winner);
      if (winner === "You win!") {
        score = score + 1;
        userScore.textContent = score;
        console.log("Updated user score:", score);
      }
      if (winner === "Computer wins!") {
        scoreCompute++;
        computerScore.textContent = scoreCompute;
        console.log("Updated computer score:", scoreCompute);
      }
    }

    addLeaderBoard(winner);
    // Push the game result into the gameResults array
    gameResults.push({
      userChoice,
      computerChoice,
      winner,
    });

    // Function to render the leaderboard table
    function renderLeaderboard(leaderBoard) {
      console.log("leaderBoard", leaderBoard);

      // Clear existing rows
      leaderBoard.innerHTML = "";

      // Iterate through gameResults and create table rows
      gameResults.forEach((result) => {
        console.log("result", result);
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
      <td>${result.userChoice}</td>
      <td>${result.computerChoice}</td>
      <td>${result.winner}</td>
    `;
        leaderBoard.appendChild(newRow);
      });
    }

    renderLeaderboard(leaderTable);

    // To show the result
    resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${winner}`;
  }
  // Function to generate a random choice for the computer
  function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log("randomIndex", choices[randomIndex]);
    return choices[randomIndex];
  }

  // Function to determine the winner
  function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
});
