const holeService = document.getElementById("hole-service");
const contactForm = document.getElementById("contact-form");
const mailSucces = document.getElementById("mail-succes");
const mailError = document.getElementById("mail-error");

console.log("formulaire = ",contactForm);


window.addEventListener("scroll",holeEffect);

contactForm.addEventListener("submit",sendMail);

function updatePicture(){
    holeService.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.15;
    
    uptaded = false;
}

function holeEffect(){
    
    if(!headerVisible){
        if(parseInt(window.scrollY) > 100){
            headerVisible = true;
        }
    }else{
        if(parseInt(window.scrollY) < 100){
            headerVisible = false;
        }
    }
    
    

    if(!uptaded){
        window.requestAnimationFrame(updatePicture);
        uptaded = true;

    }
    

}
/* EmailJS sender  */

function sendMail(event){
    event.preventDefault();
    let nom = document.getElementById("nom").value;
    let sujet = document.getElementById("sujet").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let parameters =  {nom: nom, sujet: sujet, email: email, message : message};

    emailjs.send('service_mzbse3d', 'template_6e7j0ho', parameters)
        .then(() => {
            console.log('Message Envoyé!');
            contactForm.reset();
            contactForm.style.display = "none";
            mailSucces.style.display = "block";
        }, (error) => {
            contactForm.style.display = "none";
            mailError.style.display = "block";
            console.log('Erreur Message non envoyé', error);
        });
}


