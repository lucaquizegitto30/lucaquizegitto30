const domande = [
  {
    titoloDomanda: "1. Domanda culturale locale",
    testo: "Quale faraone è noto per aver tentato una delle prime forme di monoteismo?",
    risposte: [
      { testo: "Ramses II", giusta: false },
      { testo: "Tutankhamon", giusta: false },
      { testo: "Akhenaton", giusta: true },
      { testo: "Seti I", giusta: false }
    ]
  },
  // {
  //   titoloDomanda: "2. Domanda culturale locale",
  //   testo: "Quale di questi dèi aveva testa di falco?",
  //   risposte: [
  //     { testo: "Anubi", giusta: false },
  //     { testo: "Horus", giusta: true },
  //     { testo: "Seth", giusta: false },
  //     { testo: "Osiride", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "3. Domanda culturale locale",
  //   testo: "Quale scoperta ha permesso di decifrare i geroglifici egizi?",
  //   risposte: [
  //     { testo: "Il Papiro di Torino", giusta: false },
  //     { testo: "La Stele di Rosetta", giusta: true },
  //     { testo: "Il Codice di Hammurabi", giusta: false },
  //     { testo: "Il Tempio di Abu Simbel", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "4. Domanda culturale locale",
  //   testo: "domanda 4",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "5. Domanda culturale locale",
  //   testo: "domanda 5",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "6. Famiglia",
  //   testo: "Quando è nato il marito della Vale?",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "7. Famiglia",
  //   testo: "Dove è nato il Nando?",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "8. Famiglia",
  //   testo: "Che scuola superiore fa una della sue cugine?",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "9. Famiglia",
  //   testo: "Qual è stato il primo lavoro di Tommaso?",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
  // {
  //   titoloDomanda: "10. Famiglia",
  //   testo: "Qual è il segno zodiale di sua mamma?",
  //   risposte: [
  //     { testo: "risp", giusta: false },
  //     { testo: "risp", giusta: true },
  //     { testo: "rispi", giusta: false },
  //     { testo: "risp", giusta: false }
  //   ]
  // },
];

let i = 0;          // indice domanda corrente
let punteggio = 0;  // punteggio totale

const contenuto = document.getElementById("contenuto");

function mostraDomanda() {
  contenuto.innerHTML = ""; // cancella contenuto precedente
    document.body.className = `domanda${i + 1}`;
    const titoloDomanda = document.createElement("h1");
  titoloDomanda.innerText = domande[i].titoloDomanda;
  contenuto.appendChild(titoloDomanda);

  // Domanda
  const pDomanda = document.createElement("h2");
  pDomanda.innerText = domande[i].testo;
  contenuto.appendChild(pDomanda);

  // Box risposte
  domande[i].risposte.forEach((r) => {
    const div = document.createElement("div");
    div.className = "risposta";
    div.innerText = r.testo;

    div.onclick = () => {
      // Colora il box cliccato
      div.style.backgroundColor = r.giusta ? "green" : "red";
      div.style.color = "white";
      
      // Se la risposta è sbagliata, mostra anche quella corretta
      if (!r.giusta) {
        const tutte = document.querySelectorAll(".risposta");
        tutte.forEach((b, index) => {
          if (domande[i].risposte[index].giusta) {
            b.style.backgroundColor = "green";
            b.style.color = "white";
          }
        });
      } else {
        punteggio++;
      }

      // Mostra feedback
      feedback.style.display = "block";
      feedback.innerText = r.giusta ? "Risposta corretta!" : "Risposta sbagliata!";
      feedback.style.color = r.giusta ? "green" : "red";

      // Mostra bottone prossima domanda
      nextBtn.style.display = "inline-block";

      // Disabilita tutte le risposte
      const tutte = document.querySelectorAll(".risposta");
      tutte.forEach(b => b.style.pointerEvents = "none");
    };

    contenuto.appendChild(div);
  });

  // Feedback div
  const feedback = document.createElement("div");
  feedback.id = "feedback";
  contenuto.appendChild(feedback);

  // Bottone prossima domanda
  const nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.innerText = "Prossima domanda →";
  nextBtn.onclick = () => {
    i++;
    if (i < domande.length) {
      mostraDomanda();
    } else {
      mostraRisultato();
    }
  };
  contenuto.appendChild(nextBtn);
}

// Mostra punteggio finale
function mostraRisultato() {
  contenuto.innerHTML = ""; 
  const boxPunteggio = document.createElement("div");
  boxPunteggio.id = "boxPunteggio";
  boxPunteggio.innerHTML = `<h2>Quiz completato!</h2>
    <h3>Il tuo punteggio: ${punteggio} / ${domande.length}</h3>`;
  contenuto.appendChild(boxPunteggio);
}

// Avvia quiz
mostraDomanda();
