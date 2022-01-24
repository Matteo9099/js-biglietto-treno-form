
let button = document.getElementById('calcola');

   
button.addEventListener('click',
    function(){

    let name = document.getElementById('name').value;
    let km = document.getElementById('kmDaPercorrere').value;
    let eta = document.getElementById('eta').value;

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
    
    document.getElementById('resultName').innerHTML = name;

        if(name=="" || km=="" || eta=="" || km <0){
            alert('Inserisci un valore valido.');
        }        
        else if (eta == 0){
            document.getElementById('resultEta').innerHTML = "Under 18";
            document.getElementById('resultCarrozza').innerHTML = Math.floor(Math.random()*10);
            document.getElementById('resultCodice').innerHTML = Math.floor(Math.random() * (99999 - 90000) + 90000);
            document.getElementById('resultPrezzo').innerHTML = prezzoMinorenni.toFixed(2) + " &euro;";      
        }
        else if(eta == 2){
            document.getElementById('resultEta').innerHTML = "Over 65";
            document.getElementById('resultCarrozza').innerHTML = Math.floor(Math.random()*10);
            document.getElementById('resultCodice').innerHTML = Math.floor(Math.random() * (99999 - 90000) + 90000);
            document.getElementById('resultPrezzo').innerHTML = prezzoOver.toFixed(2) + " &euro;";
        }
        else {
            document.getElementById('resultEta').innerHTML = "Prezzo standard";
            document.getElementById('resultCarrozza').innerHTML = Math.floor(Math.random()*10);
            document.getElementById('resultCodice').innerHTML = Math.floor(Math.random() * (99999 - 90000) + 90000);
            document.getElementById('resultPrezzo').innerHTML = prezzoBiglietto.toFixed(2) + " &euro;";
        }
    }
)

const menuToggle = document.getElementById('calcola');
const close = document.getElementById('close');

menuToggle.addEventListener('click',
    function(){
        const htmlTicket = document.querySelector('.ticket');
        htmlTicket.classList.add('active');
    }
)

close.addEventListener('click',
    function(){
        const htmlTicket = document.querySelector('.ticket');
        htmlTicket.classList.remove('active');
    }
)
