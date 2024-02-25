// Constants first meaning my playingfield, different cards/colors
// and making sure that every color gets taken only twice
const memogameContainer = document.querySelector("memo-game");
const colors = [
  "aqua",
  "crimson",
  "gold",
  "teal",
  "maroon",
  "purple",
  "silver",
  "fuchsia",
];
const chosenColor = [...colors, ...colors];
const cardAnzahl = chosenColor.length;

// Game
let openCount = 0;
let activeCard = null;
let awaitingEndOfMove = false;

// Make them appear randomly + limit amount of the same color
for (let i = 0; i < cardAnzahl; i++) {
  const randomIndex = Math.floor(Math.random() * chosenColor.length);
  const color = chosenColor[randomIndex];

  chosenColor.splice(randomIndex, 1);

  console.log(color);
}
