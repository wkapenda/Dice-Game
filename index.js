var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomPickPlayer1 = Math.floor(Math.random() * 6);
var randomPickPlayer2 = Math.floor(Math.random() * 6);

if (randomPickPlayer1 > randomPickPlayer2) {
  document.querySelector("h1").textContent = "Player 1 Wins 🎆";
  displayDice(randomPickPlayer1, randomPickPlayer2);
} else if (randomPickPlayer2 > randomPickPlayer1) {
  document.querySelector("h1").textContent = "Player 2 Wins 🎇";
  displayDice(randomPickPlayer1, randomPickPlayer2)
} else {
  document.querySelector("h1").textContent = "It's A Draw! 🤝";
  displayDice(randomPickPlayer1, randomPickPlayer2);
}

function displayDice(randomPickPlayer1, randomPickPlayer2) {
  document.querySelector("img.img1").setAttribute("src", diceArray[randomPickPlayer1]);
  document.querySelector("img.img2").setAttribute("src", diceArray[randomPickPlayer2]);
}
