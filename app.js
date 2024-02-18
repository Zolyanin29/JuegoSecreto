let numeroSecreto = 0;
let intentos = 4;
let listaNumerosSorterados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarElementos (elemento,texto){
    let elementosHTML = document.querySelector(elemento);
    elementosHTML.innerHTML = texto;
    return;
}

function verificarElemento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarElementos('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarElementos('p','El numero secreto es menor');
        } else{
            asignarElementos('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorterados);
        //si ya sorteamos todos los numeros
    if (listaNumerosSorterados.length == numeroMaximo){
        asignarElementos('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorterados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorterados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesDeInicio(){
    asignarElementos('h1','Juego del numeroo secreto!');
    asignarElementos('p',`Escoje un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesDeInicio();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesDeInicio();

