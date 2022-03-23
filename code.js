const sections = document.querySelectorAll(".section"),
      btnSection = document.querySelectorAll(".controls"),
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

  // SECTIONS: active class
  body.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
      // remove selected btn
      btnSection.forEach((btn) => {
        btn.classList.remove("active");
      })
      e.target.classList.add("active");

      // hide section not used
      sections.forEach((section) => {
        section.classList.remove("active");
      })

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  })

}

pageTransitions();