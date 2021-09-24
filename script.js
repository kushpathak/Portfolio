window.addEventListener("load", function () {
  window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementsByClassName("navbar")[0];
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      console.log(navbar.classList);
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
