document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    

    $('.symbol__carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        slidesToShow: 5,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });


    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaElementosHeader();
        } else{
            exibeElementosHeader();
        }
    })

    //seção de atrações, programação da abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }

    //sessão FAQ, accordion
    for (let i= 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosHeader (){
    const header = document.querySelector('header');
    header.classList.add('header--is--hidden');
}

function exibeElementosHeader (){
    const header = document.querySelector('header');
    header.classList.remove('header--is--hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas (){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
var lighter = document.documentElement;
lighter.addEventListener('mousemove', e => {
    lighter.style.setProperty('--x', e.clientX + 'px')
    lighter.style.setProperty('--y', e.clientY + 'px')
})