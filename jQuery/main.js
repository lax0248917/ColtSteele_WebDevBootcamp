// $("div").css("background", "purple");
// $(".highlight").css("width", "200px");
// $("#third").css("border", "10px solid orange");
// $("div:first-of-type").css("color", "pink");

//jQuery Methods
// $("h1").text(); //"jQuery Methods Demo Page"
// $("ul").text(); // "Skittles Starburst Twix"
// $("h1").text("New Text!!!");
// $("li").text("Rusty, Colt's dog is adorable");
// $("ul").html("<li>I hacked your UL!</li><li>Rusty is still adorable</li>");
// $("img").css("width", "200px");
// $("img").attr("src");
// $("img").attr("src", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9d%2F59%2F7d%2F9d597d070241934a5dfce3844018810c.jpg&f=1&nofb=1");
// $("input").attr("type");
// $("input").attr("type");
// $("img").css("width", "200px");
// $("img").last().attr("src", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9d%2F59%2F7d%2F9d597d070241934a5dfce3844018810c.jpg&f=1&nofb=1")
//attr() one argument gets the value , two arguments replaces the value.
//val() is the same
// $("input").val();
// $("input").val("Rusty Steele");


// $("h1").addClass("correct");
// $("h1").removeClass("correct");
// $("li").addClass("wrong");

// $("li").toggleClass("correct"); //takes away
// $("li").toggleClass("correct"); //run again and brings back
// $("li").first().toggleClass("done");

//Event Methods
//Click() is a click listener 
// $("h1").click(function() {
//   alert("h1 clicked!");
// });

// $("button").click(function() {
//   alert("Button Clicked");
// });

// $("button").click(function() {
//   $(this).css("background", "pink")  
// });

// $("button").click(function() {
//   var text = $(this).text();
//   alert("You clicked " + text); 
// });

// $("input").keypress(function(event) {
//   console.log(event);
// });

// $("input").keypress(function(event) {
//   if(event.which === 13) {
//     alert("You hit the eneter button!");
//   }
// });

// // the on() Method
// //simliar to the vanilla JS addEventListener
// $("h1").on("click", function() {
//   $(this).css("color", "purple");
// });

// $("input").on("keypress", function() {
//   console.log("keypress!");
// });

// $("button").on("mouseenter", function() {
//   console.log("Mouse Enter");
// });

// $("button").on("mouseenter", function() {
//   $(this).css("font-weight", "bold");
// });

// $("button").on("mouseleave", function() {
//   $(this).css("font-weight", "normal");
// });

//jQuery Effects
// $("button").on("click", function() {
//   $("div").fadeOut(1000, function() {
//     $(this).remove();
//   });
// });
//this is just an example of one effect that is possible, there is fadeIn()
//fadeToggle(), will fade in or out based on the elements status at the time.

//slideDown(), slideUp()
$("button").on("click", function() {
  $("div").slideToggle(1000, function() {
    console.log("Slide Finished!")
  });
});
// reference the jQuery docs for more options




