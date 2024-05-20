const html =  document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const btnStartPause = document.querySelector('#start-pause')
const botoes = document.querySelectorAll('.app__card-button')
const btnMusica = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')
let tempoDecorridoEmSegundos = 5


musica.loop  = true;

btnMusica.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})

btnFoco.addEventListener('click', () => {
    AlterarContext('foco')
    btnFoco.classList.add('active')
})

btnCurto.addEventListener('click', () => {
    AlterarContext('descanso-curto')
    btnCurto.classList.add('active')
})

btnLongo.addEventListener('click', () => {
    AlterarContext('descanso-longo')
    btnLongo.classList.add('active')
})

function AlterarContext(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>` 
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar umua respirada.<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar á superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>` 
            break;   
        default:
            break;
    }

}

const contagemRegressiva = () => {
    tempoDecorridoEmSegundos -= 1
}

btnStartPause.addEventListener('click', contagemRegressiva)