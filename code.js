const sections = document.querySelectorAll(".section"),
      btnSection = document.querySelector(".controls"),
      allBtn = document.querySelectorAll(".control"),
      body = document.querySelector(".main");


function pageTransitions() {
  // btn click: active class
  for(let i=0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    })
  }
}

pageTransitions();