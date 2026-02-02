    'use strict'
    //Criei esta const(variavel) par utilizar no adicionar evento futuro(addEventListener)
    const botaoTrocarCor = document.getElementById('botao-trocar-cor')

    function trocarCor(){
        const corUsuario = document.getElementById('cor-usuario').value
        //troca a cor da variavel que atribui e criei no style.css
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
    //Eu criei esse escutador para verificar oq foi clicado
    botaoTrocarCor.addEventListener('click', trocarCor)
