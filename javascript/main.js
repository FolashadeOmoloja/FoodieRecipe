const openNavIcon =  document.querySelector(".open__nav-btn"),
closeNavIcon =  document.querySelector(".close__nav-btn"),
navItems = document.querySelectorAll(".nav__details"),
recipeLike = document.querySelectorAll(".recipe_like"),
recipeHeart = document.querySelectorAll(".recipe_like i"),
recipeSeekerRole =  document.querySelector(".form-role-seeker"),
chefRole =  document.querySelector(".form-role-chef"),
adminRole =  document.querySelector(".form-role-admin"),
viewPasswordIcon = document.querySelectorAll('.view-password'),
hidePasswordIcon = document.querySelectorAll('.hide-password'),
passwordInput = document.querySelectorAll('.password'),
searchInput = document.getElementById("searchInput"),
searchDropdown = document.getElementById("searchDropdown"),
viewFilters = document.querySelector(".view-filters")




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

//liking recipes
if (recipeLike){
  let likeBool = false
  const likeRecipeFunc = ( recipeHeartIdx) =>{
    likeBool = !likeBool; 
    let likeRecipe = likeBool; 
    let countLike = 0
   if (likeRecipe) {
    recipeHeart[recipeHeartIdx].style.color = '#FF6363'
    countLike =1
   } else {
    recipeHeart[recipeHeartIdx].style.color = '#DBE2E5'
    countLike = 0
   } 
  }
  recipeLike.forEach((icon, idx)=>{
      icon.addEventListener("click", () => likeRecipeFunc(idx))
    })
}


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

// RECIPE PAGE
//search functionality
if(searchInput){
  searchInput.addEventListener("input", function() {
    // Simulate dropdown content dynamically based on search input
    const searchValue = this.value.toLowerCase();
    const dropdownItems = ["Result 1", "Result 2", "Result 3"]; // Example dropdown items
    const filteredItems = dropdownItems.filter(item => item.toLowerCase().includes(searchValue));
    
    // Clear previous dropdown content
    searchDropdown.innerHTML = "";
    
    // Populate dropdown with filtered items
    filteredItems.forEach(item => {
      const dropdownItem = document.createElement("a");
      dropdownItem.textContent = item;
      dropdownItem.href = "#"; // Add functionality if needed
      searchDropdown.appendChild(dropdownItem);
    });
    
    // Show dropdown
    searchDropdown.style.display = filteredItems.length > 0 ? "block" : "none";
  });
  
  // Hide dropdown when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!event.target.matches("#searchInput")) {
      searchDropdown.style.display = "none";
    }
  });
}

// filter functionality
if(viewFilters){
  let viewFiltersBool = false
   const viewFiltersFunc =()=>{
    
    viewFiltersBool = !viewFiltersBool
    let viewFiltersDiv = viewFiltersBool; 
    if(viewFiltersDiv){
      viewFilters.classList.add('view-filters-clicked') 
      console.log(viewFilters)
    } else {
      viewFilters.classList.remove('view-filters-clicked') 
      console.log('bye')
    }
   }
  viewFilters.addEventListener("click", ()=> viewFiltersFunc())
}