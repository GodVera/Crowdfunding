$(".bookmark").on("click", function() {
  $(".bookmark-text").toggleClass("js-bookmarked")
  if ($(".bookmark-text").text() == "Bookmark") {
    $(".bookmark-text").text("Bookmarked")
    $(".bookmark-image").attr("src", "images/icon-check.svg")
  } else {
    $(".bookmark-text").text("Bookmark")
      $(".bookmark-image").attr("src", "images/icon-bookmark.svg")
  }
})

if ($("#Mahagony").text() == 0) {
  $(".inactive").animate({
    opacity: 0.5
  })
}

//Modal

// Get the modal
var modal = document.getElementById("back1");

// Get the button that opens the modal
var btn = document.getElementById("button-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Continue button
var contin = $(".continue");

//Last modal
var lastmod = document.getElementById("back2");

//got it!
var gotit = document.getElementById("got-it")

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Continue button
$(contin).click(function() {
  modal.style.display = "none";
  lastmod.style.display = "block";
});

$(gotit).click(function() {
  lastmod.style.display = "none";
})




//hidden pledge section//

$(".hidden-pledge").slideUp()

$('input[name=exampleRadios]').change(function() {
  if ($(this).is(':checked')) {
    var choice = this.id + "sl"
    var section = this.id + "sec"
    $(".hidden-pledge").slideUp()
    $("#" + choice).slideDown()
    $(".box-layout").removeClass("selected-pledge")
    $("#" + section).addClass("selected-pledge")


  }
})
