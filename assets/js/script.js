//constants first meaning my playingfield, different cards/colors
//and making sure that every color gets taken only twice
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

console.log(chosenColor);
//line 17 was only to check the DevTools 'Console' pannel if the colors actually appeared in the log
