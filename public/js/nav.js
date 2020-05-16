$( document ).ready(function() {
    console.log( "ready!" );

    let navbarButton = document.querySelector("#navbar-button");
let responsiveNav = document.querySelector('.responsive-nav');

navbarButton.addEventListener('click', e => {
    responsiveNav.classList.toggle('responsive-nav-active')
});

});
