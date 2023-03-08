var isMenuOpen = false;

function openMenu() {
  if (isMenuOpen == false) {
    hideMenu();
    drawBurger();
    isMenuOpen = true;
  } else {
    showMenu();
    drawArrow();
    isMenuOpen = false;
  }
}

function showMenu() {
  document.getElementById("dropdown_nav_menu").style.top = "6vh";
  document.getElementById("dropdown_nav_menu").style.transition = ".6s"
  document.getElementById("menu_logo").style.transform = "scale(1)";
  document.getElementById("menu_links_1").style.transform = "scale(1)";
  document.getElementById("menu_links_2").style.transform = "scale(1)";
  document.getElementById("menu_text").style.transform = "scale(1)";
  document.getElementById("menu_logo").style.opacity = "1";
  document.getElementById("menu_links_1").style.opacity = "1";
  document.getElementById("menu_links_2").style.opacity = "1";
  document.getElementById("menu_text").style.opacity = "1";
}

function hideMenu() {
  document.getElementById("dropdown_nav_menu").style.top = "-100vh";
  document.getElementById("menu_logo").style.transform = "scale(0.1)";
  document.getElementById("menu_links_1").style.transform = "scale(0.1)";
  document.getElementById("menu_links_2").style.transform = "scale(0.1)";
  document.getElementById("menu_text").style.transform = "scale(0.1)";
  document.getElementById("menu_logo").style.opacity = "0";
  document.getElementById("menu_links_1").style.opacity = "0";
  document.getElementById("menu_links_2").style.opacity = "0";
  document.getElementById("menu_text").style.opacity = "0";
}

function drawArrow() {
  document.getElementById("l1").style.top = "3vh";
  document.getElementById("l3").style.top = "3vh";
  document.getElementById("l1").style.width = "3vh";
  document.getElementById("l3").style.width = "3vh";

  setTimeout(function(){
    document.getElementById("l1").style.top = "1.8vh";
    document.getElementById("l3").style.top = "4vh";
    document.getElementById("l1").style.left = "-0.5vh";
    document.getElementById("l3").style.left = "-0.5vh";
    document.getElementById("l1").style.transform = "rotate(-45deg)";
    document.getElementById("l3").style.transform = "rotate(45deg)";
  }, 500);
}

function drawBurger() {
  document.getElementById("l1").style.top = "3vh";
  document.getElementById("l3").style.top = "3vh";
  document.getElementById("l1").style.transform = "rotate(0deg)";
  document.getElementById("l3").style.transform = "rotate(0deg)";

  setTimeout(function(){
    document.getElementById("l1").style.top = "1.5vh";
    document.getElementById("l3").style.top = "4.5vh";
    document.getElementById("l1").style.left = "0vh";
    document.getElementById("l3").style.left = "0vh";
    document.getElementById("l1").style.width = "4.5vh";
    document.getElementById("l3").style.width = "4.5vh";
  }, 500);
}
