function navigation() {
    var x = document.getElementById("nav");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// function hero() {
//   var hero = document.getElementById('hero');
//   var scrollPosition = window.scrollY;
//   console.log("hi");
//   if (scrollPosition === 0) {
//     hero.style.display = 'block';
//   } else {
//     hero.style.display = 'none';
//   }
// }