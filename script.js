let tärningar = []; // Variabler
let kastKvar = 3;
let ettor = document.getElementById("ettor");
let tvåor = document.getElementById("tvåor");
let treor = document.getElementById("treor");
let fyror = document.getElementById("fyror");
let femmor = document.getElementById("femmor");
let sexor = document.getElementById("sexor");
let summaEtt = document.getElementById("summaEtt");
let bonus = document.getElementById("bonus");
let ettPar = document.getElementById("ettPar");
let tvåPar = document.getElementById("tvåPar");
let treTal = document.getElementById("treTal");
let fyrTal = document.getElementById("fyrTal");
let litenStege = document.getElementById("litenStege");
let storStege = document.getElementById("storStege");
let kåk = document.getElementById("kåk");
let chans = document.getElementById("chans");
let yatzy = document.getElementById("yatzy");
let summaTvå = document.getElementById("summaTvå");
let spelaIgen = document.getElementById("spelaIgen");


const t = new Set(tärningar); // Set objekt är en samling av unika värden
const reducer = (accumulator, currentValue) => accumulator + currentValue; // Summan av array
window.onload = kastaTärningar(tärningar);
uppdateraTärningar(tärningar);

function kastaTärningar(tärningar) { // Kasta tärningar 
  if (kastKvar > 0) { // Kasta endast om användaren har kast kvar
    for (i = 0; i < 5; i++) { // Iterera över alla tärningar
      if (document.getElementById("tärning" + i).style.filter == "") { // Kasta endast om tärningen inte är låst
        tärningar[i] = Math.floor(Math.random()*6 + 1);  // Ge tärningen ett slumpat värde mellan 1 och 6
      }
    }
    kastKvar--; // Subtrahera ett kast
    uppdateraTärningar(tärningar); 
 }
}

function uppdateraTärningar(tärningar) {
  for (i = 0; i < 5; i++) {
    document.getElementById("tärning" + i).src = ("img/" + tärningar[i] + ".png");
  }
}

function ärEttPar(tärningar) { // Kollar om det finns ett par 
  return tärningar.length === 5 && !t.size === 5; // Retunerna sant om det finns 5 tärningar och alla värden inte är unika, detta verifieras genom ett set. T.ex (2,2,1,6,5)
}

function ärTvåPar(tärningar) { // Kolla om det finns två par
  tärningar.sort();
  return ((tärningar[0] === tärningar[1] && tärningar[2] === tärningar[3] && tärningar[0] !== tärningar[2]) || (tärningar[1] === tärningar[2] && tärningar[3] === tärningar[4] && tärningar[1] !== tärningar[3]) ||(tärningar[0] === tärningar[1] && tärningar[3] === tärningar[4] && tärningar[0] !== tärningar[3])); // Returnera sant om det finns två par någonstans i arrayen
}

function ärTreTal(tärningar) { // Kolla om det finns tre av samma värde
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[1] === tärningar[2] || tärningar[2] === tärningar[3] && tärningar[3] === tärningar[4]); // Returnera sant om tre array items är ekvivalenta och är inom 2 indexpositioner när arrayen är sorterad
}

function ärFyrTal(tärningar) { // Kolla om det finns fyra av samma värde 
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[1] === tärningar[2] && tärningar[2] == tärningar[3] || tärningar[1] === tärningar[2] && tärningar[2] === tärningar[3] && tärningar[3] === tärningar[4]); // Returnera sant om 4 array items är ekvivalenta
}

function ärLitenStege(tärningar) { // Kolla efter en liten stege
  return tärningar.length === 5 && t.size === 5 && !(t.has(6)); // Returnera sant om det finns 5 tärningar och 5 av dem är unika samt att 6 inte är en av dem. (1,2,3,4,5)
}

function ärStorStege(tärningar) { // Kolla efter en stor stege
  return tärningar.length === 5 && t.size === 5 && !t.has(1); // Returnera sant om det finns 5 tärningar och 5 av dem är unika samt att 1 inte är en av dem. (2,3,4,5,6)
}

function ärKåk(tärningar) { // Kolla efter en kåk
  return !(ärFyrTal(tärningar)) && t.size === 2; // Kollar att det inte finns fyra av samma värde och det endast finns 2 unika värden, detta betyder att det måste vara en kåk eftersom det finns 3 av ett värde och 2 av ett annat värde.
}


function ärYatzy(tärningar) { // Kolla efter en yatzy
  return tärningar.length === 5 && t.size === 1; // Returnera sant om det finns 5 tärningar och det bara finns ett unikt värde. T.ex (1,1,1,1,1)
}

function getOccurrence(array, value) { // Kollar hur många gånger ett värde upprepas i en array
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

function klickHanterare() { // Hanterar klickevent på yatzyprotokollet
  if (this.innerHTML === "") { // Om cellen i protokollet inte är upptagen
    if (this.getAttribute("class").includes("ettor")) {     
      this.innerHTML = getOccurrence(tärningar, 1); //Räknar ut summan genom antal av värdet multiplicerat med värdet
    } else if (this.getAttribute("class").includes("tvåor")) {     
      this.innerHTML = getOccurrence(tärningar, 2) * 2;
    } else if (this.getAttribute("class").includes("treor")) {
      this.innerHTML = getOccurrence(tärningar, 3) * 3;
    } else if (this.getAttribute("class").includes("fyror")) {
      this.innerHTML = getOccurrence(tärningar, 4) * 4;
    } else if (this.getAttribute("class").includes("femmor")) {
      this.innerHTML = getOccurrence(tärningar, 5) * 5;
    } else if (this.getAttribute("class").includes("sexor")) {
      this.innerHTML = getOccurrence(tärningar, 6) * 6;
    } else if (this.getAttribute("class").includes("ettPar")) {
      if (ärEttPar(tärningar)) { // Om det finns ett par
        tärningar.sort();
        if (tärningar[4] === tärningar[3]) {
          this.innerHTML = tärningar[4] * 2;
        } else if (tärningar[3] === tärningar[2]) {
          this.innerHTML = tärningar[3] * 2;
        } else {
          this.innerHTML = tärningar[2] * 2;
        }
      } else {
        this.innerHTML = 0;
      }
    } else if (this.getAttribute("class").includes("tvåPar")) {
      if (ärTvåPar(tärningar)) { // Om det finns två par
        tärningar.sort();
        if (tärningar[0] === tärningar[1] && tärningar[2] === tärningar[3]) { // Kollar var paret är och adderar poängen
          this.innerHTML = tärningar[0] + tärningar[1] + tärningar[2] + tärningar[3];
        } else if (tärningar[0] === tärningar[1] && tärningar[3] === tärningar[4]) {
          this.innerHTML = tärningar[0] + tärningar[1] + tärningar[3] + tärningar[4];
        } else {
          this.innerHTML = tärningar[1] + tärningar[2] + tärningar[3] + tärningar[4];
        }
      } else {
        this.innerHTML = 0;
      }
    } else if (this.getAttribute("class").includes("treTal")) {
      if (ärTreTal(tärningar)) { // Om det finns tretal
        tärningar.sort();
        this.innerHTML = tärningar[2] * 3; // Summerar poängen genom att multiplicera tretalet, det måste vara på index 2 när arrayen är sorterad. [x, x, x, y, z] eller [y, z, x, x, x]
      }
      else {
        this.innerHTML = 0;
      }
    } else if (this.getAttribute("class").includes("fyrTal")) {
      if (ärFyrTal(tärningar)) { // Om det finns fyrtal
        tärningar.sort();
        this.innerHTML = tärningar[2] * 4; // Summerar poängen genom att multiplicera fyrtalet, det måste vara på index 2 när arrayen är sorterad. [x, x, x, x, y] eller [y, x, x, x, x]
      } else {
        this.innerHTML = 0;
      }
    } else if (this.getAttribute("class").includes("litenStege")) {
        if (ärLitenStege(tärningar)) { // Om det finns en liten stege
          this.innerHTML = 15; // En liten stege ger 15 poäng
        }
        else {
          this.innerHTML = 0;
        }  
    } else if (this.getAttribute("class").includes("storStege")) {
        if (ärStorStege(tärningar)) { // Om det finns en stor stege
          this.innerHTML = 20; // En stor stege ger 20 poäng
        }
        else {
          this.innerHTML = 0;
        }   
    } else if (this.getAttribute("class").includes("kåk")) {
        if (ärKåk(tärningar)) {
          this.innerHTML = tärningar.reduce(reducer);
        }
        else {
          this.innerHTML = 0;
        }
    } else if (this.getAttribute("class").includes("chans")) {
        this.innerHTML = tärningar.reduce(reducer); // Adderar alla poäng då det är chans
    } else if (this.getAttribute("class").includes("yatzy")) {
        if (ärYatzy(tärningar)) { // Om det finns en yatzy
          this.innerHTML = 50; // Yatzy ger 50 poäng
        }
        else {
          this.innerHTML = 0;
        }
    }
    else { // Om användaren trycker på en ruta som den inte borde trycka på
      return;
    }
    if (ettor.innerHTML !== "" && tvåor.innerHTML !== "" && treor.innerHTML !== "" && fyror.innerHTML !== "" && femmor.innerHTML !== "" && sexor.innerHTML !== "") {
      summaEtt.innerHTML = parseInt(ettor.innerHTML, 10) + parseInt(tvåor.innerHTML, 10) + parseInt(treor.innerHTML, 10) + parseInt(fyror.innerHTML, 10) + parseInt(femmor.innerHTML,10) + parseInt(sexor.innerHTML, 10); // Om alla celler före första summan är ifyllda, summera alla celler och placera i cellen för första summan
      if (summaEtt >= 63) { // Om summan är minst 63, lägg till en bonus
        bonus.innerHTML = 50;
      } else {
        bonus.innerHTML = 0;
      }
    }
    if (summaEtt.innerHTML !== "" && ettPar.innerHTML !== "" && tvåPar !== "" && treTal.innerHTML !== "" && fyrTal.innerHTML !== "" && litenStege.innerHTML !== "" && storStege.innerHTML !== "" && kåk.innerHTML !== "" && chans.innerHTML !== "" && yatzy.innerHTML !== "") {
      summaTvå.innerHTML = parseInt(summaEtt.innerHTML, 10) + parseInt(bonus.innerHTML, 10) + parseInt(ettPar.innerHTML, 10) + parseInt(tvåPar.innerHTML, 10) + parseInt(treTal.innerHTML, 10) + parseInt(fyrTal.innerHTML, 10) + parseInt(litenStege.innerHTML, 10) + parseInt(storStege.innerHTML, 10) + parseInt(kåk.innerHTML, 10) + parseInt(chans.innerHTML, 10) + parseInt(yatzy.innerHTML, 10); // Om alla celler är ifyllda, räkna ut summan och placera i summa cellen
      spelaIgen.style.visibility = "visible";
    }
    låsUppTärningar(); // Ta bort potentiellt låsta tärningar
    kastaTärningar(tärningar); // Kasta tärningarna
    kastKvar = 2; // Sätt kast till 2 
  }
}
document.querySelectorAll('#yatzyProtokoll td') // Kolla efter klick i alla td under elementet med id "yatziProtokoll" 
.forEach(e => e.addEventListener("click", klickHanterare));

function låsTärning() { // Lås och lås upp tärningar
  let id = this.getAttribute("id");
  if (document.getElementById(id).style.filter == "") {
    document.getElementById(id).style.filter = "brightness(50%)"; // Justera ljusstyrkan för att visa om tärningen är låst eller inte
  } else {
    document.getElementById(id).style.filter = "";
  }
}

function låsUppTärningar() { // Lås upp alla tärningar
  for (i = 0; i < 5; i++) {
    document.getElementById("tärning" + i).style.filter = "";
  }
  uppdateraTärningar(tärningar);
}
document.querySelectorAll('#tärningar img') // Event listener för tärningarna
.forEach(e => e.addEventListener("click", låsTärning));

