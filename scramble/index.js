let app = new Vue({
  el: '#app',
  data: {
    answer: '',
    answerIndex: 0,
    gameInitiated: false,
    guessIsSubmitted: false,
    hint: '',
    mysteryWord: '',
    playerGuess: '',
    playerName: '',
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
      this.answerIndex = this.randomNumber(this.words.length);
      this.answer = this.words[this.answerIndex][0];
      this.hint = this.words[this.answerIndex][1];
      this.mysteryWord = this.shuffleWord(this.answer);
      this.guessIsSubmitted = false;
      this.playerGuess = '';
    },
    shuffleWord: function(word) {
      // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
      var a = word.split('');
      var n = a.length;

      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      return a.join('');
    },

    submitGuess: function() {
      this.guessIsSubmitted = true;
    }
  },
  computed: {
    outcome: function() {
      return this.playerGuess == this.answer;
    }
  },
  mounted: function () {
    this.resetGame();
  }
})