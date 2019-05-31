function scrollUnhide(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.4;
    //console.log(introPosition)

    if(introPosition < screenPosition){
        introText.classList.add('intro-unhide');
    }
};

window.addEventListener('scroll', scrollUnhide);

scrollUnhide();