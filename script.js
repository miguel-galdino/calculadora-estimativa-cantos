
const botaoToggleMenu = document.querySelector('#toggle-section');

botaoToggleMenu.addEventListener('click', toggleMenu)

const dropdownSection = document.querySelector('#dropdown-input-section');

function toggleMenu(){
    if(dropdownSection.style.display === 'none'){
        dropdownSection.style.display = 'block'
        botaoToggleMenu.innerHTML = 'Cancelar'
    }else{
        dropdownSection.style.display = 'none'
        botaoToggleMenu.innerHTML = 'Calcular'
    }
}

const botaoCalculoMediaRecente = document.querySelector('#calc');

botaoCalculoMediaRecente.addEventListener('click', calcularMediaRecente);

function calcularMediaRecente(){   
        const cantosJogo1 = Number(document.querySelector('#jogo1').value);
        const cantosJogo2 = Number(document.querySelector('#jogo2').value);
        const cantosJogo3 = Number(document.querySelector('#jogo3').value);
        const cantosJogo4 = Number(document.querySelector('#jogo4').value);
        const cantosJogo5 = Number(document.querySelector('#jogo5').value);

        const mediaRecente = (cantosJogo1 + cantosJogo2 + cantosJogo3 + cantosJogo4 + cantosJogo5)/5
        capturaStringsMediaRecente(mediaRecente)

        resetaCamposMediaRecente()

}

function resetaCamposMediaRecente(){
    document.querySelector('#jogo1').value = ''
    document.querySelector('#jogo2').value = ''
    document.querySelector('#jogo3').value = ''
    document.querySelector('#jogo4').value = ''
    document.querySelector('#jogo5').value = ''
}

const inputMediaRecente1 = document.querySelector('#mediaRecente1')
const inputMediaRecente2 = document.querySelector('#mediaRecente2')

function capturaStringsMediaRecente(mediaRecente){

    if (inputMediaRecente1.value === ''){
        inputMediaRecente1.value = mediaRecente
    }else{
        inputMediaRecente2.value = mediaRecente
        if(inputMediaRecente1 && inputMediaRecente2 !== ''){
            toggleMenu()
        }
    }

}

const botaoSomarCampos = document.querySelector('#somarCampos')
botaoSomarCampos.addEventListener('click', atualizaStringsCalculoFinal)

const mediaRecenteCombinada = document.querySelector('#mediaRecenteCombinada');

const mediaHomeTime1 = document.querySelector('#mediaHomeTime1')
const mediaCedeAwayTime2 = document.querySelector('#mediaCedeAwayTime2')
const inputMedia2 = document.querySelector('#media2')

const mediaCedeHomeTime1 = document.querySelector('#mediaCedeHomeTime1')
const mediaAwayTime2 = document.querySelector('#mediaAwayTime2')
const inputMedia3 = document.querySelector('#media3')

function atualizaStringsCalculoFinal(){
    mediaRecenteCombinada.value = Number(inputMediaRecente1.value) + Number(inputMediaRecente2.value)

    inputMedia2.value = Number(mediaHomeTime1.value) + Number(mediaCedeAwayTime2.value)

    inputMedia3.value = Number(mediaCedeHomeTime1.value) + Number(mediaAwayTime2.value) 
}

const botaoCalculaEstimativa = document.querySelector('#calculaEstimativa')
botaoCalculaEstimativa.addEventListener('click', calculoFinal)

const outputResultado = document.querySelector('#resultado')

function calculoFinal (){
    const estimativa = (Number(mediaRecenteCombinada.value) + Number(inputMedia2.value) + Number(inputMedia3.value))/3
    outputResultado.innerHTML = 'A estimativa de cantos para esta partida é: ' + estimativa
}

const botaoLimparCampos = document.querySelector('#limparCampos')
botaoLimparCampos.addEventListener('click', limpaCampos)

function limpaCampos (){
    inputMediaRecente1.value = ''
    inputMediaRecente2.value = ''

    mediaHomeTime1.value = ''
    mediaCedeAwayTime2.value = ''

    mediaCedeHomeTime1.value = ''
    mediaAwayTime2.value = ''

    outputResultado.innerHTML = ''
}