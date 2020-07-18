var text = ["an Aspiring Fullstack Developer", "a Language Enthusiast", "Constantly Curious"];
var counter = 0;

setInterval(change, 2500);

function change() {
  $("#cycle").text(text[counter]);
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}