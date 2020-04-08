const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector(".main-nav-mobile")
const scrollBtn = document.querySelector('.scroll-btn')

menu.addEventListener('click', () => { 
    menu.classList.toggle('hamburger--active'); 

    if (menu.classList.contains("hamburger--active")){
        mobileMenu.classList.add("main-nav-mobile--active")
        mobileMenu.classList.remove("main-nav-mobile--closed")
    } else {
        mobileMenu.classList.remove("main-nav-mobile--active")
        mobileMenu.classList.add("main-nav-mobile--closed")
    }
});   

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("main-nav-mobile--active")
    menu.classList.remove('hamburger--active'); 
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }


  scrollBtn.addEventListener("click", () => {
document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  
    
 