let numCelle = 100;
let grid = document.getElementById("grid");
const numeriUnici = generaNumeriCasuali();

document.getElementById("btnPlay").addEventListener("click", function () {
    for (let i = 1; i <= numCelle; i++) {
        let cella = creaQuadrato(i);
        grid.appendChild(cella);
    }
});

// Crea ogni elemento quadrato
function creaQuadrato(numero) {
    const cella = document.createElement("div");
    cella.classList.add("squareLow");

    const numeroCella = document.createElement("p");
    cella.appendChild(numeroCella);
    cella.classList.add("center")

    numeroCella.textContent = numero;

    // Evento al click
    cella.addEventListener("click", function () {
        cella.classList.add("bAzurro");
        const cellaClicata = numero; 
        console.log("Cella cliccata: " + cellaClicata);

        // Controla se i numeri clicati sono gli stessi dei numeri cauali
        if (numeriUnici.includes(cellaClicata)){
            cella.style.backgroundColor = "red";
            cella.innerHTML= "Hai perso"
            console.log("Hai perso");
        } else {
            console.log("Continua giocando");
            cella.innerHTML= "Continua"

        }
    });

    return cella;
}

// Genera i numeri casuali
function generaNumeriCasuali() {
    const numeriCasuali = [];
    const min = 1;
    const max = 100;

    while (numeriCasuali.length < 16) {
        const numeroCasuale = getRndInteger(min, max);

 // Verifica se il numero casuale generato è già nell'array

        if (!numeriCasuali.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
        }
    }

    return numeriCasuali;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeriUnici);

  
