//Variables that verify if the menus are open or closed.
var isclicked = false;
var isclicked2 = false;

//Slide down and slide up functions for the download button.
//click function for the button element
$(function() {
    $(".btn").click(function(e) {
        e.preventDefault();
        $(".submenu").stop(500).slideToggle();
        if (isclicked == false)
        {
            $(".submenu").slideDown(500);
            isclicked = true;
        }
        else
        {
            $(".submenu").slideUp(500);
            isclicked = false;
        }
    });
});
//function activates if any other element on the page is clicked, other than the button
$(function() {
    $(document).click(function(e) {
        if (!$(e.target).hasClass('btn'))
            if(isclicked == true)
            {
                $(".submenu").slideUp(500);
                isclicked = false;
            }
    });
});

//Slide down and slide up functions for the menu button.
//click function for the button element
$(function() {
    $(".menubtn").click(function(e) {
        e.preventDefault();
        $(".nav-submenu").stop(500).slideToggle();
        if (isclicked2 == false)
        {
            $(".nav-submenu").slideDown(500);
            isclicked2 = true;
        }
        else
        {
            $(".nav-submenu").slideUp(500);
            isclicked2 = false;
        }
    });
});
//function activates if any other element on the page is clicked, other than the button
$(function() {
    $(document).click(function(e) {
        if (!$(e.target).hasClass('submenubtn') && !$(e.target).hasClass('menubtn') && !$(e.target).hasClass('nav-submenu') || $(e.target).hasClass('closemenubtn'))
            if(isclicked2 == true)
            {
                $(".nav-submenu").slideUp(500);
                isclicked2 = false;
            }
    });
});

// === Functions for slideshow ===

var slideIndex = 1;
// Show first image when the page loads

setInterval(plusSlidesAuto, 5000);

document.addEventListener("DOMContentLoaded", function() {
    currentSlide(1);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlidesAuto() {
    showSlides(slideIndex += 1);
  }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
var darkmode= true;
$(function() {
    $(".btn").click(function()
    {
        if(darkmode == true)
        darkmode = false;
        else
        darkmode = true;
        var element = document.body;
        element.classList.toggle("darkmodeBody");

        if(darkmode == false)
        {
            $("div[class='feature']").css({
                'color': 'black',
                'text-shadow':'1px 1px 1px white'
            });
            $("h2").css({
                'color': 'black',
                'text-shadow':'1px 1px 1px white'
            });
            $("section[class='quote']").css({
                'color': 'black'
            });
            $("cite").css({
                'color': 'black'
            });
            $("div[id='navbar']").css ({
                'background-image': 'linear-gradient(to right, #ebebeb, #d8d8d8, #ebebeb)'
            });
            $("a").css ({
                'color': 'black',
                'text-shadow': '1px 1px 1px white'
            });
        }
        else
        {
            $("div[class='feature']").css({
                'color': 'white',
                'text-shadow':'1px 1px 1px black'
            });
            $("h2").css({
                'color': 'white',
                'text-shadow':'1px 1px 1px black'
            });      
        }                
    });
});
*/