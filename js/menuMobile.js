//Função para abrir o menu mobile;
const BtnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('click');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

    const hamburger = document.getElementById('container-headerr');
    hamburger.classList.toggle('active');
    const active1 = hamburger.classList.contains('active');
}
        
BtnMobile.addEventListener('click', toggleMenu);

/* Função para fechar o menu quando clicar fora dele */
const fecharMenuFora = document.getElementById('main');

function fecharMenuForaa(){
    const menu = document.getElementById('click');
    menu.classList.remove('active');

    const hamburger = document.getElementById('container-headerr');
    hamburger.classList.remove('active');
}

fecharMenuFora.addEventListener('click', fecharMenuForaa);