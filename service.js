const holeService = document.getElementById("hole-service");
const holeServiceBottom = document.getElementById("hole-service-bottom");


window.addEventListener("scroll",holeEffect);

function updatePicture(){
    
    holeService.style.backgroundPosition = `center calc(50% - ${window.scrollY * 0.3}px)`;
    scrollRate=0.15;

    holeServiceBottom.style.backgroundPosition = `center calc(50% - ${window.scrollY * scrollRate}px) `;

    uptaded = false;
    console.log("holeService",holeService)
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