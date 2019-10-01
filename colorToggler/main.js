var clicker = document.querySelector("button");
// var body = document.querySelector("body");
// var isPurple = false;
// clicker.addEventListener("click", function() {
//   if(isPurple) {
//     document.body.style.background = "white";
//   }else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// });

clicker.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});