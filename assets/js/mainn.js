
function criarHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',
        { hour12: false
        ,timeZone: "UTC"}
    )
}

let relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

/*COMEÇO DAS FUNÇÔES DO RELOGIO*/
function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.classList.remove('pausado');
        relogio.innerHTML = criarHora(segundos);
    },1000);
}

function pausarRelogio(){
    clearInterval(timer);
    relogio.classList.add('pausado');
}

function zerarRelogio(){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
}


//AQUI SERÁ RESP POR PEGAR OS EVENTOS
document.addEventListener('click',function(element){
    const el = element.target;
    
    if(el.classList.contains('zerar')){
        zerarRelogio()
    }

    if(el.classList.contains('iniciar')){
        clearInterval(timer);
        iniciarRelogio();
    }

    if(el.classList.contains('pausar')){
        pausarRelogio();
    }
})