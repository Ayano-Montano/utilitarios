const btnMobile = document.getElementById("btn-mobile");

function togglemenu(event) {

    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label','Fecha Menu');

    }else {
        event.currentTarget.setAttribute('aria-label','Abri Menu');
    }

}

btnMobile.addEventListener('click', togglemenu)
btnMobile.addEventListener('touchstart', togglemenu)