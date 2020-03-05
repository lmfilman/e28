let app = new Vue({
  el: '#app',
  data: {
    answer: '',
    answerIndex: -1,
    gameInitiated: false,
    guessIsSubmitted: false,
    hint: '',
    outcomeText: '',
    playerGuess: '',
    playerName: '',
    playerWon: false,
    words: [
      ['apple', 'Sometimes red, sometimes delicious'],
      ['washington', 'Rushmore’s left edge'],
      ['pumpkin', 'Halloween’s favorite fruit'],
      ['football', 'Play with your hands or feet, depending on your location']
    ]
  },
  methods: {
    initGame: function() {
      this.gameInitiated = true;
    },
    playAgain: function() {
      this.resetGame();
    },
    randomNumber: function(max) {
      return Math.floor(Math.random() * max);
    },
    resetGame: function() {
      var oldIndex = this.answerIndex;

      // Ensure user does not see the same puzzle twice in a row
      while(oldIndex == this.answerIndex) {
        this.answerIndex = this.randomNumber(this.words.length);
      }

      this.answer = this.words[this.answerIndex][0];
      this.hint = this.words[this.answerIndex][1];
      this.guessIsSubmitted = false;
      this.outcomeText = '';
      this.playerGuess = '';
      this.playerWon = false;
    },
    submitGuess: function() {
      this.guessIsSubmitted = true;

      if(this.playerGuess == this.answer) {
        this.playerWon = true;
      }

      if(this.playerWon) {
        this.outcomeText = 'You got it! Nice work.'
      } else {
        this.outcomeText = "Sorry, that's not correct. Please try again."
      }
    }
  },
  computed: {
    mysteryWord: function() {
      // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
      var a = this.answer.split('');
      var n = a.length;

      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      return a.join('');
    }
  },
  mounted: function () {
    this.resetGame();
  }
})