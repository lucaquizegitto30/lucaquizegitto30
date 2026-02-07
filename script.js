const domande = [
  {
    titoloDomanda: "1. Cultura egiziana",
    testo: "Quale faraone è noto per aver tentato una delle prime forme di monoteismo?",
    risposte: [
      { testo: "Ramses II", giusta: false },
      { testo: "Tutankhamon", giusta: false },
      { testo: "Akhenaton", giusta: true },
      { testo: "Seti I", giusta: false }
    ]
  },
  {
    titoloDomanda: "2. Cultura egiziana",
    testo: "Quale di questi dèi aveva testa di falco?",
    risposte: [
      { testo: "Anubi", giusta: false },
      { testo: "Horus", giusta: true },
      { testo: "Seth", giusta: false },
      { testo: "Osiride", giusta: false }
    ]
  },
  {
    titoloDomanda: "3. Cultura egiziana",
    testo: "Quale scoperta ha permesso di decifrare i geroglifici egizi?",
    risposte: [
      { testo: "La Stele di Rosetta", giusta: true },
      { testo: "Il Papiro di Torino", giusta: false },
      { testo: "Il Codice di Hammurabi", giusta: false },
      { testo: "Il Tempio di Abu Simbel", giusta: false }
    ]
  },
  {
    titoloDomanda: "4. Cultura egiziana",
    testo: "Come si chiamano le tre piramidi d’Egitto?",
    risposte: [
      { testo: "Cheope, Chefren, Marcus", giusta: false },
      { testo: "Cheope, Chef, Micere", giusta: false },
      { testo: "Cheope, Chris, Miceretto", giusta: false },
      { testo: "Cheope, Chefren, Micerino", giusta: true }
    ]
  },
  {
    titoloDomanda: "5. Cultura egiziana",
    testo: "Chi era il Dio egizio della mummificazione e della vita dopo la morte",
    risposte: [
      { testo: "Seth", giusta: false },
      { testo: "Anubi", giusta: true },
      { testo: "Ade", giusta: false },
      { testo: "Osiride", giusta: false }
    ]
  },
  {
    titoloDomanda: "6. Cultura generale",
    testo: "In fisica, cosa misura l’unità chiamata “weber”?",
    risposte: [
      { testo: "Resistenza elettrica", giusta: false },
      { testo: "Intensità di corrente", giusta: false },
      { testo: "Flusso Magnetico", giusta: true },
      { testo: "Campo elettrico", giusta: false }
    ]
  },
  {
    titoloDomanda: "7. Cultura generale",
    testo: "Quale è la lingua ufficiale del Brasile?",
    risposte: [
      { testo: "Spagnolo", giusta: false },
      { testo: "Inglese", giusta: false },
      { testo: "Francese", giusta: false },
      { testo: "Portoghese", giusta: true }
    ]
  },
  {
    titoloDomanda: "8. Cultura generale",
    testo: "Chi ha diretto il film Titanic?",
    risposte: [
      { testo: "Steven Spielberg", giusta: false },
      { testo: "James Cameron", giusta: true },
      { testo: "Andrea Brambilla", giusta: false },
      { testo: "Ridley Scott", giusta: false }
    ]
  },
  {
    titoloDomanda: "9. Cultura generale",
    testo: "Qual è il continente con più Stati al Mondo?",
    risposte: [
      { testo: "America", giusta: false },
      { testo: "Europa", giusta: false },
      { testo: "Africa", giusta: true },
      { testo: "Asia", giusta: false }
    ]
  },
  {
    titoloDomanda: "10. Cultura generale",
    testo: "In musica, cosa indica il termine “tempo rubato”?",
    risposte: [
      { testo: "Errore ritmico", giusta: false },
      { testo: "Cambio improvviso di tempo", giusta: false },
      { testo: "Liberta’ Espressiva Del Tempo", giusta: true },
      { testo: "Tempo molto veloce", giusta: false }
    ]
  },
  {
    titoloDomanda: "11. Inter",
    testo: "In che anno è stata fondata l’Inter?",
    risposte: [
      { testo: "1918", giusta: false },
      { testo: "2006", giusta: false },
      { testo: "1889", giusta: false },
      { testo: "1908", giusta: true }
    ]
  },
  {
    titoloDomanda: "12. Inter",
    testo: "Quante Champions League ha vinto l’Inter?",
    risposte: [
      { testo: "3", giusta: true },
      { testo: "2", giusta: false },
      { testo: "6", giusta: false },
      { testo: "10", giusta: false }
    ]
  },
  {
    titoloDomanda: "13. Inter",
    testo: "Chi è il miglior marcatore della storia dell’Inter?",
    risposte: [
      { testo: "Lautaro Martinez", giusta: false },
      { testo: "Bobo Vieri", giusta: false },
      { testo: "Alessandro Altobelli", giusta: false },
      { testo: "Giuseppe Meazza", giusta: true }
    ]
  },
  {
    titoloDomanda: "14. Inter",
    testo: "Contro quale squadra l’Inter ha vinto la finale di Champions del 2010?",
    risposte: [
      { testo: "Barcellona", giusta: false },
      { testo: "PSG", giusta: false },
      { testo: "Bayern Monaco", giusta: true },
      { testo: "Milan", giusta: false }
    ]
  },
  {
    titoloDomanda: "15. Inter",
    testo: "Chi era soprannominato “The Wall”?",
    risposte: [
      { testo: "Walter Samuel", giusta: true },
      { testo: "Lucio", giusta: false },
      { testo: "Marco Materazzi", giusta: false },
      { testo: "Andrea Ranocchia", giusta: false }
    ]
  },
  {
    titoloDomanda: "16. Anime",
    testo: "Come si chiamano le mura più interne in attacco dei giganti?",
    risposte: [
      { testo: "Wall Sina", giusta: true },
      { testo: "Wall rose", giusta: false },
      { testo: "Wall Maria", giusta: false },
      { testo: "Wall marley", giusta: false }
    ]
  },{
    titoloDomanda: "17. Anime",
    testo: "Quale è il nome dell’hado 31 in Bleach?",
    risposte: [
      { testo: "Sokatsui ", giusta: false },
      { testo: "Byaku Banrai ", giusta: false },
      { testo: "Shakkaoh ", giusta: true },
      { testo: "Haien", giusta: false }
    ]
  },
  {
    titoloDomanda: "18. Anime",
    testo: "Come si chiama la puntata di Death Note in cui muore L?",
    risposte: [
      { testo: "Giustizia", giusta: false },
      { testo: "Silenzio ", giusta: true },
      { testo: "Rinascita ", giusta: false },
      { testo: "Resurrezione ", giusta: false }
    ]
  },
  {
    titoloDomanda: "19. Anime",
    testo: "TODO?",
    risposte: [
      { testo: "TODO", giusta: false },
      { testo: "TODO", giusta: false },
      { testo: "TODO", giusta: true },
      { testo: "TODO", giusta: false }
    ]
  },
  {
    titoloDomanda: "20. Anime",
    testo: "TODO?",
    risposte: [
      { testo: "TODO", giusta: false },
      { testo: "TODO", giusta: false },
      { testo: "TODO", giusta: true },
      { testo: "TODO", giusta: false }
    ]
  },
  {
    titoloDomanda: "21. Famiglia",
    testo: "Qual è il segno zodiacale di Lorenzo?",
    risposte: [
      { testo: "risp", giusta: false },
      { testo: "risp", giusta: true },
      { testo: "rispi", giusta: false },
      { testo: "risp", giusta: false }
    ]
  },
  {
    titoloDomanda: "22. Famiglia",
    testo: "Dove è nato il Nando?",
    risposte: [
      { testo: "risp", giusta: false },
      { testo: "risp", giusta: true },
      { testo: "rispi", giusta: false },
      { testo: "risp", giusta: false }
    ]
  },
  {
    titoloDomanda: "23. Famiglia",
    testo: "Che scuola superiore fa una della sue cugine?",
    risposte: [
      { testo: "risp", giusta: false },
      { testo: "risp", giusta: true },
      { testo: "rispi", giusta: false },
      { testo: "risp", giusta: false }
    ]
  },
  {
    titoloDomanda: "24. Famiglia",
    testo: "Qual è stato il primo lavoro di Tommaso?",
    risposte: [
      { testo: "risp", giusta: false },
      { testo: "risp", giusta: true },
      { testo: "rispi", giusta: false },
      { testo: "risp", giusta: false }
    ]
  },
  {
    titoloDomanda: "25. Famiglia",
    testo: "Qual è il segno zodiale di sua mamma?",
    risposte: [
      { testo: "risp", giusta: false },
      { testo: "risp", giusta: true },
      { testo: "rispi", giusta: false },
      { testo: "risp", giusta: false }
    ]
  },
];

let i = 0;          // indice domanda corrente
let punteggio = 0;  // punteggio totale

const contenuto = document.getElementById("contenuto");

function mostraDomanda() {
  contenuto.innerHTML = ""; // cancella contenuto precedente
    document.body.className = `domanda${i + 1}`;
    const titoloDomanda = document.createElement("h1");
    titoloDomanda.className = "titoloDomanda";
  titoloDomanda.innerText = domande[i].titoloDomanda;
  contenuto.appendChild(titoloDomanda);

  // Domanda
  const pDomanda = document.createElement("h2");
  pDomanda.className = "pDomanda";
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
      feedback.style.display = "block";
      feedback.innerText = r.giusta ? "Risposta corretta!" : "Risposta sbagliata!";
      feedback.style.color = r.giusta ? "green" : "red";

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
