function getComputerChoice() {
  const random = Math.round(Math.random() * 2) + 1;
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getComputerChoice() {
  const input = prompt(`
    Enter the number corresponding to your choice:
    1. Rock
    2. Paper
    3. Scissors
    Enter your choice: `);

  switch (parseInt(input)) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      alert("Please select the valid input");
      return getComputerChoice();
  }
}

let humanScore = 0;
let computerScore = 0;