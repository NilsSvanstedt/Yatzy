window.onload = kastaTärning;

var tärningar = new Array("img/tärningEtt.png","img/tärningTvå.png","img/tärningTre.png","img/tärningFyra.png", "img/tärningFem.png","img/tärningSex.png");

var tärningarId = new Array("tärningEtt","tärningTvå","tärningTre","tärningFyra","tärningFem","tärningSex");

function kastaTärning() {
  for (let i = 0; i < 6; i++) {
  var slumpNummer = Math.floor(Math.random()*6);
  document.getElementById(tärningarId[i]).src = tärningar[slumpNummer];
  }
}
