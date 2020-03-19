let app = new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    ids: ['rock', 'paper', 'scissors'],
    outcomeDescription: '',
    outcome: 0,
    playerChoice: '',
    randomChoice: ''
  },
  methods: {
    selectChoice: function() {
      this.gameStarted = true;

      this.playerChoice = event.target.id;
      this.randomChoice = this.ids[Math.floor(Math.random() * this.ids.length)];

      let playerChoiceIndex = this.ids.indexOf(this.playerChoice);
      let randomChoiceIndex = this.ids.indexOf(this.randomChoice);

      let beatByIndex = (playerChoiceIndex + 1) % 3;

      if (playerChoiceIndex == randomChoiceIndex) {
        this.outcomeDescription = 'It was a tie, try again.';
        this.outcome = 0;
      } else if (randomChoiceIndex == beatByIndex) {
        this.outcomeDescription = 'Sorry, you lost. :(';
        this.outcome = -1;
      } else {
        this.outcomeDescription = 'You won! :)';
        this.outcome = 1;
      }
    }
  }
})