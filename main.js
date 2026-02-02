    'use strict'
    //Criei esta const(variavel) par utilizar no adicionar evento futuro(addEventListener)
    const botaoTrocarCor = document.getElementById('botao-trocar-cor')
    const corVerde = document.getElementById('botao-verde')
    const corAzul = document.getElementById('botao-azul')
    const corCinza = document.getElementById('botao-cinza')
    

    function trocarCor(){
        const corUsuario = document.getElementById('cor-usuario').value
        //troca a cor da variavel que atribui e criei no style.css
        document.documentElement.style.setProperty('--color-bg', corUsuario)
        if(corUsuario == 'amarelo'){
            document.documentElement.style.setProperty('--color-bg' ,'yellow')
        }else if(corUsuario == 'preto'){
            document.documentElement.style.setProperty('--color-bg' ,'black')
        }else if(corUsuario == 'branco') {
            document.documentElement.style.setProperty('--color-bg' ,'white')
        }else{
            document.documentElement.style.setProperty('--color-bg' ,corUsuario)
        }
    }

    function botaoVerde (){
        
        document.documentElement.style.setProperty('--color-bg', 'green')
    }
    function botaoAzul (){
        
        document.documentElement.style.setProperty('--color-bg', 'blue')
    }
    function botaoCinza (){
        
        document.documentElement.style.setProperty('--color-bg', 'gray')
    }

    //Eu criei esse escutador para verificar oq foi clicado
    botaoTrocarCor.addEventListener('click', trocarCor)
    corVerde.addEventListener('click',botaoVerde)
    corAzul.addEventListener('click',botaoAzul)
    corCinza.addEventListener('click',botaoCinza)
