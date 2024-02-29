// fetch('/index.html')
//     .then(response => response.text())
//     .then(data => {
//         document.body.innerHTML += data;
//     });


// for the navbar control

const openNavIcon =  document.querySelector(".open__nav-btn")
const closeNavIcon =  document.querySelector(".close__nav-btn")
const navItems = document.querySelectorAll(".nav__details")



openNavIcon.addEventListener("click", () => {
     navItems.forEach((navItem)=>{
       navItem.style.display = "flex";
     })
     openNavIcon.classList.add("hidden")
     closeNavIcon.classList.remove("hidden")
});

closeNavIcon.addEventListener("click", () =>{
    navItems.forEach((navItem)=>{
        navItem.style.display = "none";
      })
      openNavIcon.classList.remove("hidden")
      closeNavIcon.classList.add("hidden")
}

)
