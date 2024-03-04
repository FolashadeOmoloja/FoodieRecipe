const openNavIcon =  document.querySelector(".open__nav-btn"),
closeNavIcon =  document.querySelector(".close__nav-btn"),
navItems = document.querySelectorAll(".nav__details"),
recipeSeekerRole =  document.querySelector(".form-role-seeker"),
chefRole =  document.querySelector(".form-role-chef"),
adminRole =  document.querySelector(".form-role-admin"),
viewPasswordIcon = document.querySelectorAll('.view-password'),
hidePasswordIcon = document.querySelectorAll('.hide-password'),
passwordInput = document.querySelectorAll('.password')




openNavIcon ? openNavIcon.addEventListener("click", () => {
     navItems.forEach((navItem)=>{
       navItem.style.display = "flex";
     })
     openNavIcon.classList.add("hidden")
     closeNavIcon.classList.remove("hidden")
}) : null;

closeNavIcon ? closeNavIcon.addEventListener("click", () =>{
    navItems.forEach((navItem)=>{
        navItem.style.display = "none";
      })
      openNavIcon.classList.remove("hidden")
      closeNavIcon.classList.add("hidden")
}): null;


//password
// Toggle password visibility when view icon is clicked
if (viewPasswordIcon) {
  viewPasswordIcon.forEach((viewIcon, idx) => {
    viewIcon.addEventListener("click", () => {
      viewIcon.style.display = 'none';
      hidePasswordIcon[idx].style.display = 'block'
      passwordInput[idx].type = 'text';
    });
  });
}

// Toggle password visibility when hide icon is clicked
if (hidePasswordIcon) {
  hidePasswordIcon.forEach((hideIcon, idx) => {
    hideIcon.addEventListener("click", () => {
      hideIcon.style.display = 'none';
      viewPasswordIcon[idx].style.display = 'block'
      passwordInput[idx].type = 'password';
    });
  });
}



//Choosing Role on sign up
const selectRole = (num) =>{
   if (num === 0) {
     recipeSeekerRole.classList.add("role__cont__select")
     chefRole.classList.remove("role__cont__select")
     adminRole.classList.remove("role__cont__select")
   } 
   else if(num === 1){
      chefRole.classList.add("role__cont__select")
      recipeSeekerRole.classList.remove("role__cont__select")
      adminRole.classList.remove("role__cont__select")}
   else if (num === 2) {
      adminRole.classList.add("role__cont__select")
      recipeSeekerRole.classList.remove("role__cont__select")
      chefRole.classList.remove("role__cont__select")
    } else{
      null
    }
   }

recipeSeekerRole ? recipeSeekerRole.addEventListener("click",()=>selectRole(0) ) : null
chefRole ? chefRole.addEventListener("click",()=>selectRole(1) ) : null
adminRole ?adminRole.addEventListener("click",()=>selectRole(2) ) : null

