let texto = document.getElementById('texto');
let montanhas = document.getElementById('montanhas');
let ceu = document.getElementById('ceu');
let base = document.getElementById('base');
let para = document.getElementById('para');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    texto.style.marginTop = value * 2.5+ 'px';
    montanhas.style.top = value * -1 + 'px';
    base.style.top = value * -0.09 + 'px';
    ceu.style.left = value * 2.5 + 'px'

})
