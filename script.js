function jump(h) {
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}

function openNclose() {
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.querySelector("#ham-img").src = "icons8-menu.svg";
    document.querySelector("#main").style.marginLeft = "0";
  } else {
    x.style.display = "flex";
    document.querySelector("#ham-img").src = "icons8-close.svg";
    document.querySelector("#main").style.marginLeft = "20vw";
  }
}