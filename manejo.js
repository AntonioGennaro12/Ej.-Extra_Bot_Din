const divBotones        = document.querySelector ("#botones");
const inputCantBtnes    = document.querySelector ("input"); 
const cntH1             = document.querySelector ("#cnt-h1");   
const h1Contador        = document.querySelector ("h1");

// Cuenta las veces que fue pulsado
const contClicks =  [0]; // trabaja con un elemento inicial (el arreglo tine n+1)

let contador   = 0;
let nroBotns   = 0;  

/* Vacia el contenedor de botones en la pagina */
divBotones.innerHTML = "";

/**
 * Vacia el contenedor de botones en la pagina
 */
function reiniciarContenedorBotones() {
    divBotones.innerHTML = "";
    nroBotns = 0;
    contador = 0;
    cntH1.style.display = "grid";
    h1Contador.innerHTML = `Contador/ Acumulador= ${contador}`;
    let longAct = contClicks.length;
    for (let i=1; i<longAct ; i++){
        contClicks.pop();
    }
    console.log("rest:"+contClicks.length);
} 

/**
 * Genera el html de todos los botones requeridos por el usuario
 */
function generarBotonesHtml() {
    console.log("in :"+nroBotns);
    for (let i=0 ; i < inputCantBtnes.value; i++) {
        contClicks.push(0);
        nroBotns++;
        divBotones.innerHTML += `
            <button onclick="click0(event,${nroBotns})">Botón:${nroBotns} >>> Acum. +=${nroBotns}</button>
        `;
    } 
    console.log("ON:"+contClicks.length);
}

/**
 * Genera la cantidad de botones requeridos por el usuario
 */
function generarBtnes(){
    reiniciarContenedorBotones()
    generarBotonesHtml();
}


/**
 * Incrementa en 1 el valor del contador en la pagina
 */
function click0(event, idx){
    console.log("entró boton "+idx);
    let boton = event.target;
    contClicks[idx]++;
    boton.textContent = "Botón:"+(idx)+">>> Acum. +="+idx+", NroVeces= "+contClicks[idx] ;               
    boton.style.backgroundColor = "yellow";
    contador+=idx;
    h1Contador.innerHTML = `Contador/ Acumulador= ${contador}`;
}
