const immagini = [
  "images/sfondo.jpeg",
  "images/piramidi.jpeg",
  "images/cultura.jpeg",
  "images/inter.jpeg",
  "images/anime.jpeg",
  "images/famiglia.jpeg",
  "images/matteo.jpeg",
  "images/chiara.jpeg",
  "images/linda.jpeg",
  "images/bre.jpeg",
  "images/cri.jpeg",
  "images/meri.jpeg",
  "images/gruppo.jpeg"
];

immagini.forEach(src => {
  const img = new Image();
  img.src = src;
});

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
    testo: "Chi era il Dio egizio della mummificazione e della vita dopo la morte?",
    risposte: [
      { testo: "Seth", giusta: false },
      { testo: "Anubi", giusta: true },
      { testo: "Ade", giusta: false },
      { testo: "Osiride", giusta: false }
    ]
  },
  {
    titoloDomanda: "6. Cultura generale",
    testo: "In fisica, a cosa corrisponde l’unità di misura chiamata Weber?",
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
      { testo: "Libertà espressiva del tempo", giusta: true },
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
    testo: "Quante volte muore Vegeta in Dragon Ball Z?",
    risposte: [
      { testo: "0", giusta: false },
      { testo: "1", giusta: false },
      { testo: "2", giusta: true },
      { testo: "3", giusta: false }
    ]
  },
  {
    titoloDomanda: "20. Anime",
    testo: "Contro quale allenatore Ash propone a Pikachu di evolversi dopo una pesante sconfitta?",
    risposte: [
      { testo: "Brock", giusta: false },
      { testo: "Giovanni", giusta: false },
      { testo: "Sabrina", giusta: false },
      { testo: "Tenente Surge", giusta: true }
    ]
  },
  {
    titoloDomanda: "21. Famiglia",
    testo: "Di quale istituto previdenziale è l’incubo tua sorella?",
    risposte: [
      { testo: "INAIL", giusta: false },
      { testo: "INPS ", giusta: true },
      { testo: "CAF", giusta: false },
      { testo: "ACI", giusta: false }
    ]
  },
  {
    titoloDomanda: "22. Famiglia",
    testo: "Qual è il segno zodiacale di Lorenzo?",
    risposte: [
      { testo: "Ariete", giusta: false },
      { testo: "Acquario", giusta: false },
      { testo: "Toro", giusta: false },
      { testo: "Pesci", giusta: true }
    ]
  },
  {
    titoloDomanda: "23. Famiglia",
    testo: "Cosa vuole fare Ines da grande?",
    risposte: [
      { testo: "Dottoressa", giusta: false },
      { testo: "Influencer", giusta: false },
      { testo: "Veterinaria", giusta: true },
      { testo: "Principessa", giusta: false }
    ]
  },
  {
    titoloDomanda: "24. Famiglia",
    testo: "Quanto pesava Tecla quando è nata?",
    risposte: [
      { testo: "3650kg", giusta: false },
      { testo: "4100 gr", giusta: false },
      { testo: "4.1 gr", giusta: false },
      { testo: "3.65 kg", giusta: true }
    ]
  },
  {
    titoloDomanda: "25. Famiglia",
    testo: "Qual è stato il numero simbolico di maglia di Tommy?",
    risposte: [
      { testo: "4", giusta: true },
      { testo: "9", giusta: false },
      { testo: "15", giusta: false },
      { testo: "25", giusta: false }
    ]
  },
  {
    titoloDomanda: "26. Linda",
    testo: "Quale animale domestico avevo quando ero piccola?",
    risposte: [
      { testo: "Porcellino d’india", giusta: false },
      { testo: "Cavia peruviana", giusta: true },
      { testo: "Cincillà ", giusta: false },
      { testo: "Criceto", giusta: false }
    ]
  },
  {
    titoloDomanda: "27. Linda",
    testo: "A quale fermata della metro scendevo per andare da RCS?",
    risposte: [
      { testo: "Cimiano", giusta: false },
      { testo: "Cenisio", giusta: false },
      { testo: "Turati", giusta: false },
      { testo: "Crescenzago", giusta: true }
    ]
  },
  {
    titoloDomanda: "28. Linda",
    testo: "Qual è il primo regalo che mi hai fatto a Natale?",
    risposte: [
      { testo: "Felperta", giusta: true },
      { testo: "Completo intimo", giusta: false },
      { testo: "Orecchini", giusta: false },
      { testo: "Biglietto concerto", giusta: false }
    ]
  },
  {
    titoloDomanda: "29. Linda",
    testo: "Per andare dove ho preso l’aereo la prima volta?",
    risposte: [
      { testo: "Rotterdam", giusta: false },
      { testo: "Copenaghen", giusta: false },
      { testo: "Granada", giusta: true },
      { testo: "Vienna", giusta: false }
    ]
  },
  {
    titoloDomanda: "30. Linda",
    testo: "Come si chiamava la mia bambola preferita di quando ero piccola?",
    risposte: [
      { testo: "Cento", giusta: true },
      { testo: "Nina", giusta: false },
      { testo: "Zero", giusta: false },
      { testo: "Milly", giusta: false }
    ]
  },
  {
    titoloDomanda: "31. Teo",
    testo: "Quali sono le prime sigarette che ho fumato?",
    risposte: [
      { testo: "Chesterfield blu", giusta: true },
      { testo: "Marlboro Touch", giusta: false },
      { testo: "Lucky Strike blu", giusta: false },
      { testo: "Camel lampone", giusta: false }
    ]
  },
  {
    titoloDomanda: "32. Teo",
    testo: "Con chi ho bevuto la sambuca a braccetto incrociato alla festa del Grifone?",
    risposte: [
      { testo: "Mio papà e mia mamma", giusta: false },
      { testo: "Giuliano e Patrizio", giusta: false },
      { testo: "Barbara e Michela", giusta: true },
      { testo: "Giorgio e Cinzia", giusta: false }
    ]
  },
  {
    titoloDomanda: "33. Teo",
    testo: "In che colore ero all’asilo?",
    risposte: [
      { testo: "Arancione", giusta: false },
      { testo: "Giallo", giusta: true },
      { testo: "Rosso", giusta: false },
      { testo: "Verde", giusta: false }
    ]
  },
  {
    titoloDomanda: "34. Teo",
    testo: "Con quale delle pere ho avuto una breve relazione?",
    risposte: [
      { testo: "Asia Ferraroni", giusta: false },
      { testo: "Giorgia Magon", giusta: false },
      { testo: "Chiara Silvestrini", giusta: false },
      { testo: "Anna Cusa", giusta: true }
    ]
  },
  {
    titoloDomanda: "35. Teo",
    testo: "Quale alcolico avevi portato al mare da me nel 2020?",
    risposte: [
      { testo: "Vodka liquirizia", giusta: false },
      { testo: "Jack Daniel’s miele", giusta: true },
      { testo: "Sheridan", giusta: false },
      { testo: "Don Perignon", giusta: false }
    ]
  },
  {
    titoloDomanda: "36. Chiara",
    testo: "Cosa mi hai rubato a casa di Titus?",
    risposte: [
      { testo: "Accendino", giusta: false },
      { testo: "5 euro", giusta: false },
      { testo: "Pacchetto di sigarette", giusta: true },
      { testo: "Assorbente", giusta: false }
    ]
  },
  {
    titoloDomanda: "37. Chiara",
    testo: "Quanti animali domestici ho?",
    risposte: [
      { testo: "4", giusta: true },
      { testo: "3", giusta: false },
      { testo: "1", giusta: false },
      { testo: "2", giusta: false }
    ]
  },
  {
    titoloDomanda: "38. Chiara",
    testo: "Con quanto sono uscita alle superiori?",
    risposte: [
      { testo: "74", giusta: false },
      { testo: "69", giusta: true },
      { testo: "65", giusta: false },
      { testo: "79", giusta: false }
    ]
  },
  {
    titoloDomanda: "39. Chiara",
    testo: "Di dov’era il primo ragazzo che ho limonato?",
    risposte: [
      { testo: "Valera", giusta: false },
      { testo: "Roma", giusta: false },
      { testo: "Seregno", giusta: false },
      { testo: "Napoli", giusta: true }
    ]
  },
  {
    titoloDomanda: "40. Chiara",
    testo: "Dove eravamo quando ho detto “Scusaahhh” al cameriere?",
    risposte: [
      { testo: "Como", giusta: true },
      { testo: "Lecco", giusta: false },
      { testo: "Milano", giusta: false },
      { testo: "Golfetto", giusta: false }
    ]
  },
  {
    titoloDomanda: "41. Bre",
    testo: "Qual è la mia canzone degli ABBA preferita?",
    risposte: [
      { testo: "Dancing Queen", giusta: false },
      { testo: "Slipping through my fingers", giusta: false },
      { testo: "Chiquitita", giusta: false },
      { testo: "The winner takes It all", giusta: true }
    ]
  },
  {
    titoloDomanda: "42. Bre",
    testo: "A quale animale mi paragonavi?",
    risposte: [
      { testo: "Zanzara", giusta: true },
      { testo: "Mosca", giusta: false },
      { testo: "Paguro", giusta: false },
      { testo: "Scimmia", giusta: false }
    ]
  },
  {
    titoloDomanda: "43. Bre",
    testo: "Come si chiamava il mio capo spagnolo?",
    risposte: [
      { testo: "Javier", giusta: false },
      { testo: "Benjamin", giusta: false },
      { testo: "José ", giusta: true },
      { testo: "Pedro", giusta: false }
    ]
  },
  {
    titoloDomanda: "44. Bre",
    testo: "Quale materia ho odiato di più alle superiori?",
    risposte: [
      { testo: "Storia", giusta: true },
      { testo: "Italiano", giusta: false },
      { testo: "Economia", giusta: false },
      { testo: "Tedesco", giusta: false }
    ]
  },
  {
    titoloDomanda: "45. Bre",
    testo: "In cosa mi sono laureato?",
    risposte: [
      { testo: "Management della sanità", giusta: false },
      { testo: "Management pubblico", giusta: true },
      { testo: "Economia e management", giusta: false },
      { testo: "Amministrazioni e politiche pubbliche", giusta: false }
    ]
  },
  {
    titoloDomanda: "46. Meri",
    testo: "Chi è il mio membro preferito degli One Direction?",
    risposte: [
      { testo: "Niall", giusta: true },
      { testo: "Liam", giusta: false },
      { testo: "Louis", giusta: false },
      { testo: "Zayn", giusta: false }
    ]
  },
  {
    titoloDomanda: "47. Meri",
    testo: "Qual è la mia percentuale di invalidità?",
    risposte: [
      { testo: "72%", giusta: false },
      { testo: "56%", giusta: false },
      { testo: "48%", giusta: false },
      { testo: "67%", giusta: true }
    ]
  },
  {
    titoloDomanda: "48. Meri",
    testo: "In che mese e anno sono stata truffata dall'”Inps”?",
    risposte: [
      { testo: "Gennaio 2024", giusta: false },
      { testo: "Agosto 2024", giusta: true },
      { testo: "Giugno 2025", giusta: false },
      { testo: "Marzo 2025", giusta: false }
    ]
  },
  {
    titoloDomanda: "49. Meri",
    testo: "Come si chiamava la mia collega in Senec?",
    risposte: [
      { testo: "Isabella", giusta: false },
      { testo: "Giuliana", giusta: false },
      { testo: "Gabriella ", giusta: true },
      { testo: "Antonella", giusta: false }
    ]
  },
  {
    titoloDomanda: "50. Meri",
    testo: "Quale strano animale da compagnia ho avuto da piccola?",
    risposte: [
      { testo: "Lumaca", giusta: true },
      { testo: "Furetto", giusta: false },
      { testo: "Axolotl", giusta: false },
      { testo: "Lombrico", giusta: false }
    ]
  },
  {
    titoloDomanda: "51. Cri",
    testo: "Qual era il gioco preferito che facevamo da fatti?",
    risposte: [
      { testo: "Calcio invisibile", giusta: true },
      { testo: "Blackjack", giusta: false },
      { testo: "Ninja", giusta: false },
      { testo: "Poker", giusta: false }
    ]
  },
  {
    titoloDomanda: "52. Cri",
    testo: "Qual è la birra nazista?",
    risposte: [
      { testo: "Poretti", giusta: false },
      { testo: "Peroni", giusta: false },
      { testo: "Menabrea", giusta: true },
      { testo: "Nastro Azzurro", giusta: false }
    ]
  },
  {
    titoloDomanda: "53. Cri",
    testo: "Che cartello c'è in fondo alla mia via?",
    risposte: [
      { testo: "Divieto di sosta", giusta: false },
      { testo: "Divieto di transito", giusta: false },
      { testo: "Divieto di sosta e fermata", giusta: false },
      { testo: "Divieto di caccia", giusta: true }
    ]
  },
  {
    titoloDomanda: "54. Cri",
    testo: "Come chiamavi Titus nelle nostre partite la domenica pomeriggio in oratorio?",
    risposte: [
      { testo: "Slovacco pazzo", giusta: false },
      { testo: "Torre", giusta: true },
      { testo: "Boa", giusta: false },
      { testo: "Bomber", giusta: false }
    ]
  },
  {
    titoloDomanda: "55. Cri",
    testo: "Quale fu la canzone più ascoltata nel nostro viaggio di andata per La Spezia nel 2017?",
    risposte: [
      { testo: "Puke", giusta: true },
      { testo: "One More Light", giusta: false },
      { testo: "Stronger Than I Was", giusta: false },
      { testo: "Crawling", giusta: false }
    ]
  },
  {
    titoloDomanda: "56. Avventure di gruppo",
    testo: "Quale incantesimo hai lanciato a Zupi?",
    risposte: [
      { testo: "Crucio", giusta: false },
      { testo: "Avada Kedavra", giusta: false },
      { testo: "Ridiculous", giusta: true },
      { testo: "Accio", giusta: false }
    ]
  },
  {
    titoloDomanda: "57. Avventure di gruppo",
    testo: "Quale è il nome della via di Pani?",
    risposte: [
      { testo: "Montanara", giusta: true },
      { testo: "Adige", giusta: false },
      { testo: "Padova", giusta: false },
      { testo: "Giunti", giusta: false }
    ]
  },
  {
    titoloDomanda: "58. Avventure di gruppo",
    testo: "Come si chiama il custode della casa di Aviatico?",
    risposte: [
      { testo: "Bartolo", giusta: false },
      { testo: "Ambrogio", giusta: false },
      { testo: "Armando", giusta: false },
      { testo: "Ariele", giusta: true }
    ]
  },
  {
    titoloDomanda: "59. Avventure di gruppo",
    testo: "Cosa non è arrivato a Londra?",
    risposte: [
      { testo: "Burrito di Bre", giusta: false },
      { testo: "Poke di Cri", giusta: true },
      { testo: "Sushi di Meri", giusta: false },
      { testo: "Pita di Teo", giusta: false }
    ]
  },
  {
    titoloDomanda: "60. Avventure di gruppo",
    testo: "Qual è la parola ripetuta più frequentemente?",
    risposte: [
      { testo: "Sborra", giusta: true },
      { testo: "Cazzo", giusta: false },
      { testo: "Figa", giusta: false },
      { testo: "Bestemmia", giusta: false }
    ]
  },
];

let i = 0;          
let punteggio = 0;  

const contenuto = document.getElementById("contenuto");

function mostraDomanda() {
  contenuto.innerHTML = ""; 
    document.body.className = `domanda${i + 1}`;
    const titoloDomanda = document.createElement("h1");
    titoloDomanda.className = "titoloDomanda";
  titoloDomanda.innerText = domande[i].titoloDomanda;
  contenuto.appendChild(titoloDomanda);

  const pDomanda = document.createElement("h2");
  pDomanda.className = "pDomanda";
  pDomanda.innerText = domande[i].testo;
  contenuto.appendChild(pDomanda);

  domande[i].risposte.forEach((r) => {
    const div = document.createElement("div");
    div.className = "risposta";
    div.innerText = r.testo;

    div.onclick = () => {
      div.style.backgroundColor = r.giusta ? "green" : "red";
      div.style.color = "white";
      
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

      const tutte = document.querySelectorAll(".risposta");
      tutte.forEach(b => b.style.pointerEvents = "none");
    };

    contenuto.appendChild(div);
  });

  const feedback = document.createElement("div");
  feedback.id = "feedback";
  contenuto.appendChild(feedback);

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


function mostraRisultato() {
  contenuto.innerHTML = ""; 
  const boxPunteggio = document.createElement("div");
  boxPunteggio.id = "boxPunteggio";

  if (punteggio <= 10) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>VERGOGNATI: sei stato un disastro e forse smetteremo di volerti bene. Scegli tra una di queste due penitenze:</h2><h3>-Nel villaggio ogni volta che qualcuno ti guarda devi cantare la canzone "🎵 Sarà perché ti amo" dei Ricchi e Poveri</h3><h3>-A casa: devi cucinare una cena per tutti con tanto di camerierata inclusa</h3>`;
  } else if (punteggio > 10 && punteggio <= 20) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>NCSP: non ci siamo proprio. E tu dovresti essere nostro amico? Scegli tra una di queste due penitente:</h2><h3>-Karaoke obbligatorio: devi cercare il testo di una canzone e cantarla a voce alta</h3><h3>-Animatore improvvisato: devi coinvolgere almeno 5 sconosciuti in un trenino</h3>`;
  } else if (punteggio > 20 && punteggio <= 30) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>NEMMENO A META’: diciamo che poteva andare peggio ma sicuramente potevi impegnarti di più! Scegli tra una di queste due penitenze:</h2><h3>-Devi chiedere a uno sconosciuto: “Scusi, secondo lei sembro intelligente?”</h3><h3>-Fai un post con una tua foto imbarazzante sui social e tienilo per 24h</h3>`;
  } else if (punteggio > 30 && punteggio <= 40) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>C’ERI QUASI: alcune non erano facili. Ma non è una buona scusa.. Lievemente sufficiente! Scegli tra una di queste due penitenze:</h2><h3>-Paghi i caffè a tutti per una settimana intera</h3><h3>-Devi occuparti di organizzare i prossimi quattro sabato sera (in quattro posti diversi)</h3>`;
  } else if (punteggio > 40 && punteggio <= 50) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>TE LA SEI CAVATA: per tua fortuna non hai fatto una figuraccia. Ma ci aspettavamo di più da te. Scegli tra una di queste due penitenze:</h2><h3>-Fai 10 flessioni</h3><h3>-Puoi obbligarci a cantare la canzoncina “Tanti auguri a te” più forte che possiamo</h3>`;
  } else if (punteggio > 50 && punteggio <= 60) {
    boxPunteggio.innerHTML = `<h2>Il tuo punteggio: ${punteggio} / ${domande.length}</h2>
    <h2>SEI STATO BRAVO: ma non te la menare ora. Scegli tra:</h2><h3>-Non hai penitenze… MA devi fare un discorso motivazionale come se avessi vinto un Nobel</h3><h3>-Non hai penitenze... MA puoi abbracciarci e dirci che siamo le persone migliori del mondo</h3>`;
  }
  contenuto.appendChild(boxPunteggio);
}

mostraDomanda();
