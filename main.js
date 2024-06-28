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
