const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".indicator");

navLinks.forEach((navLink, index)=> {
    navLink.addEventListener("click", ()=> {
        document.querySelector(".active").classList.remove("active");
        navLink.classList.toggle("active");
        indicator.style.left = `${index * 9.7 - 0.1 }rem`;
    })
})