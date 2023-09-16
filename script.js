const navbarLeft = document.querySelector('#navbar-left');
const logo = document.querySelector('#logo');
const logoPlay = document.querySelector('#logo-text-play');
const logoLink = document.querySelector('#logo-text-link');

navbarLeft.addEventListener('mouseover', logoAnimation);

function logoAnimation(){
    logo.classList.add('animate-logo');
    logoPlay.classList.add('animate-play');
    logoLink.classList.add('animate-link');
    setTimeout(() => {
        logo.classList.remove('animate-logo');
        logoPlay.classList.remove('animate-play');
        logoLink.classList.remove('animate-link');
    }, 2001)
}


