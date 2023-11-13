/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random() * 20);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Gregorio",
  surname: "Vecchio",
  age: 26
}
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Python", "Java", "Javascript", "Matlab"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("Esercizio1: \n" + dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let whoIsBigger = (n, m) => {
  if (n < m) {
    return m;
  } else if (n > m) {
    return n
  } else {
    console.log("I due valori sono uguali")
    return m
  }
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let splitMe = (stringa) => {
  return stringa.split(" ");
}
let stringa = "Frase casuale"
console.log("Esercizio 3:\n " + stringa + "\n" + splitMe(stringa))


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let deleteOne = (stringa, booleano) => {
  if (booleano == true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, stringa.length - 1)
  }
}
let esercizio4Stringa = "Frase a caso";
let esercizio4Booleano = false;
console.log(deleteOne(esercizio4Stringa, esercizio4Booleano))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let onlyLetters = (stringa) => {
  let senzaNumeri = "";
  let precedenteEraNumero = false;
  for (let i = 0; i < stringa.length; i++) {
    if (isNaN(Number(stringa.charAt(i))) || stringa.charAt(i) == " ") {
      senzaNumeri += stringa.charAt(i);
    } else if (!precedenteEraNumero) {
      senzaNumeri = senzaNumeri.slice(0, i - 1); //Voglio evitare che una volta eliminato un numero io abbia due spazi consecutivi
      precedenteEraNumero = true;
    }
  }
  return senzaNumeri;
}
let ese5Stringa = "I ha ve.? 4 dogs!";
console.log("Esercizio 5:\n" + ese5Stringa + "\n" + onlyLetters(ese5Stringa));





/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let isThisAnEmail = (stringa) => {
  let indiceChiocciola = stringa.indexOf("@");
  let indicePunto = stringa.indexOf(".", indiceChiocciola + 1);
  let caratteriNonConsentiti = [' ', '!', '#', '$', '%', '&', '\'', '*', '+', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~', ',', ';', ':', '<', '>', '\'', '"',];
  if (indiceChiocciola > 0 && indicePunto > indiceChiocciola + 2 && indicePunto < stringa.length - 1) {
    for (let ele of caratteriNonConsentiti) {
      if (stringa.indexOf(ele) != -1) {
        return false;
      }
    }
    return true;
  }
  return false;

}
let ese6Stringa1 = "gregoriovecchio@gmail.com";
let ese6Stringa2 = "greg(£$goriovecc@hio.email";
console.log(`Esercizio6: \n Stringa1: ${ese6Stringa1} ${isThisAnEmail(ese6Stringa1)} \n Stringa2: ${ese6Stringa2} ${isThisAnEmail(ese6Stringa2)}`)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let whatDayIsIt = () => {
  let giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  let now = new Date();
  return giorni[now.getDay()]
}

console.log("Esercizio7: Oggi è: " + whatDayIsIt())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(n) {
  let sum = 0;
  let numeroRollato;
  let values = [];
  for (let i = 0; i < n; i++) {
    numeroRollato = dice();
    sum += numeroRollato;
    values.push(numeroRollato)
  }
  return {
    sum: sum,
    values: values
  }
}
let ese8 = 10;
console.log(`Esercizio8 con n=${ese8}:`)
console.log(rollTheDices(ese8));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let howManyDays = (data) => {
  let oggi = new Date();
  let millisecondiTrascorsi = oggi.getTime() - data.getTime();
  return Math.round(millisecondiTrascorsi / (1000 * 60 * 60 * 24));
}
let data = new Date("2023-11-9")
console.log(`Esercizio 9 con data= 2023-11-9  ${howManyDays(data)}`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let isTodayMyBirthday = () => {
  let mese = 6;
  let giorno = 28;
  let oggi = new Date();
  console.log(oggi.getDate());
  return ((mese == oggi.getMonth() + 1) && (giorno == oggi.getDate()))
}

console.log(`Esercizio10: ${isTodayMyBirthday()}`);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa];
  return oggetto
}
let ese11Ogg = {
  nome: "Gregorio",
  cognome: "Vecchio",
  anni: "Troppi"
}
let ese11Str = "nome"
console.log(`Esercizio 11:`);
console.log(ese11Ogg);
console.log(deleteProp(ese11Ogg, ese11Str));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let film = movies[0];
  movies.forEach(ele => {
    if (ele.Year > film.Year) {
      film = ele;
    }
  });
  return film;
}
console.log(`Esercizio12: Il film più recente è: ${newestMovie(movies).Title}`);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

let countMovies = () => { return movies.length }

console.log(`Esercizio13: L'array contiene ${countMovies()} film`);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let onlyTheYears = () => movies.map(ele => ele.Year)

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
let onlyInLastMillennium = () => movies.filter(ele => Number(ele.Year) >= 2000);

console.log(onlyInLastMillennium());

//Non ho capito bene la traccia. Faccio un'altra
let onlyInLastMillennium2 = () => {
  return movies.filter(ele => Number(ele.Year) < 2000)
}
console.log(onlyInLastMillennium2());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
let sumAllTheYears = () => movies.reduce((sum, ele) => sum + Number(ele.Year), 0);

console.log(`Esercizio 16: La somma di tutti gli anni è ${sumAllTheYears()}`);
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
let searchByTitle = (stringa) => movies.filter(ele => ele.Title.includes(stringa));

let titolo = "Lord";
console.log(`Esercizio17 con "${titolo}" come parola da cercare `);
console.log(searchByTitle(titolo));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
let searchAndDivide = (stringa) => {
  return {
    match: movies.filter(ele => ele.Title.includes(stringa)),
    unmatch: movies.filter(ele => !ele.Title.includes(stringa))
  }
}
console.log(searchAndDivide(titolo));
//Scrivo una funzione più lunga ma che cicla una sola volta:
let searchAndDivide2 = (stringa) => {
  let oggetto = {
    match: [],
    unmatch: []
  }
  movies.forEach(ele => {
    if (ele.Title.includes(stringa)) {
      oggetto.match.push(ele);
    } else {
      oggetto.unmatch.push(ele)
    }
  });
  return oggetto;
}
console.log(searchAndDivide2(titolo));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
let removeIndex = (n) => {
  movies.splice(n, 1);
  return movies
}

console.log(removeIndex(3));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let selezionoIdContainer = () => document.getElementById("container");


//preferisco il querySelector:

let selezionoIdContainer2 = () => document.querySelector("#container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let selezionoTuttiItd = () => document.getElementsByTagName("td");

let selezionoTuttiITd2 = () => document.querySelectorAll("td");



/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
let testoInTd = () => {
  let tuttiITd = document.querySelectorAll("td");
  tuttiITd.forEach(ele => {
    console.log(ele.innerText);
  });
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
let linkSfondoRosso = () => {
  let tuttiLink = document.querySelectorAll("a");
  tuttiLink.forEach(ele => {
    ele.style.backgroundColor = "red";
  });
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
let aggiungoElemento = () => {
  let nuovoElemento = document.createElement("li");
  document.querySelector("#myList").appendChild(nuovoElemento);  //Secondo la traccia questa funzione non dovrebbe tornare nulla
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
let svuotaLista = () => {
  document.querySelector("#myList").innerHTML = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
let aggiungoTest = () => {
  let tr = document.querySelectorAll("tr");
  tr.forEach(ele => {
    ele.classList.add("test");
  });
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let halfTree = (n) => {
  let stringa = "";
  for (let i = 0; i < n; i++) {
    stringa += "*";
    console.log(stringa + "\n");
  }
}
halfTree(10)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
let tree = (n) => {
  let stringa = "";
  for(let i =1; i<=2*n ;i++){
    stringa +="*";
    if(i%2!=0){
      
    for(let j=0;j<n-(i/2);j++){
      stringa=" "+stringa;
    }
    console.log(stringa+ "\n");
    stringa=stringa.trim();   
    }
  }
}
tree(15)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n){
  if(n%2==0||n==0||n==1){
    return false
  }
  for(let i=3;i<n;i=i+2){
    if(n%i==0){
      console.log(`Il numero ${n} è divisibile per ${i}`)
      return false
    }
  }
  return true
}
console.log(isItPrime(87))
