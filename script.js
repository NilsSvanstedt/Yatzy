// window.onload = kastaTärning;
let tärningar = [];
const t = new Set(tärningar); // Set objekt är en samling av unika värden


function ärEttPar(tärningar) {
  return tärningar.length === 5 && !(t.size === 5); // Retunerna sant om det finns 5 tärningar och alla värden inte är unika. T.ex (2,2,1,6,5)
}

function ärTvåPar(tärningar) {
  tärningar.sort();
  return (tärningar[0] === tärningar[1] && tärningar[2] === tärningar[3] || tärningar[1] === tärningar[2] && tärningar[3] === tärningar[4] ||tärningar[0] === tärningar[1] && tärningar[3] === tärningar[4]);
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
  return tärningar.length === 5 && t.size === 5 && !t.has(6); // Returnera sant om det finns 5 tärningar och 5 av dem är unika samt att 6 inte är en av dem. (1,2,3,4,5)
}

function ärStorStege(tärningar) {
  return tärningar.length === 5 && t.size === 5 && !t.has(1); // Returnera sant om det finns 5 tärningar och 5 av dem är unika samt att 1 inte är en av dem. (2,3,4,5,6)
}

function ärKåk(tärningar) {
  return !(ärFyrtal) && t.size === 2;
}


function ärYatzy(tärningar) {
  return tärningar.length === 5 && t.size === 1; // Returnera sant om det finns 5 tärningar och det bara finns ett unikt värde. T.ex (1,1,1,1,1)
}

function klickHanterare() {
    if (this.getAttribute("class").includes("ettor")) {
      if (this.innerHTML === "") {
        console.log("Tom");
      } else {
        console.log("Ej tom");
      }
    } else if (this.getAttribute("class").includes("tvåor")) {

    } else if (this.getAttribute("class").includes("treor")) {

    } else if (this.getAttribute("class").includes("fyror")) {
      
    } else if (this.getAttribute("class").includes("femmor")) {
      
    } else if (this.getAttribute("class").includes("sexor")) {
      
    } else if (this.getAttribute("class").includes("summaEtt")) {
      
    } else if (this.getAttribute("class").includes("ettPar")) {
      
    } else if (this.getAttribute("class").includes("tvåPar")) {
      
    } else if (this.getAttribute("class").includes("treTal")) {
      
    } else if (this.getAttribute("class").includes("fyrTal")) {
      
    } else if (this.getAttribute("class").includes("litenStege")) {
      
    } else if (this.getAttribute("class").includes("storStege")) {
      
    } else if (this.getAttribute("class").includes("kåk")) {
      
    } else if (this.getAttribute("class").includes("chans")) {
      
    } else if (this.getAttribute("class").includes("yatzy")) {
      
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
document.querySelectorAll('#tärningar img')
.forEach(e => e.addEventListener("click", låsTärning));

