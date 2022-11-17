const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 0,
    secretNum: null,
    guess: 0,
    prevGuess: [],
    get smallNum() {
      return parseInt(this.smallestNum);
    },
    get bigNum() {
      return parseInt(this.biggestNum);
    },
    get answer() {
      return parseInt(this.secretNum);
    },
    get getGuess() {
      return parseInt(this.guess);
    },
    play: function() {
      this.secretNum = (Math.floor(Math.random() * (this.bigNum - this.smallNum) + 1));
      this.secretNum = this.answer + this.smallNum;
    },
    getGuess: function() {
      let isValid = false;
  
      while (!isValid) {
        let userGuess = prompt(`Enter a number between ${this.smallNum} and ${this.bigNum}:`);
  
        if (isNaN(userGuess)) {
          alert("Please enter a number!")
        } else if (userGuess < parseInt(this.smallNum) || userGuess > parseInt(this.bigNum)) {
          alert(`Your guess must be between ${this.smallNum} and ${this.bigNum}!`);
        } else {
          isValid = true;
          this.prevGuess.push(userGuess);
          this.guess = userGuess;
          this.render();
        }
      }
    },
    render: function() {
  
      if (this.guess !== this.answer) {
  
        if (this.guess < this.answer) {
          alert("Your guess is too low!");
          alert(`Previous guesses:   
          ${this.prevGuess}`);
          this.getGuess();
        } else if (this.guess > this.answer) {
          alert("Your guess is too high!");
          alert(`Previous guesses: 
          ${this.prevGuess}`);
          this.getGuess();
        }else {
        alert(`You guessed correctly! It took you ${this.prevGuess.length} tries, good game.`);
      }
  
    }
    }
    }
    
    const startGame = function() {
  console.log(game.title + " To begin, choose a number range...");
  game.biggestNum = prompt("Please enter the largest number ");
  game.smallestNum = prompt("Please enter the smallest number ");
  game.play();
  game.getGuess();
}

startGame();

