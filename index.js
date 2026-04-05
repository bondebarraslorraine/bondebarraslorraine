const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const hole = document.getElementById("hole");

const header = document.getElementById("header");
const logo = document.getElementById("logo");

const navBarLink = document.querySelectorAll(".navbar-link");
const title = document.getElementById("title");

var src= "images/menu-2.png";


var slided = false;
var uptaded = false;
var headerVisible = false;
var test = 1;

menu.classList.add("desactive");

menu.addEventListener("click", menuSlide);

window.addEventListener("scroll",holeEffect);
window.addEventListener('resize',manageResize);

function manageResize(){
    if (slided){
        navbar.classList.remove("active");
        navbar.classList.add("desactive");
        navbar.classList.remove("nav-scroll");
        menu.src = "images/menu-2.png";
        document.body.classList.remove('body-unscroll');
        
        if(parseInt(window.scrollY) > 100){
            logo.classList.add("logo-visible"); //decrease logo size
            title.classList.add("title-visible");
        }
        
        slided = false;
        console.log("Navbar : Menu désactivé");

    }
    
}

function menuSlide(){
    if (!slided){
        navbar.classList.remove("desactive");
        navbar.classList.add("active");
        document.body.classList.add('body-unscroll');
        navbar.classList.add("nav-scroll");
        menu.src = "images/cancel.png";
        logo.classList.remove("logo-visible");  //increase logo size
        title.classList.remove("title-visible");
        slided = true;

    }else {
        navbar.classList.add("desactive");
        navbar.classList.remove("active");
        document.body.classList.remove('body-unscroll');
        navbar.classList.remove("nav-scroll");
        menu.src = "images/menu-2.png";
        
        if(parseInt(window.scrollY) > 100){
            logo.classList.add("logo-visible"); //decrease logo size
            title.classList.add("title-visible");
        }else{
            title.classList.remove("title-visible");
        }

        slided = false;
        console.log("Menu désactivé");
    }

}

function updatePicture(){

    hole.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;

    uptaded = false;
}

function holeEffect(){
    
    if(!headerVisible){
        if(parseInt(window.scrollY) > 100){
            header.classList.add("header-visible")
            title.classList.add("title-visible");
            logo.classList.add("logo-visible");

            navBarLink.forEach(e => {
            e.classList.add("navbar-link-visible");
        })
            headerVisible = true;
        }
    }else{
        if(parseInt(window.scrollY) < 100){
            header.classList.remove("header-visible");
            title.classList.remove("title-visible");
            logo.classList.remove("logo-visible");

            navBarLink.forEach(e => {
            e.classList.remove("navbar-link-visible");
        })
            headerVisible = false;
        }
    }
    
    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;

    }
    

}
