function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function guessingGame() {
    const randomNumber = generateRandomNumber();
    let attempts = 5;
    
    while (attempts > 0) {
      const guess = parseInt(prompt("Guess a number between 1 and 100:"));
      
      if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
      }
      
      if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
        return;
      } else if (guess < randomNumber) {
        alert("Too low! Try again.");
      } else {
        alert("Too high! Try again.");
      }
      
      attempts--;
    }
    
    alert("Sorry, you ran out of attempts. The correct number was " + randomNumber + ".");
  }
  
  function startGame() {
      guessingGame();
  }
  