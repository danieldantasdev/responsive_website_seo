let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.container-header .container-nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.container-header .scroll-indicator').style.width = percentage + '%';
};

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .box .image, .box,
    #services .box, #services .card,
    #work .image,
    #about .image, #about .text,
    #contact .box-container, #contact .box, #contact .form,
    .newsletter,
    .quick-links,
    .credit,
    footer .brand, footer .social
    `,
    { interval: 50 }
)
