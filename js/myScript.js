var btnMenu = document.getElementById("btn-menu");
//uzimamo specifican id, id menija
btnMenu.addEventListener("click", toggleMenu);
//i kazemo kada se klikne menu onda se aktivira funkcija toggleMeni

//ovo e dole je event objekat, i prosledjuje se eventhandleru kada se desi event
function toggleMenu(e) {
    
    var divOverlay = document.getElementsByClassName("overlay")[0];
    var speed = 10;
    
    
    var eventTarget = e.target;
    //event properti vraca element koji triguje event
    
    if( eventTarget.className == "btn-open" ) {
        fadeIn(divOverlay, speed);
        //prosledjujemo element i brzinu koju smo podesili gore
        eventTarget.className = "btn-close";
        //kazemo ako je od event ime klase btn-open onda prebacujemo u btn-close
    } else if ( eventTarget.className == "btn-close") {
        fadeOut(divOverlay, speed);
        eventTarget.className = "btn-open";
        //ovde kazemo obrnuto
    }
    //znaci kad kliknemo menu odnosno defoltno je btn-open, onda ce da se prebaci na btn-close sve dok se ne odlucimo da ga zatvorimo/close i onda se prebaci u normalno/btn-open
}
//dodali smo i fadeIn i fadeOut

function fadeIn(elem, speed) {
    
    var inInterval = setInterval(function(){
    //postavljamo promenljivu i zovemo setInterval funkciju

    elem.style.opacity = Number(elem.style.opacity) + 0.02;
    
    if (elem.style.opacity >= 1) {
        
        elem.style.opacity = 1;
        clearInterval(inInterval);
    }    
        
        
    }, speed); // 10ms == .01s
    
    
    
}

function fadeOut(elem, speed) {
    
    var outInterval = setInterval(function(){
        
    elem.style.opacity = Number(elem.style.opacity) - 0.02;
    
    if (elem.style.opacity <= 0) {
        
        elem.style.opacity = 0;
        clearInterval(outInterval);
     //ovo ce da zauzstavi ako elem.style.opaciti bude vece od 1   
    }    
        
        
    }, speed); // 10ms == .01s
    
    
    
}
















