let name = document.getElementById('name');
let km = document.getElementById('kmDaPercorrere');
let eta = document.getElementById('eta');
let button = document.getElementById('calcola');

    // costo al km
    let prezzoAlKm = 0.21;

    // prezzo biglietto intero
    let prezzoBiglietto = km * prezzoAlKm;
    
    // calcolo sconto minorenni 20%
    let scontoMinorenni = (prezzoBiglietto * 20) /100;
    let prezzoMinorenni = prezzoBiglietto - scontoMinorenni;
    
    // calcolo sconto Over 65 40%
    let scontoOver = (prezzoBiglietto * 40) /100;
    let prezzoOver = prezzoBiglietto - scontoOver;
    

button.addEventListener('click',
    function(){

        if(name.value=="" || km.value=="" || eta.value==""){
            alert('Inserisci un valore valido.');
        }        
        else if (eta < 18){
            document.getElementById('resultEta').innerHTML = "Under 18";
        }
        else if(eta > 65){
            document.getElementById('resultEta').innerHTML = "Over 65";
        }
        else{
            document.getElementById('resultEta').innerHTML = "Prezzo standard";
            document.getElementById('resultCarrozza').innerHTML = Math.floor(Math.random()*10);
            document.getElementById('resultCodice').innerHTML = Math.floor(Math.random()*100);
            document.getElementById('resultPrezzo').innerHTML = prezzoBiglietto;
        }
    }
)
