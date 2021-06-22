//contact us submit event
function sub(){
    alert("Submitted successfully");
    return true;
}

//Get the top button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 230px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//body background color px change
function myFunction(x) {
  if (x.matches) {          // If media query matches
    document.body.style.backgroundColor = "gray";
  } else {
   document.body.style.backgroundColor = "white";
  }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x)               // Call listener function at run time
x.addListener(myFunction)   // Attach listener function on state changess


