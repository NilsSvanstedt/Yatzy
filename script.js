let tärningar = [];
uppdateraTärningar(tärningar);
let kastKvar = 3;
let ettor = document.getElementById("ettor");
let tvåor = document.getElementById("tvåor");
let treor = document.getElementById("treor");
let fyror = document.getElementById("fyror");
let femmor = document.getElementById("femmor");
let sexor = document.getElementById("sexor");
let summaEtt = document.getElementById("summaEtt");
let bonus = document.getElementById("bonus");

const t = new Set(tärningar); // Set objekt är en samling av unika värden
const reducer = (accumulator, currentValue) => accumulator + currentValue;
window.onload = kastaTärningar(tärningar);

function kastaTärningar(tärningar) {
  if (kastKvar > 0) {
    for (i = 0; i < 5; i++) {
      if (document.getElementById("tärning" + i).style.filter == "") {
        tärningar[i] = Math.floor(Math.random()*6 + 1); 
      }
    }
    kastKvar--;
    uppdateraTärningar(tärningar);
    console.log(document.getElementById("ettor").innerHTML);
 }
}

function uppdateraTärningar(tärningar) {
  for (i = 0; i < 5; i++) {
    document.getElementById("tärning" + i).src = ("img/" + tärningar[i] + ".png");
  }
}

function ärEttPar(tärningar) {
  return tärningar.length === 5 && !(t.size === 5); // Retunerna sant om det finns 5 tärningar och alla värden inte är unika. T.ex (2,2,1,6,5)
}

function ärTvåPar(tärningar) {
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[2] === tärningar[3] && t.size === 3 || tärningar[1] === tärningar[2] && tärningar[3] === tärningar[4] && t.size === 3 ||tärningar[0] === tärningar[1] && tärningar[3] === tärningar[4 && t.size === 3]);
}

function ärTreTal(tärningar) {
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[1] === tärningar[2] || tärningar[2] === tärningar[3] && tärningar[3] === tärningar[4]);
}

function ärFyrTal(tärningar) {
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[1] === tärningar[2] && tärningar[2] == tärningar[3] || tärningar[1] === tärningar[2] && tärningar[2] === tärningar[3] && tärningar[3] === tärningar[4]);
}

function ärLitenStege(tärningar) {
  return tärningar.length === 5 && t.size === 5 && !(t.has(6)); // Returnera sant om det finns 5 tärn ingar och 5 av dem är unika samt att 6 inte är en av dem. (1,2,3,4,5)
}

function ärStorStege(tärningar) {
  return tärningar.length === 5 && t.size === 5 && !t.has(1); // Returnera sant om det finns 5 tärningar och 5 av dem är unika samt att 1 inte är en av dem. (2,3,4,5,6)
}

function ärKåk(tärningar) {
  return !(ärFyrTal(tärningar)) && t.size === 2;
}


function ärYatzy(tärningar) {
  return tärningar.length === 5 && t.size === 1; // Returnera sant om det finns 5 tärningar och det bara finns ett unikt värde. T.ex (1,1,1,1,1)
}

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

function klickHanterare() {
  if (this.innerHTML === "") {
    if (this.getAttribute("class").includes("ettor")) {
      this.innerHTML = getOccurrence(tärningar, 1);
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
    } else if (this.getAttribute("class").includes("summaEtt")) {
      
    } else if (this.getAttribute("class").includes("ettPar")) {

    } else if (this.getAttribute("class").includes("tvåPar")) {
      
    } else if (this.getAttribute("class").includes("treTal")) {
      if (ärTreTal(tärningar)) {
        this.innerHTML = tärningar[3] * 3;
      }
    } else if (this.getAttribute("class").includes("fyrTal")) {
      if (ärFyrTal(tärningar)) {
        this.innerHTML = tärningar[3] * 4;
      }
    } else if (this.getAttribute("class").includes("litenStege")) {
        if (ärLitenStege(tärningar)) {
          this.innerHTML = 15;
        }
        else {
          this.innerHTML = 0;
        }  
    } else if (this.getAttribute("class").includes("storStege")) {
        if (ärLitenStege(tärningar)) {
          this.innerHTML = 20;
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
        this.innerHTML = tärningar.reduce(reducer);
    } else if (this.getAttribute("class").includes("yatzy")) {
        if (ärYatzy(tärningar)) {
          this.innerHTML = 50;
        }
        else {
          this.innerHTML = 0;
        }
    }
    if (ettor.innerHTML !== "" && tvåor.innerHTML !== "" && treor.innerHTML !== "" && fyror.innerHTML !== "" && femmor.innerHTML !== "" && sexor.innerHTML !== "") {
      summaEtt.innerHTML = parseInt(ettor.innerHTML, 10) + parseInt(tvåor.innerHTML,10) + parseInt(treor.innerHTML, 10) + parseInt(fyror.innerHTML, 10) + parseInt(femmor.innerHTML,10) + parseInt(sexor.innerHTML, 10); 
      if (summaEtt >= 63) {
        bonus.innerHTML = 50;
      } else {
        bonus.innerHTML = 0;
      }
    }

    kastaTärningar(tärningar);
    kastKvar = 2;
  }
}
document.querySelectorAll('#yatzyProtokoll td')
.forEach(e => e.addEventListener("click", klickHanterare));

function låsTärning() {
  let id = this.getAttribute("id");
  if (document.getElementById(id).style.filter == "") {
    document.getElementById(id).style.filter = "brightness(50%)";
  } else {
    document.getElementById(id).style.filter = "";
  }
}

function låsUppTärningar(tärningar) {

}
document.querySelectorAll('#tärningar img')
.forEach(e => e.addEventListener("click", låsTärning));

