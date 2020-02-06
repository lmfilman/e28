function play() {
  let playerChoice = this.id;
  let randomChoice = ids[Math.floor(Math.random() * ids.length)];

  let playerChoiceIndex = ids.indexOf(playerChoice);
  let randomChoiceIndex = ids.indexOf(randomChoice);

  let beatByIndex = (playerChoiceIndex + 1) % 3;
  let outcomeDescription = '';
  let outcomeStyle = '';

  if (playerChoiceIndex == randomChoiceIndex) {
    outcomeDescription = 'It was a tie, try again.';
    outcomeStyle = 'tie';
  } else if (randomChoiceIndex == beatByIndex) {
    outcomeDescription = 'Sorry, you lost. :(';
    outcomeStyle = 'lost';
  } else {
    outcomeDescription = 'You won! :)';
    outcomeStyle = 'won';
  }

  let playerOutcome = document.getElementById('player_outcome');
  playerOutcome.innerHTML = "You chose: " + playerChoice;

  let opponentOutcome = document.getElementById('opponent_outcome');
  opponentOutcome.innerHTML = "The computer chose: " + randomChoice;

  let totalOutcome = document.getElementById('total_outcome');
  totalOutcome.innerHTML = outcomeDescription;
  totalOutcome.setAttribute('class', outcomeStyle);
}

const ids = ['rock', 'paper', 'scissors'];

for (let i = 0; i < ids.length; i++) {
  let button = document.getElementById(ids[i]);
  button.addEventListener('click', play);
}
