const projects = {
  portfolio: {
    Title: "PortFolio Website",
    Content:
      "Portfolio Website built using HTML,CSS  Vanilla JS and Semantic Ui",
  },
  Blog: {
    Title: "Blog Application",
    Content:
      "Blog Application built using React JS, Material UI for frontend and Node Js and Express Js for backend It allows user to View Exisiting Blogs, Add Comments to existing Blogs, Delete Blogs and Post Reviews",
  },
  Cab: {
    Title: "Cab Allocation",
    Content:
      "A Cab Allocation Simulation Project built using C++ with the use of some efficient data structures and algorithms and uses file handling for saving User Records",
  },
  Android: {
    Title: "Sleep Apnea Detection",
    Content:
      "An Android Application which uses IOT and ML to predict whether a person is suffering from Sleep Apnea The IOT device get the user's SPO2 levels which goes to the ML model which predicts the results and send them back to Android Application",
  },
};
window.addEventListener("load", function () {
  window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementsByClassName("navbar")[0];
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  function scrollIntoView(pos) {
    var element = document.getElementsByClassName(pos);
    element[0].scrollIntoView();
  }
  var projectContent = document.getElementsByClassName("project-info")[0];
  var images = document.getElementsByClassName("proj-img");
  function scrolldiv(pos) {
    window.scrollTo(0, findPosition(document.getElementsByClassName(pos)[0]));
  }
  function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
  }
  Object.keys(images).map((element) => {
    images[element].addEventListener("click", (e) => {
      projectContent.style.display = "block";
      projectContent.children[0].innerHTML = projects[e.target.alt].Title;
      projectContent.children[2].innerHTML = projects[e.target.alt].Content;
      this.setTimeout(() => {
        scrollIntoView("project-info");
      }, 250);
    });
  });

  // Nav Link
  var navImg = document.getElementsByClassName("img");
  Object.keys(navImg).map((element) => {
    navImg[element].addEventListener("click", (e) => {
      scrolldiv(e.target.alt);
    });
  });
  //Work Experience

  var workBtn = document.getElementsByClassName("work-button");
  Object.keys(workBtn).map((elem) => {
    workBtn[elem].addEventListener("click", () => {
      var content = document.getElementsByClassName("hidden-content");
      // console.log(content[elem].style);
      if (content[elem].style.maxHeight === "") {
        content[elem].style.maxHeight = 85 + "px";
      } else {
        content[elem].style.maxHeight = null;
      }
    });
  });
});
