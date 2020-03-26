Vue.component('choice-selector', {
  template: `
    <div class='button'>
      <button v-bind:id="choice" v-on:click="$emit('select-choice')">{{capitalizeStr(choice)}}</button>
    </div>
  `,
  props: {
    choice: String
  },
  methods: {
    capitalizeStr: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
});

Vue.component('round-displayer', {
  template: `
    <tr>
      <td>
        {{roundNumber}}
      </td>
      <td>
        <div v-if='roundResult > 0'>
          Player
        </div>
        <div v-else-if='roundResult < 0'>
          Computer
        </div>
        <div v-else>
          Tie
        </div>
      </td>
    </tr>
  `,
  props: {
    roundNumber: Number,
    roundResult: Number
  }
});

let app = new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    history: [],
    choices: ['rock', 'paper', 'scissors'],
    outcome: 0,
    outcomeDescription: '',
    playerChoice: '',
    randomChoice: ''
  },
  methods: {
    resetGame: function() {
      this.gameStarted = false;
      this.history = [];
    },
    selectChoice: function() {
      this.gameStarted = true;

      this.playerChoice = event.target.id;
      this.randomChoice = this.choices[Math.floor(Math.random() * this.choices.length)];

      let playerChoiceIndex = this.choices.indexOf(this.playerChoice);
      let randomChoiceIndex = this.choices.indexOf(this.randomChoice);

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

      this.history.push(this.outcome);
    },
    sumArray: function(arr) {
      return arr.reduce(function(a, b) { return a + b; }, 0);
    }
  },
  computed: {
    computerScore: function() {
      function computerWon(score) {
        return score < 0;
      }

      return -1 * this.sumArray(this.history.filter(computerWon));
    },
    playerScore: function() {
      function playerWon(score) {
        return score > 0;
      };

      return this.sumArray(this.history.filter(playerWon));
    }
  },
  mounted: function () {
    this.resetGame();
  }
})