// 1. Recuperiamo gli elementi che ci occorrono;
function calcolaPrezzo() {
    const km = parseFloat(document.getElementById("km").value); // Converte il valore del campo in un numero decimale (utile per i chilometri, che possono essere frazionati).
    const eta = parseInt(document.getElementById("eta").value); //  Converte il valore in un numero intero (perché l'età è un numero intero).


    // Verifichiamo che i campi inseriti siano validi;
    if (isNaN(km) || isNaN(eta)) {
      alert("Per favore inserisci valori validi per i chilometri e l'età.");
      return;
    }

    const prezzoBase = km * 0.21;

    let prezzoFinale = prezzoBase;

    // Calcoliamo il prezzo del biglietto applicandogli gli sconti;
    if (eta < 18) {
      prezzoFinale = prezzoBase * 0.8;
    } 
    else if (eta > 65) {
      prezzoFinale = prezzoBase * 0.6;
    }
    else{
        prezzoFinale;
    }

    alert("Il prezzo del biglietto è: €" + prezzoFinale.toFixed(2));
  }

  // INFORMAZIONI BIGLIETTO
  const nameSurname = getElementById('name-surname');
  const prezzo = getElementById('prezzo');
  
