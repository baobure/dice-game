//Firce Die
var randomeNumber1 = Math.floor(Math.random() * 6) + 1; //pickng a random number from 1- 6

var randomDiceImage = "dice" + randomeNumber1 + ".png"; // Dice1 - Dice 6 .png

var randomImageSource = "images/" + randomDiceImage; //you will get Images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//Second Die
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //you will get Images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//var image2 = document.querySelectorAll("img")[1];

//image2.setAttribute("src", randomImageSource2);

// If player 1 wins

if (randomeNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🤗 Player 1 Wins!";
}
else if (randomNumber2 > randomeNumber1) {
  document.querySelector("h1").innerHTML = " 🤗 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = " 😔 Draw!";

}
