// code to implement the prop down bar on mobile devices
// adapted from a w3schools example
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}
