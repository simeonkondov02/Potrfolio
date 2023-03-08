window.addEventListener("scroll", reveal);
window.onscroll = function() { scrollFunction() };

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      //reveals[i].classList.remove("active");
    }
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("title_conatiner").classList.add("small");
    document.getElementById("profile_picture").classList.add("small_pfp");
    document.getElementById("background_title").style.opacity = 0;
    document.getElementById("main_title").classList.add("small_title");
    document.getElementById("title_wave").style.opacity = 0;
  } else {
    document.getElementById("title_conatiner").classList.remove("small");
    document.getElementById("profile_picture").classList.remove("small_pfp");
    document.getElementById("background_title").style.opacity = .1;
    document.getElementById("main_title").classList.remove("small_title");
    document.getElementById("title_wave").style.opacity = 1;
  }
}
