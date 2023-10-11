const aviso = document.querySelector('.pop-up__content');

function sortear(){
    const menorValor = Number(document.querySelector('#menorValor').value);
    const maiorValor = Number(document.querySelector('#maiorValor').value);
    
    if(menorValor && maiorValor){
        const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor);

        if(resultado){
            let tableResultado = document.querySelector('.sorteador__resultados');
            let resultadoInformation = document.querySelector('.sorteador__resultados div p');

            tableResultado.classList.add('visible');
            if(resultado < 10000){
                resultadoInformation.textContent = resultado;
            } else {
                let iconResultados = document.querySelector('.sorteador__resultados div');
                iconResultados.style.cssText = 'width: 250px; border-radius: 30px;';
                resultadoInformation.textContent = resultado;
            }
            
        }

    } else {
        aviso.classList.add('alert');
    }
};

const submitAlert = document.querySelector('.pop-up__submit');

submitAlert.addEventListener('click', function(){
    if(aviso.classList.contains('alert')){
        aviso.classList.remove('alert');
    }
});