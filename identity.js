p5.disableFriendlyErrors = true; // disables FES

var canvas;
//var mic;
var amplitude;
var fft;
var delay;
let angle = 0;


var afrika, akademiker, akademikerkind, alkoholiker, alleinerziehend, allergiker, alt, alternativ, angestellte, antark, antifa, arbeiterkind, arbeitskleidung, arbeitslos, asien, atheist, aufmerksam, augenblau, augenbraun, augengruen, augenhaselnussbraun, augenschwarz, ausgemuster, austra, autofahrer, bahai, bauernkind, bayerisch, beamtenkind, berlinerisch, besorgt, bmw, buddhist, buecherwurm, buero, bundeswehr, bus, christ, chronischkrank, classic, club, doerflich, drogenabhaengig, einzelkind, enthusiastisch, eso, euro, experimental, facebook, fleischfresser, frau, freiberufler, fruehaufsteher, fussgaenger, gamer, gang, geistigbehindert, gelb, geschaeftsfuehrer, geschieden, geschwisterkind, gruen, hessisch, hetero, hindu, homo, instagram, jazz, jude, jung, jungfrau, kasse, koelsch, koerperlichbehindert, krank, kreativ, krebs, kurzehaare, langehaare, langschlaefer, latin, liberal, linux, loewe, mac, mann, meister, mercedes, mieter, mitte, mittleresAlter, modebewusst, muell, muslim, national, nichtversichert, nord, ober, opel, ostdeutsch, pendler, politiker, pop, privat, promoviert, radfahrer, raucher, rave, rock, rot, rtl, saechsisch, scheidungskind, schuetze, schule1, schule2, schule3, schule4, schwaebisch, schwanger, schwarz, serioes, skorpion, sport, sportverein, staedtisch, star, steinbock, steuer, stier, straftaeter, sued, tattoo, tierlieb, trainiert, trans, twitter, uebergewicht, unten, untergewicht, veganer, vegetarisch, verbindung, verheiratet, vermieter, verwitwet, vielflieger, volksmusik, waage, waffe, waisenkind, wassermann, weiss, widder, windows, zivi, zugfahrer, zwillinge, adidas, asex, ausbildung, bisex, fokus, freundlich, gesund, glatze, ledig, nike, op, puma, redbull, westdeutsch;

/////////////////////////////////////////////////////////
////////////////////////SLIDER///////////////////////////
/////////////////////////////////////////////////////////

//FARBE EINS SLIDER
var farbeEins;
var sliderFarbeEins = document.getElementById('sliderFarbeEins');
noUiSlider.create(sliderFarbeEins, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [200]
  }
});

sliderFarbeEins.noUiSlider.on('update', function( value ){
//  console.log("FARBE EINS SLIDER: " + value);
  farbeEins = value;
});

//FARBE ZWEI SLIDER
var farbeZwei;
var sliderFarbeZwei = document.getElementById('sliderFarbeZwei');
noUiSlider.create(sliderFarbeZwei, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [200]
  }
});

sliderFarbeZwei.noUiSlider.on('update', function( value ){
//  console.log("FARBE ZWEI SLIDER: " + value);
  farbeZwei = value;
});

//FARBE DREI SLIDER
var farbeDrei;
var sliderFarbeDrei = document.getElementById('sliderFarbeDrei');
noUiSlider.create(sliderFarbeDrei, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [200]
  }
});

sliderFarbeDrei.noUiSlider.on('update', function( value ){
//  console.log("FARBE DREI SLIDER: " + value);
  farbeDrei = value;
});

//SPEED SLIDER
var speed;
var sliderSpeed = document.getElementById('sliderSpeed');
noUiSlider.create(sliderSpeed, {
  start: [1.0],
  step: 0.01,
  range: {
    min: [0.1],
    max: [1.9]
  }
});

sliderSpeed.noUiSlider.on('update', function( value ){
//  console.log("SPEED SLIDER: " + value);
  speed = value;
});

//DELAY SLIDER
var delayAmp;
var sliderDelayAmp = document.getElementById('sliderDelayAmp');
noUiSlider.create(sliderDelayAmp, {
  start: [0.0],
  step: 0.01,
  range: {
    min: [0.0],
    max: [1.0]
  }
});

sliderDelayAmp.noUiSlider.on('update', function( value ){
//  console.log("DEALY AMP SLIDER: " + value);
  delayAmp = value;
});

//VOLUMEN
var vol;
var sliderVol = document.getElementById('sliderVol');
noUiSlider.create(sliderVol, {
  start: [0.5],
  step: 0.01,
  range: {
    min: [0.0],
    max: [1.0]
  }
});

sliderVol.noUiSlider.on('update', function( value ){
//  console.log("VOLUMEN SLIDER: " + value);
  vol = value;
});

//PAN
var pan;
var sliderPan = document.getElementById('sliderPan');
noUiSlider.create(sliderPan, {
  start: [0.0],
  step: 0.01,
  range: {
    min: [-1.0],
    max: [1.0]
  }
});

sliderPan.noUiSlider.on('update', function( value ){
//  console.log("PAN SLIDER: " + value);
  pan = value;
});

//BUBBLE SIZE
var bubbleSize;
var sliderBubbleSize = document.getElementById('sliderBubbleSize');
noUiSlider.create(sliderBubbleSize, {
  start: [7],
  step: 1,
  range: {
    min: [0 ],
    max: [20]
  }
});

sliderBubbleSize.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE SIZE: " + value);
  bubbleSize = value;
});

//BUBBLE ANGLE
var bubbleAngle;
var sliderBubbleAngle = document.getElementById('sliderBubbleAngle');
noUiSlider.create(sliderBubbleAngle, {
  start: [275],
  step: 1,
  range: {
    min: [0],
    max: [540]
  }
});

sliderBubbleAngle.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE ANGLE: " + value);
  bubbleAngle = value;
});

//BUBBLE SPREAD
var bubbleSpread;
var sliderBubbleSpread = document.getElementById('sliderBubbleSpread');
noUiSlider.create(sliderBubbleSpread, {
  start: [400],
  step: 1,
  range: {
    min: [5],
    max: [800]
  }
});

sliderBubbleSpread.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE SPREAD: " + value);
  bubbleSpread = value;
});

//BUBBLE ROTATE
var bubbleRotate;
var sliderBubbleRotate = document.getElementById('sliderBubbleRotate');
noUiSlider.create(sliderBubbleRotate, {
  start: [50],
  step: 1,
  range: {
    min: [0],
    max: [100]
  }
});

sliderBubbleRotate.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE ROTATE: " + value);
  bubbleRotate = value;
});

//BUBBLE Height
var bubbleHeight;
var sliderBubbleHeight = document.getElementById('sliderBubbleHeight');
noUiSlider.create(sliderBubbleHeight, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [400]
  }
});

sliderBubbleHeight.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE HEIGHT: " + value);
  bubbleHeight = value;
});

//BUBBLE Width
var bubbleWidth;
var sliderBubbleWidth = document.getElementById('sliderBubbleWidth');
noUiSlider.create(sliderBubbleWidth, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [100]
  }
});

sliderBubbleWidth.noUiSlider.on('update', function( value ){
//  console.log("BUBBLE WIDTH: " + value);
  bubbleWidth = value;
});

/////////////////////////////////////////////////////////
///////////////////////PRELOAD///////////////////////////
/////////////////////////////////////////////////////////

function preload() {
  afrika = loadSound('sounds/afrika.mp3');
  akademiker = loadSound('sounds/akademiker.mp3');
  akademikerkind = loadSound('sounds/akademikerkind.mp3');
  alkoholiker = loadSound('sounds/alkoholiker.mp3');
  alleinerziehend = loadSound('sounds/alleinerziehend.mp3');
  allergiker = loadSound('sounds/allergiker.mp3');
  alt = loadSound('sounds/alt.mp3');
  alternativ = loadSound('sounds/alternativ.mp3');
  angestellte = loadSound('sounds/angestellte.mp3');
  antark = loadSound('sounds/antarkt.mp3');
  antifa = loadSound('sounds/antifa.mp3');
  arbeiterkind = loadSound('sounds/arbeiterkind.mp3');
  arbeitskleidung = loadSound('sounds/arbeitskleidung.mp3');
  arbeitslos = loadSound('sounds/arbeitslos.mp3');
  asien = loadSound('sounds/asien.mp3');
  atheist = loadSound('sounds/atheist.mp3');
  aufmerksam = loadSound('sounds/aufmerksam.mp3');
  augenblau = loadSound('sounds/augenblau.mp3');
  augenbraun = loadSound('sounds/augenbraun.mp3');
  augengruen = loadSound('sounds/augengruen.mp3');
  augenhaselnussbraun = loadSound('sounds/augenhaselnussbraun.mp3');
  augenschwarz = loadSound('sounds/augenschwarz.mp3');
  ausgemuster = loadSound('sounds/ausgemuster.mp3');
  austra = loadSound('sounds/austra.mp3');
  autofahrer = loadSound('sounds/autofahrer.mp3');
  bahai = loadSound('sounds/bahai.mp3');
  bauernkind = loadSound('sounds/bauernkind.mp3');
  bayerisch = loadSound('sounds/bayerisch.mp3');
  beamtenkind = loadSound('sounds/beamtenkind.mp3');
  berlinerisch = loadSound('sounds/berlinerisch.mp3');
  besorgt = loadSound('sounds/besorgt.mp3');
  bmw = loadSound('sounds/bmw.mp3');
  buddhist = loadSound('sounds/buddhist.mp3');
  buecherwurm = loadSound('sounds/buecherwurm.mp3');
  buero = loadSound('sounds/buero.mp3');
  bundeswehr = loadSound('sounds/bundeswehr.mp3');
  bus = loadSound('sounds/bus.mp3');
  christ = loadSound('sounds/christ.mp3');
  chronischkrank = loadSound('sounds/chronischkrank.mp3');
  classic = loadSound('sounds/classic.mp3');
  club = loadSound('sounds/club.mp3');
  doerflich = loadSound('sounds/doerflich.mp3');
  drogenabhaengig = loadSound('sounds/drogenabhaengig.mp3');
  einzelkind = loadSound('sounds/einzelkind.mp3');
  enthusiastisch = loadSound('sounds/enthusiastisch.mp3');
  eso = loadSound('sounds/eso.mp3');
  euro = loadSound('sounds/euro.mp3');
  experimental = loadSound('sounds/experimental.mp3');
  facebook = loadSound('sounds/facebook.mp3');
  fleischfresser = loadSound('sounds/fleischfresser.mp3');
  frau = loadSound('sounds/frau.mp3');
  freiberufler = loadSound('sounds/freiberufler.mp3');
  fruehaufsteher = loadSound('sounds/fruehaufsteher.mp3');
  fussgaenger = loadSound('sounds/fussgaenger.mp3');
  gamer = loadSound('sounds/gamer.mp3');
  gang = loadSound('sounds/gang.mp3');
  geistigbehindert = loadSound('sounds/geistigbehindert.mp3');
  gelb = loadSound('sounds/gelb.mp3');
  geschaeftsfuehrer = loadSound('sounds/geschaeftsfuehrer.mp3');
  geschieden = loadSound('sounds/geschieden.mp3');
  geschwisterkind = loadSound('sounds/geschwisterkind.mp3');
  gruen = loadSound('sounds/gruen.mp3');
  hessisch = loadSound('sounds/hessisch.mp3');
  hetero = loadSound('sounds/hetero.mp3');
  hindu = loadSound('sounds/hindu.mp3');
  homo = loadSound('sounds/homo.mp3');
  instagram = loadSound('sounds/instagram.mp3');
  jazz = loadSound('sounds/jazz.mp3');
  jude = loadSound('sounds/jude.mp3');
  jung = loadSound('sounds/jung.mp3');
  jungfrau = loadSound('sounds/jungfrau.mp3');
  kasse = loadSound('sounds/kasse.mp3');
  koelsch = loadSound('sounds/koelsch.mp3');
  koerperlichbehindert = loadSound('sounds/koerperlichbehindert.mp3');
  krank = loadSound('sounds/krank.mp3');
  kreativ = loadSound('sounds/kreativ.mp3');
  krebs = loadSound('sounds/krebs.mp3');
  kurzehaare = loadSound('sounds/kurzehaare.mp3');
  langehaare = loadSound('sounds/langehaare.mp3');
  langschlaefer = loadSound('sounds/langschlaefer.mp3');
  latin = loadSound('sounds/latin.mp3');
  liberal = loadSound('sounds/liberal.mp3');
  linux = loadSound('sounds/linux.mp3');
  loewe = loadSound('sounds/loewe.mp3');
  mac = loadSound('sounds/mac.mp3');
  mann = loadSound('sounds/mann.mp3');
  meister = loadSound('sounds/meister.mp3');
  mercedes = loadSound('sounds/mercedes.mp3');
  mieter = loadSound('sounds/mieter.mp3');
  mitte = loadSound('sounds/mitte.mp3');
  mittleresAlter = loadSound('sounds/mittleresalter.mp3');
  modebewusst = loadSound('sounds/modebewusst.mp3');
  muell = loadSound('sounds/muell.mp3');
  muslim = loadSound('sounds/muslim.mp3');
  national = loadSound('sounds/national.mp3');
  nichtversichert = loadSound('sounds/nichtversichert.mp3');
  nord = loadSound('sounds/nord.mp3');
  ober = loadSound('sounds/ober.mp3');
  opel = loadSound('sounds/opel.mp3');
  ostdeutsch = loadSound('sounds/ostdeutsch.mp3');
  pendler = loadSound('sounds/pendler.mp3');
  politiker = loadSound('sounds/politiker.mp3');
  pop = loadSound('sounds/pop.mp3');
  privat = loadSound('sounds/privat.mp3');
  promoviert = loadSound('sounds/promoviert.mp3');
  radfahrer = loadSound('sounds/radfahrer.mp3');
  raucher = loadSound('sounds/raucher.mp3');
  rave = loadSound('sounds/rave.mp3');
  rock = loadSound('sounds/rock.mp3');
  rot = loadSound('sounds/rot.mp3');
  rtl = loadSound('sounds/rtl.mp3');
  saechsisch = loadSound('sounds/saechsisch.mp3');
  scheidungskind = loadSound('sounds/scheidungskind.mp3');
  schuetze = loadSound('sounds/schuetze.mp3');
  schule1 = loadSound('sounds/schule1.mp3');
  schule2 = loadSound('sounds/schule2.mp3');
  schule3 = loadSound('sounds/schule3.mp3');
  schule4 = loadSound('sounds/schule4.mp3');
  schwaebisch = loadSound('sounds/schwaebisch.mp3');
  schwanger = loadSound('sounds/schwanger.mp3');
  schwarz = loadSound('sounds/schwarz.mp3');
  serioes = loadSound('sounds/serioes.mp3');
  skorpion = loadSound('sounds/skorpion.mp3');
  sport = loadSound('sounds/sport.mp3');
  sportverein = loadSound('sounds/sportverein.mp3');
  staedtisch = loadSound('sounds/staedtisch.mp3');
  star = loadSound('sounds/star.mp3');
  steinbock = loadSound('sounds/steinbock.mp3');
  steuer = loadSound('sounds/steuer.mp3');
  stier = loadSound('sounds/stier.mp3');
  straftaeter = loadSound('sounds/straftaeter.mp3');
  sued = loadSound('sounds/sued.mp3');
  tattoo = loadSound('sounds/tattoo.mp3');
  tierlieb = loadSound('sounds/tierlieb.mp3');
  trainiert = loadSound('sounds/trainiert.mp3');
  trans = loadSound('sounds/trans.mp3');
  twitter = loadSound('sounds/twitter.mp3');
  uebergewicht = loadSound('sounds/uebergewicht.mp3');
  unten = loadSound('sounds/unten.mp3');
  untergewicht = loadSound('sounds/untergewicht.mp3');
  veganer = loadSound('sounds/veganer.mp3');
  vegetarisch = loadSound('sounds/vegetarisch.mp3');
  verbindung = loadSound('sounds/verbindung.mp3');
  verheiratet = loadSound('sounds/verheiratet.mp3');
  vermieter = loadSound('sounds/vermieter.mp3');
  verwitwet = loadSound('sounds/verwitwet.mp3');
  vielflieger = loadSound('sounds/vielflieger.mp3');
  volksmusik = loadSound('sounds/volksmusik.mp3');
  waage = loadSound('sounds/waage.mp3');
  waffe = loadSound('sounds/waffe.mp3');
  waisenkind = loadSound('sounds/waisenkind.mp3');
  wassermann = loadSound('sounds/wassermann.mp3');
  weiss = loadSound('sounds/weiss.mp3');
  widder = loadSound('sounds/widder.mp3');
  windows = loadSound('sounds/windows.mp3');
  zivi = loadSound('sounds/zivi.mp3');
  zugfahrer = loadSound('sounds/zugfahrer.mp3');
  zwillinge = loadSound('sounds/zwillinge.mp3');

  adidas = loadSound('sounds/adidas.mp3');
  asex = loadSound('sounds/asex.mp3');
  ausbildung = loadSound('sounds/ausbildung.mp3');
  bisex = loadSound('sounds/bisex.mp3');
  fokus = loadSound('sounds/fokus.mp3');
  freundlich = loadSound('sounds/freundlich.mp3');
  gesund = loadSound('sounds/gesund.mp3');
  glatze = loadSound('sounds/glatze.mp3');
  ledig = loadSound('sounds/ledig.mp3');
  nike = loadSound('sounds/nike.mp3');
  op = loadSound('sounds/op.mp3');
  puma = loadSound('sounds/puma.mp3');
  redbull = loadSound('sounds/redbull.mp3');
  westdeutsch = loadSound('sounds/westdeutsch.mp3');
}

/////////////////////////////////////////////////////////
////////////////////////SETUP////////////////////////////
/////////////////////////////////////////////////////////

function setup(){
  amplitude = new p5.Amplitude(0.9);
  fft = new p5.FFT(0.9, 512);
  delay = new p5.Delay();
  reverb = new p5.Reverb();
//  mic = new p5.AudioIn();
//  mic.start();

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-3');
//  angleMode(DEGREES);
}

/////////////////////////////////////////////////////////
////////////////////////DRAW///////////////////////////
/////////////////////////////////////////////////////////

function draw() {
//  var micLevel = mic.getLevel()*100;
//  var level = amplitude.getLevel();
//  var size = map(level, 0, 100, 0, 500);
//  var h = hour();
//  var m = minute();
//  var s = second();
  e = constrain(farbeEins, 0, 255);
  z = constrain(farbeZwei, 0, 255);
  d = constrain(farbeDrei, 0, 255);

//  micLevelSize = constrain(micLevel, 0, 200);
//background(micLevelSize+e, micLevelSize+z, micLevelSize+d);
  background(e, z, d);

  identityBubble();
//  filter(BLUR, 1);

  afrika.rate(speed);
  afrika.pan(pan);
  delay.process(afrika, .30, .7, 2300);

  akademiker.rate(speed);
  akademiker.pan(pan);
  delay.process(akademiker, .30, .7, 2300);

  akademikerkind.rate(speed);
  akademikerkind.pan(pan);
  delay.process(akademikerkind, .30, .7, 2300);

  alkoholiker.rate(speed);
  alkoholiker.pan(pan);
  delay.process(alkoholiker, .30, .7, 2300);

  alleinerziehend.rate(speed);
  alleinerziehend.pan(pan);
  delay.process(alleinerziehend, .30, .7, 2300);

  allergiker.rate(speed);
  allergiker.pan(pan);
  delay.process(allergiker, .30, .7, 2300);

  alt.rate(speed);
  alt.pan(pan);
  delay.process(alt, .30, .7, 2300);

  alternativ.rate(speed);
  alternativ.pan(pan);
  delay.process(alternativ, .30, .7, 2300);

  angestellte.rate(speed);
  angestellte.pan(pan);
  delay.process(angestellte, .30, .7, 2300);

  antark.rate(speed);
  antark.pan(pan);
  delay.process(antark, .30, .7, 2300);

  antifa.rate(speed);
  antifa.pan(pan);
  delay.process(antifa, .30, .7, 2300);

  arbeiterkind.rate(speed);
  arbeiterkind.pan(pan);
  delay.process(arbeiterkind, .30, .7, 2300);

  arbeitskleidung.rate(speed);
  arbeitskleidung.pan(pan);
  delay.process(arbeitskleidung, .30, .7, 2300);

  arbeitslos.rate(speed);
  arbeitslos.pan(pan);
  delay.process(arbeitslos, .30, .7, 2300);

  asien.rate(speed);
  asien.pan(pan);
  delay.process(asien, .30, .7, 2300);

  atheist.rate(speed);
  atheist.pan(pan);
  delay.process(atheist, .30, .7, 2300);

  aufmerksam.rate(speed);
  aufmerksam.pan(pan);
  delay.process(aufmerksam, .30, .7, 2300);

  augenblau.rate(speed);
  augenblau.pan(pan);
  delay.process(augenblau, .30, .7, 2300);

  augenbraun.rate(speed);
  augenbraun.pan(pan);
  delay.process(augenbraun, .30, .7, 2300);

  augengruen.rate(speed);
  augengruen.pan(pan);
  delay.process(augengruen, .30, .7, 2300);

  augenhaselnussbraun.rate(speed);
  augenhaselnussbraun.pan(pan);
  delay.process(augenhaselnussbraun, .30, .7, 2300);

  augenschwarz.rate(speed);
  augenschwarz.pan(pan);
  delay.process(augenschwarz, .30, .7, 2300);

  austra.rate(speed);
  austra.pan(pan);
  delay.process(austra, .30, .7, 2300);

  autofahrer.rate(speed);
  autofahrer.pan(pan);
  delay.process(autofahrer, .30, .7, 2300);

  bahai.rate(speed);
  bahai.pan(pan);
  delay.process(bahai, .30, .7, 2300);

  bauernkind.rate(speed);
  bauernkind.pan(pan);
  delay.process(bauernkind, .30, .7, 2300);

  bayerisch.rate(speed);
  bayerisch.pan(pan);
  delay.process(bayerisch, .30, .7, 2300);

  beamtenkind.rate(speed);
  beamtenkind.pan(pan);
  delay.process(beamtenkind, .30, .7, 2300);

  berlinerisch.rate(speed);
  berlinerisch.pan(pan);
  delay.process(berlinerisch, .30, .7, 2300);

  besorgt.rate(speed);
  besorgt.pan(pan);
  delay.process(besorgt, .30, .7, 2300);

  bmw.rate(speed);
  bmw.pan(pan);
  delay.process(bmw, .30, .7, 2300);

  buddhist.rate(speed);
  buddhist.pan(pan);
  delay.process(buddhist, .30, .7, 2300);

  buecherwurm.rate(speed);
  buecherwurm.pan(pan);
  delay.process(buecherwurm, .30, .7, 2300);

  buero.rate(speed);
  buero.pan(pan);
  delay.process(buero, .30, .7, 2300);

  bundeswehr.rate(speed);
  bundeswehr.pan(pan);
  delay.process(bundeswehr, .30, .7, 2300);

  bus.rate(speed);
  bus.pan(pan);
  delay.process(bus, .30, .7, 2300);

  christ.rate(speed);
  christ.pan(pan);
  delay.process(christ, .30, .7, 2300);

  chronischkrank.rate(speed);
  chronischkrank.pan(pan);
  delay.process(chronischkrank, .30, .7, 2300);

  classic.rate(speed);
  classic.pan(pan);
  delay.process(classic, .30, .7, 2300);

  club.rate(speed);
  club.pan(pan);
  delay.process(club, .30, .7, 2300);

  doerflich.rate(speed);
  doerflich.pan(pan);
  delay.process(doerflich, .30, .7, 2300);

  drogenabhaengig.rate(speed);
  drogenabhaengig.pan(pan);
  delay.process(drogenabhaengig, .30, .7, 2300);

  einzelkind.rate(speed);
  einzelkind.pan(pan);
  delay.process(einzelkind, .30, .7, 2300);

  enthusiastisch.rate(speed);
  enthusiastisch.pan(pan);
  delay.process(enthusiastisch, .30, .7, 2300);

  eso.rate(speed);
  eso.pan(pan);
  delay.process(eso, .30, .7, 2300);

  euro.rate(speed);
  euro.pan(pan);
  delay.process(euro, .30, .7, 2300);

  experimental.rate(speed);
  experimental.pan(pan);
  delay.process(experimental, .30, .7, 2300);

  facebook.rate(speed);
  facebook.pan(pan);
  delay.process(facebook, .30, .7, 2300);

  fleischfresser.rate(speed);
  fleischfresser.pan(pan);
  delay.process(fleischfresser, .30, .7, 2300);

  frau.rate(speed);
  frau.pan(pan);
  delay.process(frau, .30, .7, 2300);

  freiberufler.rate(speed);
  freiberufler.pan(pan);
  delay.process(freiberufler, .30, .7, 2300);

  fruehaufsteher.rate(speed);
  fruehaufsteher.pan(pan);
  delay.process(fruehaufsteher, .30, .7, 2300);

  fussgaenger.rate(speed);
  fussgaenger.pan(pan);
  delay.process(fussgaenger, .30, .7, 2300);

  gamer.rate(speed);
  gamer.pan(pan);
  delay.process(gamer, .30, .7, 2300);

  gang.rate(speed);
  gang.pan(pan);
  delay.process(gang, .30, .7, 2300);

  geistigbehindert.rate(speed);
  geistigbehindert.pan(pan);
  delay.process(geistigbehindert, .30, .7, 2300);

  gelb.rate(speed);
  gelb.pan(pan);
  delay.process(gelb, .30, .7, 2300);

  geschaeftsfuehrer.rate(speed);
  geschaeftsfuehrer.pan(pan);
  delay.process(geschaeftsfuehrer, .30, .7, 2300);

  geschieden.rate(speed);
  geschieden.pan(pan);
  delay.process(geschieden, .30, .7, 2300);

  geschwisterkind.rate(speed);
  geschwisterkind.pan(pan);
  delay.process(geschwisterkind, .30, .7, 2300);

  gruen.rate(speed);
  gruen.pan(pan);
  delay.process(gruen, .30, .7, 2300);

  hessisch.rate(speed);
  hessisch.pan(pan);
  delay.process(hessisch, .30, .7, 2300);

  hetero.rate(speed);
  hetero.pan(pan);
  delay.process(hetero, .30, .7, 2300);

  hindu.rate(speed);
  hindu.pan(pan);
  delay.process(hindu, .30, .7, 2300);

  homo.rate(speed);
  homo.pan(pan);
  delay.process(homo, .30, .7, 2300);

  instagram.rate(speed);
  instagram.pan(pan);
  delay.process(instagram, .30, .7, 2300);

  jazz.rate(speed);
  jazz.pan(pan);
  delay.process(jazz, .30, .7, 2300);

  jude.rate(speed);
  jude.pan(pan);
  delay.process(jude, .30, .7, 2300);

  jung.rate(speed);
  jung.pan(pan);
  delay.process(jung, .30, .7, 2300);

  jungfrau.rate(speed);
  jungfrau.pan(pan);
  delay.process(jungfrau, .30, .7, 2300);

  kasse.rate(speed);
  kasse.pan(pan);
  delay.process(kasse, .30, .7, 2300);

  koelsch.rate(speed);
  koelsch.pan(pan);
  delay.process(koelsch, .30, .7, 2300);

  koerperlichbehindert.rate(speed);
  koerperlichbehindert.pan(pan);
  delay.process(koerperlichbehindert, .30, .7, 2300);

  krank.rate(speed);
  krank.pan(pan);
  delay.process(krank, .30, .7, 2300);

  kreativ.rate(speed);
  kreativ.pan(pan);
  delay.process(kreativ, .30, .7, 2300);

  krebs.rate(speed);
  krebs.pan(pan);
  delay.process(krebs, .30, .7, 2300);

  kurzehaare.rate(speed);
  kurzehaare.pan(pan);
  delay.process(kurzehaare, .30, .7, 2300);

  langehaare.rate(speed);
  langehaare.pan(pan);
  delay.process(langehaare, .30, .7, 2300);

  langschlaefer.rate(speed);
  langschlaefer.pan(pan);
  delay.process(langschlaefer, .30, .7, 2300);

  latin.rate(speed);
  latin.pan(pan);
  delay.process(latin, .30, .7, 2300);

  liberal.rate(speed);
  liberal.pan(pan);
  delay.process(liberal, .30, .7, 2300);

  linux.rate(speed);
  linux.pan(pan);
  delay.process(linux, .30, .7, 2300);

  loewe.rate(speed);
  loewe.pan(pan);
  delay.process(loewe, .30, .7, 2300);

  mac.rate(speed);
  mac.pan(pan);
  delay.process(mac, .30, .7, 2300);

  mann.rate(speed);
  mann.pan(pan);
  delay.process(mann, .30, .7, 2300);

  meister.rate(speed);
  meister.pan(pan);
  delay.process(meister, .30, .7, 2300);

  mercedes.rate(speed);
  mercedes.pan(pan);
  delay.process(mercedes, .30, .7, 2300);

  mieter.rate(speed);
  mieter.pan(pan);
  delay.process(mieter, .30, .7, 2300);

  mitte.rate(speed);
  mitte.pan(pan);
  delay.process(mitte, .30, .7, 2300);

  mittleresAlter.rate(speed);
  mittleresAlter.pan(pan);
  delay.process(mittleresAlter, .30, .7, 2300);

  modebewusst.rate(speed);
  modebewusst.pan(pan);
  delay.process(modebewusst, .30, .7, 2300);

  muell.rate(speed);
  muell.pan(pan);
  delay.process(muell, .30, .7, 2300);

  muslim.rate(speed);
  muslim.pan(pan);
  delay.process(muslim, .30, .7, 2300);

  national.rate(speed);
  national.pan(pan);
  delay.process(national, .30, .7, 2300);

  nichtversichert.rate(speed);
  nichtversichert.pan(pan);
  delay.process(nichtversichert, .30, .7, 2300);

  nord.rate(speed);
  nord.pan(pan);
  delay.process(nord, .30, .7, 2300);

  ober.rate(speed);
  ober.pan(pan);
  delay.process(ober, .30, .7, 2300);

  opel.rate(speed);
  opel.pan(pan);
  delay.process(opel, .30, .7, 2300);

  ostdeutsch.rate(speed);
  ostdeutsch.pan(pan);
  delay.process(ostdeutsch, .30, .7, 2300);

  pendler.rate(speed);
  pendler.pan(pan);
  delay.process(pendler, .30, .7, 2300);

  politiker.rate(speed);
  politiker.pan(pan);
  delay.process(politiker, .30, .7, 2300);

  pop.rate(speed);
  pop.pan(pan);
  delay.process(pop, .30, .7, 2300);

  privat.rate(speed);
  privat.pan(pan);
  delay.process(privat, .30, .7, 2300);

  promoviert.rate(speed);
  promoviert.pan(pan);
  delay.process(promoviert, .30, .7, 2300);

  radfahrer.rate(speed);
  radfahrer.pan(pan);
  delay.process(radfahrer, .30, .7, 2300);

  raucher.rate(speed);
  raucher.pan(pan);
  delay.process(raucher, .30, .7, 2300);

  rave.rate(speed);
  rave.pan(pan);
  delay.process(rave, .30, .7, 2300);

  rock.rate(speed);
  rock.pan(pan);
  delay.process(rock, .30, .7, 2300);

  rot.rate(speed);
  rot.pan(pan);
  delay.process(rot, .30, .7, 2300);

  rtl.rate(speed);
  rtl.pan(pan);
  delay.process(rtl, .30, .7, 2300);

  saechsisch.rate(speed);
  saechsisch.pan(pan);
  delay.process(saechsisch, .30, .7, 2300);

  scheidungskind.rate(speed);
  scheidungskind.pan(pan);
  delay.process(scheidungskind, .30, .7, 2300);

  schuetze.rate(speed);
  schuetze.pan(pan);
  delay.process(schuetze, .30, .7, 2300);

  schule1.rate(speed);
  schule1.pan(pan);
  delay.process(schule1, .30, .7, 2300);

  schule2.rate(speed);
  schule2.pan(pan);
  delay.process(schule2, .30, .7, 2300);

  schule3.rate(speed);
  schule3.pan(pan);
  delay.process(schule3, .30, .7, 2300);

  schule4.rate(speed);
  schule4.pan(pan);
  delay.process(schule4, .30, .7, 2300);

  schwaebisch.rate(speed);
  schwaebisch.pan(pan);
  delay.process(schwaebisch, .30, .7, 2300);

  schwanger.rate(speed);
  schwanger.pan(pan);
  delay.process(schwanger, .30, .7, 2300);

  schwarz.rate(speed);
  schwarz.pan(pan);
  delay.process(schwarz, .30, .7, 2300);

  serioes.rate(speed);
  serioes.pan(pan);
  delay.process(serioes, .30, .7, 2300);

  skorpion.rate(speed);
  skorpion.pan(pan);
  delay.process(skorpion, .30, .7, 2300);

  sport.rate(speed);
  sport.pan(pan);
  delay.process(sport, .30, .7, 2300);

  sportverein.rate(speed);
  sportverein.pan(pan);
  delay.process(sportverein, .30, .7, 2300);

  staedtisch.rate(speed);
  staedtisch.pan(pan);
  delay.process(staedtisch, .30, .7, 2300);

  star.rate(speed);
  star.pan(pan);
  delay.process(star, .30, .7, 2300);

  steinbock.rate(speed);
  steinbock.pan(pan);
  delay.process(steinbock, .30, .7, 2300);

  steuer.rate(speed);
  steuer.pan(pan);
  delay.process(steuer, .30, .7, 2300);

  stier.rate(speed);
  stier.pan(pan);
  delay.process(stier, .30, .7, 2300);

  straftaeter.rate(speed);
  straftaeter.pan(pan);
  delay.process(straftaeter, .30, .7, 2300);

  sued.rate(speed);
  sued.pan(pan);
  delay.process(sued, .30, .7, 2300);

  tattoo.rate(speed);
  tattoo.pan(pan);
  delay.process(tattoo, .30, .7, 2300);

  tierlieb.rate(speed);
  tierlieb.pan(pan);
  delay.process(tierlieb, .30, .7, 2300);

  trainiert.rate(speed);
  trainiert.pan(pan);
  delay.process(trainiert, .30, .7, 2300);

  trans.rate(speed);
  trans.pan(pan);
  delay.process(trans, .30, .7, 2300);

  twitter.rate(speed);
  twitter.pan(pan);
  delay.process(twitter, .30, .7, 2300);

  uebergewicht.rate(speed);
  uebergewicht.pan(pan);
  delay.process(uebergewicht, .30, .7, 2300);

  unten.rate(speed);
  unten.pan(pan);
  delay.process(unten, .30, .7, 2300);

  untergewicht.rate(speed);
  untergewicht.pan(pan);
  delay.process(untergewicht, .30, .7, 2300);

  veganer.rate(speed);
  veganer.pan(pan);
  delay.process(veganer, .30, .7, 2300);

  vegetarisch.rate(speed);
  vegetarisch.pan(pan);
  delay.process(vegetarisch, .30, .7, 2300);

  verbindung.rate(speed);
  verbindung.pan(pan);
  delay.process(verbindung, .30, .7, 2300);

  verheiratet.rate(speed);
  verheiratet.pan(pan);
  delay.process(verheiratet, .30, .7, 2300);

  vermieter.rate(speed);
  vermieter.pan(pan);
  delay.process(vermieter, .30, .7, 2300);

  verwitwet.rate(speed);
  verwitwet.pan(pan);
  delay.process(verwitwet, .30, .7, 2300);

  vielflieger.rate(speed);
  vielflieger.pan(pan);
  delay.process(vielflieger, .30, .7, 2300);

  volksmusik.rate(speed);
  volksmusik.pan(pan);
  delay.process(volksmusik, .30, .7, 2300);

  waage.rate(speed);
  waage.pan(pan);
  delay.process(waage, .30, .7, 2300);

  waffe.rate(speed);
  waffe.pan(pan);
  delay.process(waffe, .30, .7, 2300);

  waisenkind.rate(speed);
  waisenkind.pan(pan);
  delay.process(waisenkind, .30, .7, 2300);

  wassermann.rate(speed);
  wassermann.pan(pan);
  delay.process(wassermann, .30, .7, 2300);

  weiss.rate(speed);
  weiss.pan(pan);
  delay.process(weiss, .30, .7, 2300);

  widder.rate(speed);
  widder.pan(pan);
  delay.process(widder, .30, .7, 2300);

  windows.rate(speed);
  windows.pan(pan);
  delay.process(windows, .30, .7, 2300);

  zivi.rate(speed);
  zivi.pan(pan);
  delay.process(zivi, .30, .7, 2300);

  zugfahrer.rate(speed);
  zugfahrer.pan(pan);
  delay.process(zugfahrer, .30, .7, 2300);

  zwillinge.rate(speed);
  zwillinge.pan(pan);
  delay.process(zwillinge, .30, .7, 2300);

  adidas.rate(speed);
  adidas.pan(pan);
  delay.process(adidas, .30, .7, 2300);

  asex.rate(speed);
  asex.pan(pan);
  delay.process(asex, .30, .7, 2300);

  ausbildung.rate(speed);
  ausbildung.pan(pan);
  delay.process(ausbildung, .30, .7, 2300);

  bisex.rate(speed);
  bisex.pan(pan);
  delay.process(bisex, .30, .7, 2300);

  fokus.rate(speed);
  fokus.pan(pan);
  delay.process(fokus, .30, .7, 2300);

  freundlich.rate(speed);
  freundlich.pan(pan);
  delay.process(freundlich, .30, .7, 2300);

  gesund.rate(speed);
  gesund.pan(pan);
  delay.process(gesund, .30, .7, 2300);

  glatze.rate(speed);
  glatze.pan(pan);
  delay.process(glatze, .30, .7, 2300);

  ledig.rate(speed);
  ledig.pan(pan);
  delay.process(ledig, .30, .7, 2300);

  nike.rate(speed);
  nike.pan(pan);
  delay.process(nike, .30, .7, 2300);

  op.rate(speed);
  op.pan(pan);
  delay.process(op, .30, .7, 2300);

  puma.rate(speed);
  puma.pan(pan);
  delay.process(puma, .30, .7, 2300);

  redbull.rate(speed);
  redbull.pan(pan);
  delay.process(redbull, .30, .7, 2300);

  westdeutsch.rate(speed);
  westdeutsch.pan(pan);
  delay.process(westdeutsch, .30, .7, 2300);

  delay.amp(delayAmp);
  volume = constrain(vol, 0, 1);
  masterVolume(volume);
}

/////////////////////////////////////////////////////////
////////////////////////BUBBLE///////////////////////////
/////////////////////////////////////////////////////////

function identityBubble() {
  var spectrum = fft.analyze();
  br = constrain(bubbleRotate, 0, 360);

  noStroke();
  translate((windowWidth/2)+(pan*300), windowHeight/2);
//  var micLevel = mic.getLevel();
//  ml = constrain(micLevel, 0, 360);
  rotate(br);
  fill(255);
  for (var i = 0; i < spectrum.length; i++){
    var freq = fft.analyze();
    var level = amplitude.getLevel();
//    var l = (micLevel + level)*50;
var l = level*50;
    a = constrain(bubbleAngle, 0, 720);
    bs = constrain(bubbleSpread, 0, 720);
    var angle = map(i, 0, spectrum.length, 750-a, a);
    var amp = spectrum[i];
    var r = map(amp, 0, bs/2, 100, 0);
    var x = r * cos(angle);
    var y = r * sin(angle);
    s = constrain(bubbleSize, 0, 500);
    h = constrain(bubbleHeight, 0, 400);
    w = constrain(bubbleWidth, 0, 400);
    ie = constrain(i, 0, 150);

    noStroke();
    e = constrain(farbeEins, 0, 255);
    z = constrain(farbeZwei, 0, 255);
    d = constrain(farbeDrei, 0, 255);
    fill(ie+e,ie+z,ie+d);
    ellipse(x, y, l+s+w, l+s+h);
  }
}

/////////////////////////////////////////////////////////
////////////////////////SOUNDS///////////////////////////
/////////////////////////////////////////////////////////


  function sAfrika() {
    if (!afrika.isPlaying()){
      afrika.loop();
      document.getElementById("afrika").style["color"] = 'black';
      document.getElementById("afrika").style["background-color"] = 'white';
    } else { afrika.stop();
      document.getElementById("afrika").style["color"] = 'white';
      document.getElementById("afrika").style["background-color"] = 'transparent';
    } }

  function sAkademiker() {
    if (!akademiker.isPlaying()){
      akademiker.loop();
      document.getElementById("akademiker").style["color"] = 'black';
      document.getElementById("akademiker").style["background-color"] = 'white';
    } else { akademiker.stop();
      document.getElementById("akademiker").style["color"] = 'white';
      document.getElementById("akademiker").style["background-color"] = 'transparent';
    } }


  function sAkademikerKind() {
    if (!akademikerkind.isPlaying()){
      akademikerkind.loop();
      document.getElementById("akademikerkind").style["color"] = 'black';
      document.getElementById("akademikerkind").style["background-color"] = 'white';
    } else { akademikerkind.stop();
      document.getElementById("akademikerkind").style["color"] = 'white';
      document.getElementById("akademikerkind").style["background-color"] = 'transparent';
    } }

  function sAlkoholiker() {
    if (!alkoholiker.isPlaying()){
      alkoholiker.loop();
      document.getElementById("alkoholiker").style["color"] = 'black';
      document.getElementById("alkoholiker").style["background-color"] = 'white';
    } else { alkoholiker.stop();
      document.getElementById("alkoholiker").style["color"] = 'white';
      document.getElementById("alkoholiker").style["background-color"] = 'transparent';
    } }

  function sAlleinerziehend() {
    if (!alleinerziehend.isPlaying()){
      alleinerziehend.loop();
      document.getElementById("alleinerziehend").style["color"] = 'black';
      document.getElementById("alleinerziehend").style["background-color"] = 'white';
    } else { alleinerziehend.stop();
      document.getElementById("alleinerziehend").style["color"] = 'white';
      document.getElementById("alleinerziehend").style["background-color"] = 'transparent';
    } }

  function sAllergiker() {
    if (!allergiker.isPlaying()){
      allergiker.loop();
      document.getElementById("allergiker").style["color"] = 'black';
      document.getElementById("allergiker").style["background-color"] = 'white';
    } else { allergiker.stop();
      document.getElementById("allergiker").style["color"] = 'white';
      document.getElementById("allergiker").style["background-color"] = 'transparent';
    } }

  function sAlt() {
    if (!alt.isPlaying()){
      alt.loop();
      document.getElementById("alt").style["color"] = 'black';
      document.getElementById("alt").style["background-color"] = 'white';
    } else { alt.stop();
      document.getElementById("alt").style["color"] = 'white';
      document.getElementById("alt").style["background-color"] = 'transparent';
  } }

  function sAlternativ() {
    if (!alternativ.isPlaying()){
      alternativ.loop();
      document.getElementById("alternativ").style["color"] = 'black';
      document.getElementById("alternativ").style["background-color"] = 'white';
    } else { alternativ.stop();
      document.getElementById("alternativ").style["color"] = 'white';
      document.getElementById("alternativ").style["background-color"] = 'transparent';
  } }

  function sAngestellte() {
    if (!angestellte.isPlaying()){
      angestellte.loop();
      document.getElementById("angestellte").style["color"] = 'black';
      document.getElementById("angestellte").style["background-color"] = 'white';
    } else { angestellte.stop();
      document.getElementById("angestellte").style["color"] = 'white';
      document.getElementById("angestellte").style["background-color"] = 'transparent';
  } }

  function sAntark() {
    if (!antark.isPlaying()){
      antark.loop();
      document.getElementById("antark").style["color"] = 'black';
      document.getElementById("antark").style["background-color"] = 'white';
    } else { antark.stop();
      document.getElementById("antark").style["color"] = 'white';
      document.getElementById("antark").style["background-color"] = 'transparent';
  } }

  function sAntifa() {
    if (!antifa.isPlaying()){
      antifa.loop();
      document.getElementById("antifa").style["color"] = 'black';
      document.getElementById("antifa").style["background-color"] = 'white';
    } else { antifa.stop();
      document.getElementById("antifa").style["color"] = 'white';
      document.getElementById("antifa").style["background-color"] = 'transparent';
  } }

  function sArbeiterkind() {
    if (!arbeiterkind.isPlaying()){
      arbeiterkind.loop();
      document.getElementById("arbeiterkind").style["color"] = 'black';
      document.getElementById("arbeiterkind").style["background-color"] = 'white';
    } else { arbeiterkind.stop();
      document.getElementById("arbeiterkind").style["color"] = 'white';
      document.getElementById("arbeiterkind").style["background-color"] = 'transparent';
  } }


  function sArbeitslos() {
    if (!arbeitslos.isPlaying()){
      arbeitslos.loop();
      document.getElementById("arbeitslos").style["color"] = 'black';
      document.getElementById("arbeitslos").style["background-color"] = 'white';
    } else { arbeitslos.stop();
      document.getElementById("arbeitslos").style["color"] = 'white';
      document.getElementById("arbeitslos").style["background-color"] = 'transparent';
  } }

  function sArbeitskleidung() {
    if (!arbeitskleidung.isPlaying()){
      arbeitskleidung.loop();
      document.getElementById("arbeitskleidung").style["color"] = 'black';
      document.getElementById("arbeitskleidung").style["background-color"] = 'white';
    } else { arbeitskleidung.stop();
      document.getElementById("arbeitskleidung").style["color"] = 'white';
      document.getElementById("arbeitskleidung").style["background-color"] = 'transparent';
  } }

  function sAsien() {
    if (!asien.isPlaying()){
      asien.loop();
      document.getElementById("asien").style["color"] = 'black';
      document.getElementById("asien").style["background-color"] = 'white';
    } else { asien.stop();
      document.getElementById("asien").style["color"] = 'white';
      document.getElementById("asien").style["background-color"] = 'transparent';
  } }

  function sAtheist() {
    if (!atheist.isPlaying()){
      atheist.loop();
      document.getElementById("atheist").style["color"] = 'black';
      document.getElementById("atheist").style["background-color"] = 'white';
    } else { atheist.stop();
      document.getElementById("atheist").style["color"] = 'white';
      document.getElementById("atheist").style["background-color"] = 'transparent';
  } }

  function sAufmerksam() {
    if (!aufmerksam.isPlaying()){
      aufmerksam.loop();
      document.getElementById("aufmerksam").style["color"] = 'black';
      document.getElementById("aufmerksam").style["background-color"] = 'white';
    } else { aufmerksam.stop();
      document.getElementById("aufmerksam").style["color"] = 'white';
      document.getElementById("aufmerksam").style["background-color"] = 'transparent';
  } }

  function sAugenblau() {
    if (!augenblau.isPlaying()){
      augenblau.loop();
      document.getElementById("augenblau").style["color"] = 'black';
      document.getElementById("augenblau").style["background-color"] = 'white';
    } else { augenblau.stop();
      document.getElementById("augenblau").style["color"] = 'white';
      document.getElementById("augenblau").style["background-color"] = 'transparent';
  } }

  function sAugenbraun() {
    if (!augenbraun.isPlaying()){
      augenbraun.loop();
      document.getElementById("augenbraun").style["color"] = 'black';
      document.getElementById("augenbraun").style["background-color"] = 'white';
    } else { augenbraun.stop();
      document.getElementById("augenbraun").style["color"] = 'white';
      document.getElementById("augenbraun").style["background-color"] = 'transparent';
  } }

  function sAugengruen() {
    if (!augengruen.isPlaying()){
      augengruen.loop();
      document.getElementById("augengruen").style["color"] = 'black';
      document.getElementById("augengruen").style["background-color"] = 'white';
    } else { augengruen.stop();
      document.getElementById("augengruen").style["color"] = 'white';
      document.getElementById("augengruen").style["background-color"] = 'transparent';
  } }

  function sAugenhaselnussbraun() {
    if (!augenhaselnussbraun.isPlaying()){
      augenhaselnussbraun.loop();
      document.getElementById("augenhaselnussbraun").style["color"] = 'black';
      document.getElementById("augenhaselnussbraun").style["background-color"] = 'white';
    } else { augenhaselnussbraun.stop();
      document.getElementById("augenhaselnussbraun").style["color"] = 'white';
      document.getElementById("augenhaselnussbraun").style["background-color"] = 'transparent';
  } }

  function sAugenschwarz() {
    if (!augenschwarz.isPlaying()){
      augenschwarz.loop();
      document.getElementById("augenschwarz").style["color"] = 'black';
      document.getElementById("augenschwarz").style["background-color"] = 'white';
    } else { augenschwarz.stop();
      document.getElementById("augenschwarz").style["color"] = 'white';
      document.getElementById("augenschwarz").style["background-color"] = 'transparent';
  } }

  function sAusgemuster() {
    if (!ausgemuster.isPlaying()){
      ausgemuster.loop();
      document.getElementById("ausgemuster").style["color"] = 'black';
      document.getElementById("ausgemuster").style["background-color"] = 'white';
    } else { ausgemuster.stop();
      document.getElementById("ausgemuster").style["color"] = 'white';
      document.getElementById("ausgemuster").style["background-color"] = 'transparent';
  } }

  function sAustra() {
    if (!austra.isPlaying()){
      austra.loop();
      document.getElementById("austra").style["color"] = 'black';
      document.getElementById("austra").style["background-color"] = 'white';
    } else { austra.stop();
      document.getElementById("austra").style["color"] = 'white';
      document.getElementById("austra").style["background-color"] = 'transparent';
  } }

  function sAutofahrer() {
    if (!autofahrer.isPlaying()){
      autofahrer.loop();
      document.getElementById("autofahrer").style["color"] = 'black';
      document.getElementById("autofahrer").style["background-color"] = 'white';
    } else { autofahrer.stop();
      document.getElementById("autofahrer").style["color"] = 'white';
      document.getElementById("autofahrer").style["background-color"] = 'transparent';
  } }

  function sBahai() {
    if (!bahai.isPlaying()){
      bahai.loop();
      document.getElementById("bahai").style["color"] = 'black';
      document.getElementById("bahai").style["background-color"] = 'white';
    } else { bahai.stop();
      document.getElementById("bahai").style["color"] = 'white';
      document.getElementById("bahai").style["background-color"] = 'transparent';
  } }

  function sBauernkind() {
    if (!bauernkind.isPlaying()){
      bauernkind.loop();
      document.getElementById("bauernkind").style["color"] = 'black';
      document.getElementById("bauernkind").style["background-color"] = 'white';
    } else { bauernkind.stop();
      document.getElementById("bauernkind").style["color"] = 'white';
      document.getElementById("bauernkind").style["background-color"] = 'transparent';
  } }

  function sBayerisch() {
    if (!bayerisch.isPlaying()){
      bayerisch.loop();
      document.getElementById("bayerisch").style["color"] = 'black';
      document.getElementById("bayerisch").style["background-color"] = 'white';
    } else { bayerisch.stop();
      document.getElementById("bayerisch").style["color"] = 'white';
      document.getElementById("bayerisch").style["background-color"] = 'transparent';
  } }

  function sBeamtenkind() {
    if (!beamtenkind.isPlaying()){
      beamtenkind.loop();
      document.getElementById("beamtenkind").style["color"] = 'black';
      document.getElementById("beamtenkind").style["background-color"] = 'white';
    } else { beamtenkind.stop();
      document.getElementById("beamtenkind").style["color"] = 'white';
      document.getElementById("beamtenkind").style["background-color"] = 'transparent';
  } }

  function sBerlinerisch() {
    if (!berlinerisch.isPlaying()){
      berlinerisch.loop();
      document.getElementById("berlinerisch").style["color"] = 'black';
      document.getElementById("berlinerisch").style["background-color"] = 'white';
    } else { berlinerisch.stop();
      document.getElementById("berlinerisch").style["color"] = 'white';
      document.getElementById("berlinerisch").style["background-color"] = 'transparent';
  } }

  function sBesorgt() {
    if (!besorgt.isPlaying()){
      besorgt.loop();
      document.getElementById("besorgt").style["color"] = 'black';
      document.getElementById("besorgt").style["background-color"] = 'white';
    } else { besorgt.stop();
      document.getElementById("besorgt").style["color"] = 'white';
      document.getElementById("besorgt").style["background-color"] = 'transparent';
  } }

  function sBmw() {
    if (!bmw.isPlaying()){
      bmw.loop();
      document.getElementById("bmw").style["color"] = 'black';
      document.getElementById("bmw").style["background-color"] = 'white';
    } else { bmw.stop();
      document.getElementById("bmw").style["color"] = 'white';
      document.getElementById("bmw").style["background-color"] = 'transparent';
  } }

  function sBuddhist() {
    if (!buddhist.isPlaying()){
      buddhist.loop();
      document.getElementById("buddhist").style["color"] = 'black';
      document.getElementById("buddhist").style["background-color"] = 'white';
    } else { buddhist.stop();
      document.getElementById("buddhist").style["color"] = 'white';
      document.getElementById("buddhist").style["background-color"] = 'transparent';
  } }

  function sBuecherwurm() {
    if (!buecherwurm.isPlaying()){
      buecherwurm.loop();
      document.getElementById("buecherwurm").style["color"] = 'black';
      document.getElementById("buecherwurm").style["background-color"] = 'white';
    } else { buecherwurm.stop();
      document.getElementById("buecherwurm").style["color"] = 'white';
      document.getElementById("buecherwurm").style["background-color"] = 'transparent';
  } }

  function sBuero() {
    if (!buero.isPlaying()){
      buero.loop();
      document.getElementById("buero").style["color"] = 'black';
      document.getElementById("buero").style["background-color"] = 'white';
    } else { buero.stop();
      document.getElementById("buero").style["color"] = 'white';
      document.getElementById("buero").style["background-color"] = 'transparent';
  } }

  function sBundeswehr() {
    if (!bundeswehr.isPlaying()){
      bundeswehr.loop();
      document.getElementById("bundeswehr").style["color"] = 'black';
      document.getElementById("bundeswehr").style["background-color"] = 'white';
    } else { bundeswehr.stop();
      document.getElementById("bundeswehr").style["color"] = 'white';
      document.getElementById("bundeswehr").style["background-color"] = 'transparent';
  } }

  function sBus() {
    if (!bus.isPlaying()){
      bus.loop();
      document.getElementById("bus").style["color"] = 'black';
      document.getElementById("bus").style["background-color"] = 'white';
    } else { bus.stop();
      document.getElementById("bus").style["color"] = 'white';
      document.getElementById("bus").style["background-color"] = 'transparent';
  } }

  function sChrist() {
    if (!christ.isPlaying()){
      christ.loop();
      document.getElementById("christ").style["color"] = 'black';
      document.getElementById("christ").style["background-color"] = 'white';
    } else { christ.stop();
      document.getElementById("christ").style["color"] = 'white';
      document.getElementById("christ").style["background-color"] = 'transparent';
  } }

  function sChronischkrank() {
    if (!chronischkrank.isPlaying()){
      chronischkrank.loop();
      document.getElementById("chronischkrank").style["color"] = 'black';
      document.getElementById("chronischkrank").style["background-color"] = 'white';
    } else { chronischkrank.stop();
      document.getElementById("chronischkrank").style["color"] = 'white';
      document.getElementById("chronischkrank").style["background-color"] = 'transparent';
  } }

  function sClassic() {
    if (!classic.isPlaying()){
      classic.loop();
      document.getElementById("classic").style["color"] = 'black';
      document.getElementById("classic").style["background-color"] = 'white';
    } else { classic.stop();
      document.getElementById("classic").style["color"] = 'white';
      document.getElementById("classic").style["background-color"] = 'transparent';
  } }

  function sClub() {
    if (!club.isPlaying()){
      club.loop();
      document.getElementById("club").style["color"] = 'black';
      document.getElementById("club").style["background-color"] = 'white';
    } else { club.stop();
      document.getElementById("club").style["color"] = 'white';
      document.getElementById("club").style["background-color"] = 'transparent';
  } }

  function sDoerflich() {
    if (!doerflich.isPlaying()){
      doerflich.loop();
      document.getElementById("doerflich").style["color"] = 'black';
      document.getElementById("doerflich").style["background-color"] = 'white';
    } else { doerflich.stop();
      document.getElementById("doerflich").style["color"] = 'white';
      document.getElementById("doerflich").style["background-color"] = 'transparent';
  } }

  function sDrogenabhaengig() {
    if (!drogenabhaengig.isPlaying()){
      drogenabhaengig.loop();
      document.getElementById("drogenabhaengig").style["color"] = 'black';
      document.getElementById("drogenabhaengig").style["background-color"] = 'white';
    } else { drogenabhaengig.stop();
      document.getElementById("drogenabhaengig").style["color"] = 'white';
      document.getElementById("drogenabhaengig").style["background-color"] = 'transparent';
  } }

  function sEinzelkind() {
    if (!einzelkind.isPlaying()){
      einzelkind.loop();
      document.getElementById("einzelkind").style["color"] = 'black';
      document.getElementById("einzelkind").style["background-color"] = 'white';
    } else { einzelkind.stop();
      document.getElementById("einzelkind").style["color"] = 'white';
      document.getElementById("einzelkind").style["background-color"] = 'transparent';
  } }

  function sEnthusiastisch() {
    if (!enthusiastisch.isPlaying()){
      enthusiastisch.loop();
      document.getElementById("enthusiastisch").style["color"] = 'black';
      document.getElementById("enthusiastisch").style["background-color"] = 'white';
    } else { enthusiastisch.stop();
      document.getElementById("enthusiastisch").style["color"] = 'white';
      document.getElementById("enthusiastisch").style["background-color"] = 'transparent';
  } }

  function sEso() {
    if (!eso.isPlaying()){
      eso.loop();
      document.getElementById("eso").style["color"] = 'black';
      document.getElementById("eso").style["background-color"] = 'white';
    } else { eso.stop();
      document.getElementById("eso").style["color"] = 'white';
      document.getElementById("eso").style["background-color"] = 'transparent';
  } }

  function sEuro() {
    if (!euro.isPlaying()){
      euro.loop();
      document.getElementById("euro").style["color"] = 'black';
      document.getElementById("euro").style["background-color"] = 'white';
    } else { euro.stop();
      document.getElementById("euro").style["color"] = 'white';
      document.getElementById("euro").style["background-color"] = 'transparent';
  } }

  function sExperimental() {
    if (!experimental.isPlaying()){
      experimental.loop();
      document.getElementById("experimental").style["color"] = 'black';
      document.getElementById("experimental").style["background-color"] = 'white';
    } else { experimental.stop();
      document.getElementById("experimental").style["color"] = 'white';
      document.getElementById("experimental").style["background-color"] = 'transparent';
  } }

  function sFacebook() {
    if (!facebook.isPlaying()){
      facebook.loop();
      document.getElementById("facebook").style["color"] = 'black';
      document.getElementById("facebook").style["background-color"] = 'white';
    } else { facebook.stop();
      document.getElementById("facebook").style["color"] = 'white';
      document.getElementById("facebook").style["background-color"] = 'transparent';
  } }

  function sFleischfresser() {
    if (!fleischfresser.isPlaying()){
      fleischfresser.loop();
      document.getElementById("fleischfresser").style["color"] = 'black';
      document.getElementById("fleischfresser").style["background-color"] = 'white';
    } else { fleischfresser.stop();
      document.getElementById("fleischfresser").style["color"] = 'white';
      document.getElementById("fleischfresser").style["background-color"] = 'transparent';
  } }

  function sFrau() {
    if (!frau.isPlaying()){
      frau.loop();
      document.getElementById("frau").style["color"] = 'black';
      document.getElementById("frau").style["background-color"] = 'white';
    } else {
      frau.stop();
      document.getElementById("frau").style["color"] = 'white';
      document.getElementById("frau").style["background-color"] = 'transparent';
    } }

    function sFreiberufler() {
      if (!freiberufler.isPlaying()){
        freiberufler.loop();
        document.getElementById("freiberufler").style["color"] = 'black';
        document.getElementById("freiberufler").style["background-color"] = 'white';
      } else {
        freiberufler.stop();
        document.getElementById("freiberufler").style["color"] = 'white';
        document.getElementById("freiberufler").style["background-color"] = 'transparent';
      } }

  function sFruehaufsteher() {
    if (!fruehaufsteher.isPlaying()){
      fruehaufsteher.loop();
      document.getElementById("fruehaufsteher").style["color"] = 'black';
      document.getElementById("fruehaufsteher").style["background-color"] = 'white';
    } else {
      fruehaufsteher.stop();
      document.getElementById("fruehaufsteher").style["color"] = 'white';
      document.getElementById("fruehaufsteher").style["background-color"] = 'transparent';
    } }

  function sFussgaenger() {
    if (!fussgaenger.isPlaying()){
      fussgaenger.loop();
      document.getElementById("fussgaenger").style["color"] = 'black';
      document.getElementById("fussgaenger").style["background-color"] = 'white';
    } else { fussgaenger.stop();
      document.getElementById("fussgaenger").style["color"] = 'white';
      document.getElementById("fussgaenger").style["background-color"] = 'transparent';
  } }

  function sGamer() {
    if (!gamer.isPlaying()){
      gamer.loop();
      document.getElementById("gamer").style["color"] = 'black';
      document.getElementById("gamer").style["background-color"] = 'white';
    } else { gamer.stop();
      document.getElementById("gamer").style["color"] = 'white';
      document.getElementById("gamer").style["background-color"] = 'transparent';
  } }

  function sGang() {
    if (!gang.isPlaying()){
      gang.loop();
      document.getElementById("gang").style["color"] = 'black';
      document.getElementById("gang").style["background-color"] = 'white';
    } else { gang.stop();
      document.getElementById("gang").style["color"] = 'white';
      document.getElementById("gang").style["background-color"] = 'transparent';
  } }

  function sGeistigbehindert() {
    if (!geistigbehindert.isPlaying()){
      geistigbehindert.loop();
      document.getElementById("geistigbehindert").style["color"] = 'black';
      document.getElementById("geistigbehindert").style["background-color"] = 'white';
    } else { geistigbehindert.stop();
      document.getElementById("geistigbehindert").style["color"] = 'white';
      document.getElementById("geistigbehindert").style["background-color"] = 'transparent';
  } }

  function sGelb() {
    if (!gelb.isPlaying()){
      gelb.loop();
      document.getElementById("gelb").style["color"] = 'black';
      document.getElementById("gelb").style["background-color"] = 'white';
    } else { gelb.stop();
      document.getElementById("gelb").style["color"] = 'white';
      document.getElementById("gelb").style["background-color"] = 'transparent';
  } }

  function sGeschaeftsfuehrer() {
    if (!geschaeftsfuehrer.isPlaying()){
      geschaeftsfuehrer.loop();
      document.getElementById("geschaeftsfuehrer").style["color"] = 'black';
      document.getElementById("geschaeftsfuehrer").style["background-color"] = 'white';
    } else { geschaeftsfuehrer.stop();
      document.getElementById("geschaeftsfuehrer").style["color"] = 'white';
      document.getElementById("geschaeftsfuehrer").style["background-color"] = 'transparent';
  } }

  function sGeschieden() {
    if (!geschieden.isPlaying()){
      geschieden.loop();
      document.getElementById("geschieden").style["color"] = 'black';
      document.getElementById("geschieden").style["background-color"] = 'white';
    } else { geschieden.stop();
      document.getElementById("geschieden").style["color"] = 'white';
      document.getElementById("geschieden").style["background-color"] = 'transparent';
  } }

  function sGeschwisterkind() {
    if (!geschwisterkind.isPlaying()){
      geschwisterkind.loop();
      document.getElementById("geschwisterkind").style["color"] = 'black';
      document.getElementById("geschwisterkind").style["background-color"] = 'white';
    } else { geschwisterkind.stop();
      document.getElementById("geschwisterkind").style["color"] = 'white';
      document.getElementById("geschwisterkind").style["background-color"] = 'transparent';
  } }

  function sGruen() {
    if (!gruen.isPlaying()){
      gruen.loop();
      document.getElementById("gruen").style["color"] = 'black';
      document.getElementById("gruen").style["background-color"] = 'white';
    } else { gruen.stop();
      document.getElementById("gruen").style["color"] = 'white';
      document.getElementById("gruen").style["background-color"] = 'transparent';
  } }

  function sHessisch() {
    if (!hessisch.isPlaying()){
      hessisch.loop();
      document.getElementById("hessisch").style["color"] = 'black';
      document.getElementById("hessisch").style["background-color"] = 'white';
    } else { hessisch.stop();
      document.getElementById("hessisch").style["color"] = 'white';
      document.getElementById("hessisch").style["background-color"] = 'transparent';
  } }

  function sHetero() {
    if (!hetero.isPlaying()){
      hetero.loop();
      document.getElementById("hetero").style["color"] = 'black';
      document.getElementById("hetero").style["background-color"] = 'white';
    } else { hetero.stop();
      document.getElementById("hetero").style["color"] = 'white';
      document.getElementById("hetero").style["background-color"] = 'transparent';
  } }

  function sHindu() {
    if (!hindu.isPlaying()){
      hindu.loop();
      document.getElementById("hindu").style["color"] = 'black';
      document.getElementById("hindu").style["background-color"] = 'white';
    } else { hindu.stop();
      document.getElementById("hindu").style["color"] = 'white';
      document.getElementById("hindu").style["background-color"] = 'transparent';
  } }

  function sHomo() {
    if (!homo.isPlaying()){
      homo.loop();
      document.getElementById("homo").style["color"] = 'black';
      document.getElementById("homo").style["background-color"] = 'white';
    } else { homo.stop();
      document.getElementById("homo").style["color"] = 'white';
      document.getElementById("homo").style["background-color"] = 'transparent';
  } }

  function sInstagram() {
    if (!instagram.isPlaying()){
      instagram.loop();
      document.getElementById("instagram").style["color"] = 'black';
      document.getElementById("instagram").style["background-color"] = 'white';
    } else { instagram.stop();
      document.getElementById("instagram").style["color"] = 'white';
      document.getElementById("instagram").style["background-color"] = 'transparent';
  } }

  function sJazz() {
    if (!jazz.isPlaying()){
      jazz.loop();
      document.getElementById("jazz").style["color"] = 'black';
      document.getElementById("jazz").style["background-color"] = 'white';
    } else { jazz.stop();
      document.getElementById("jazz").style["color"] = 'white';
      document.getElementById("jazz").style["background-color"] = 'transparent';
  } }

  function sJude() {
    if (!jude.isPlaying()){
      jude.loop();
      document.getElementById("jude").style["color"] = 'black';
      document.getElementById("jude").style["background-color"] = 'white';
    } else { jude.stop();
      document.getElementById("jude").style["color"] = 'white';
      document.getElementById("jude").style["background-color"] = 'transparent';
  } }

  function sJung() {
    if (!jung.isPlaying()){
      jung.loop();
      document.getElementById("jung").style["color"] = 'black';
      document.getElementById("jung").style["background-color"] = 'white';
    } else { jung.stop();
      document.getElementById("jung").style["color"] = 'white';
      document.getElementById("jung").style["background-color"] = 'transparent';
  } }

  function sJungfrau() {
    if (!jungfrau.isPlaying()){
      jungfrau.loop();
      document.getElementById("jungfrau").style["color"] = 'black';
      document.getElementById("jungfrau").style["background-color"] = 'white';
    } else { jungfrau.stop();
      document.getElementById("jungfrau").style["color"] = 'white';
      document.getElementById("jungfrau").style["background-color"] = 'transparent';
  } }

  function sKasse() {
    if (!kasse.isPlaying()){
      kasse.loop();
      document.getElementById("kasse").style["color"] = 'black';
      document.getElementById("kasse").style["background-color"] = 'white';
    } else { kasse.stop();
      document.getElementById("kasse").style["color"] = 'white';
      document.getElementById("kasse").style["background-color"] = 'transparent';
  } }

  function sKoelsch() {
    if (!koelsch.isPlaying()){
      koelsch.loop();
      document.getElementById("koelsch").style["color"] = 'black';
      document.getElementById("koelsch").style["background-color"] = 'white';
    } else { koelsch.stop();
      document.getElementById("koelsch").style["color"] = 'white';
      document.getElementById("koelsch").style["background-color"] = 'transparent';
  } }

  function sKoerperlichbehindert() {
    if (!koerperlichbehindert.isPlaying()){
      koerperlichbehindert.loop();
      document.getElementById("koerperlichbehindert").style["color"] = 'black';
      document.getElementById("koerperlichbehindert").style["background-color"] = 'white';
    } else { koerperlichbehindert.stop();
      document.getElementById("koerperlichbehindert").style["color"] = 'white';
      document.getElementById("koerperlichbehindert").style["background-color"] = 'transparent';
  } }

  function sKrank() {
    if (!krank.isPlaying()){
      krank.loop();
      document.getElementById("krank").style["color"] = 'black';
      document.getElementById("krank").style["background-color"] = 'white';
    } else { krank.stop();
      document.getElementById("krank").style["color"] = 'white';
      document.getElementById("krank").style["background-color"] = 'transparent';
  } }

  function sKreativ() {
    if (!kreativ.isPlaying()){
      kreativ.loop();
      document.getElementById("kreativ").style["color"] = 'black';
      document.getElementById("kreativ").style["background-color"] = 'white';
    } else { kreativ.stop();
      document.getElementById("kreativ").style["color"] = 'white';
      document.getElementById("kreativ").style["background-color"] = 'transparent';
  } }

  function sKrebs() {
    if (!krebs.isPlaying()){
      krebs.loop();
      document.getElementById("krebs").style["color"] = 'black';
      document.getElementById("krebs").style["background-color"] = 'white';
    } else { krebs.stop();
      document.getElementById("krebs").style["color"] = 'white';
      document.getElementById("krebs").style["background-color"] = 'transparent';
  } }

  function sKurzehaare() {
    if (!kurzehaare.isPlaying()){
      kurzehaare.loop();
      document.getElementById("kurzehaare").style["color"] = 'black';
      document.getElementById("kurzehaare").style["background-color"] = 'white';
    } else { kurzehaare.stop();
      document.getElementById("kurzehaare").style["color"] = 'white';
      document.getElementById("kurzehaare").style["background-color"] = 'transparent';
  } }

  function sLangehaare() {
    if (!langehaare.isPlaying()){
      langehaare.loop();
      document.getElementById("langehaare").style["color"] = 'black';
      document.getElementById("langehaare").style["background-color"] = 'white';
    } else { langehaare.stop();
      document.getElementById("langehaare").style["color"] = 'white';
      document.getElementById("langehaare").style["background-color"] = 'transparent';
  } }

  function sLangschlaefer() {
    if (!langschlaefer.isPlaying()){
      langschlaefer.loop();
      document.getElementById("langschlaefer").style["color"] = 'black';
      document.getElementById("langschlaefer").style["background-color"] = 'white';
    } else { langschlaefer.stop();
      document.getElementById("langschlaefer").style["color"] = 'white';
      document.getElementById("langschlaefer").style["background-color"] = 'transparent';
  } }

  function sLatin() {
    if (!latin.isPlaying()){
      latin.loop();
      document.getElementById("latin").style["color"] = 'black';
      document.getElementById("latin").style["background-color"] = 'white';
    } else { latin.stop();
      document.getElementById("latin").style["color"] = 'white';
      document.getElementById("latin").style["background-color"] = 'transparent';
  } }

  function sLiberal() {
    if (!liberal.isPlaying()){
      liberal.loop();
      document.getElementById("liberal").style["color"] = 'black';
      document.getElementById("liberal").style["background-color"] = 'white';
    } else { liberal.stop();
      document.getElementById("liberal").style["color"] = 'white';
      document.getElementById("liberal").style["background-color"] = 'transparent';
  } }

  function sLinux() {
    if (!linux.isPlaying()){
      linux.loop();
      document.getElementById("linux").style["color"] = 'black';
      document.getElementById("linux").style["background-color"] = 'white';
    } else { linux.stop();
      document.getElementById("linux").style["color"] = 'white';
      document.getElementById("linux").style["background-color"] = 'transparent';
  } }

  function sLoewe() {
    if (!loewe.isPlaying()){
      loewe.loop();
      document.getElementById("loewe").style["color"] = 'black';
      document.getElementById("loewe").style["background-color"] = 'white';
    } else { loewe.stop();
      document.getElementById("loewe").style["color"] = 'white';
      document.getElementById("loewe").style["background-color"] = 'transparent';
  } }

  function sMac() {
    if (!mac.isPlaying()){
      mac.loop();
      document.getElementById("mac").style["color"] = 'black';
      document.getElementById("mac").style["background-color"] = 'white';
    } else { mac.stop();
      document.getElementById("mac").style["color"] = 'white';
      document.getElementById("mac").style["background-color"] = 'transparent';
  } }

  function sMann() {
    if (!mann.isPlaying()){
      mann.loop();
      document.getElementById("mann").style["color"] = 'black';
      document.getElementById("mann").style["background-color"] = 'white';
    } else { mann.stop();
      document.getElementById("mann").style["color"] = 'white';
      document.getElementById("mann").style["background-color"] = 'transparent';
    } }

  function sMeister() {
    if (!meister.isPlaying()){
      meister.loop();
      document.getElementById("meister").style["color"] = 'black';
      document.getElementById("meister").style["background-color"] = 'white';
    } else { meister.stop();
      document.getElementById("meister").style["color"] = 'white';
      document.getElementById("meister").style["background-color"] = 'transparent';
    } }

  function sMercedes() {
    if (!mercedes.isPlaying()){
      mercedes.loop();
      document.getElementById("mercedes").style["color"] = 'black';
      document.getElementById("mercedes").style["background-color"] = 'white';
    } else { mercedes.stop();
      document.getElementById("mercedes").style["color"] = 'white';
      document.getElementById("mercedes").style["background-color"] = 'transparent';
    } }

  function sMieter() {
    if (!mieter.isPlaying()){
      mieter.loop();
      document.getElementById("mieter").style["color"] = 'black';
      document.getElementById("mieter").style["background-color"] = 'white';
    } else { mieter.stop();
      document.getElementById("mieter").style["color"] = 'white';
      document.getElementById("mieter").style["background-color"] = 'transparent';
    } }

  function sMitte() {
    if (!mitte.isPlaying()){
      mitte.loop();
      document.getElementById("mitte").style["color"] = 'black';
      document.getElementById("mitte").style["background-color"] = 'white';
    } else { mitte.stop();
      document.getElementById("mitte").style["color"] = 'white';
      document.getElementById("mitte").style["background-color"] = 'transparent';
  } }

  function sMittleresAlter() {
    if (!mittleresAlter.isPlaying()){
      mittleresAlter.loop();
      document.getElementById("mittleresAlter").style["color"] = 'black';
      document.getElementById("mittleresAlter").style["background-color"] = 'white';
    } else { mittleresAlter.stop();
      document.getElementById("mittleresAlter").style["color"] = 'white';
      document.getElementById("mittleresAlter").style["background-color"] = 'transparent';
  } }

  function sModebewusst() {
    if (!modebewusst.isPlaying()){
      modebewusst.loop();
      document.getElementById("modebewusst").style["color"] = 'black';
      document.getElementById("modebewusst").style["background-color"] = 'white';
    } else { modebewusst.stop();
      document.getElementById("modebewusst").style["color"] = 'white';
      document.getElementById("modebewusst").style["background-color"] = 'transparent';
  } }

  function sMuell() {
    if (!muell.isPlaying()){
      muell.loop();
      document.getElementById("muell").style["color"] = 'black';
      document.getElementById("muell").style["background-color"] = 'white';
    } else { muell.stop();
      document.getElementById("muell").style["color"] = 'white';
      document.getElementById("muell").style["background-color"] = 'transparent';
  } }

  function sMuslim() {
    if (!muslim.isPlaying()){
      muslim.loop();
      document.getElementById("muslim").style["color"] = 'black';
      document.getElementById("muslim").style["background-color"] = 'white';
    } else { muslim.stop();
      document.getElementById("muslim").style["color"] = 'white';
      document.getElementById("muslim").style["background-color"] = 'transparent';
  } }

  function sNational() {
    if (!national.isPlaying()){
      national.loop();
      document.getElementById("national").style["color"] = 'black';
      document.getElementById("national").style["background-color"] = 'white';
    } else { national.stop();
      document.getElementById("national").style["color"] = 'white';
      document.getElementById("national").style["background-color"] = 'transparent';
  } }

  function sNichtversichert() {
    if (!nichtversichert.isPlaying()){
      nichtversichert.loop();
      document.getElementById("nichtversichert").style["color"] = 'black';
      document.getElementById("nichtversichert").style["background-color"] = 'white';
    } else { nichtversichert.stop();
      document.getElementById("nichtversichert").style["color"] = 'white';
      document.getElementById("nichtversichert").style["background-color"] = 'transparent';
  } }

  function sNord() {
    if (!nord.isPlaying()){
      nord.loop();
      document.getElementById("nord").style["color"] = 'black';
      document.getElementById("nord").style["background-color"] = 'white';
    } else { nord.stop();
      document.getElementById("nord").style["color"] = 'white';
      document.getElementById("nord").style["background-color"] = 'transparent';
  } }

  function sOber() {
    if (!ober.isPlaying()){
      ober.loop();
      document.getElementById("ober").style["color"] = 'black';
      document.getElementById("ober").style["background-color"] = 'white';
    } else { ober.stop();
      document.getElementById("ober").style["color"] = 'white';
      document.getElementById("ober").style["background-color"] = 'transparent';
  } }

  function sOpel() {
    if (!opel.isPlaying()){
      opel.loop();
      document.getElementById("opel").style["color"] = 'black';
      document.getElementById("opel").style["background-color"] = 'white';
    } else { opel.stop();
      document.getElementById("opel").style["color"] = 'white';
      document.getElementById("opel").style["background-color"] = 'transparent';
  } }

  function sOstdeutsch() {
    if (!ostdeutsch.isPlaying()){
      ostdeutsch.loop();
      document.getElementById("ostdeutsch").style["color"] = 'black';
      document.getElementById("ostdeutsch").style["background-color"] = 'white';
    } else { ostdeutsch.stop();
      document.getElementById("ostdeutsch").style["color"] = 'white';
      document.getElementById("ostdeutsch").style["background-color"] = 'transparent';
  } }

  function sPendler() {
    if (!pendler.isPlaying()){
      pendler.loop();
      document.getElementById("pendler").style["color"] = 'black';
      document.getElementById("pendler").style["background-color"] = 'white';
    } else { pendler.stop();
      document.getElementById("pendler").style["color"] = 'white';
      document.getElementById("pendler").style["background-color"] = 'transparent';
  } }

  function sPolitiker() {
    if (!politiker.isPlaying()){
      politiker.loop();
      document.getElementById("politiker").style["color"] = 'black';
      document.getElementById("politiker").style["background-color"] = 'white';
    } else { politiker.stop();
      document.getElementById("politiker").style["color"] = 'white';
      document.getElementById("politiker").style["background-color"] = 'transparent';
  } }

  function sPop() {
    if (!pop.isPlaying()){
      pop.loop();
      document.getElementById("pop").style["color"] = 'black';
      document.getElementById("pop").style["background-color"] = 'white';
    } else { pop.stop();
      document.getElementById("pop").style["color"] = 'white';
      document.getElementById("pop").style["background-color"] = 'transparent';
  } }

  function sPrivat() {
    if (!privat.isPlaying()){
      privat.loop();
      document.getElementById("privat").style["color"] = 'black';
      document.getElementById("privat").style["background-color"] = 'white';
    } else { privat.stop();
      document.getElementById("privat").style["color"] = 'white';
      document.getElementById("privat").style["background-color"] = 'transparent';
  } }

  function sPromoviert() {
    if (!promoviert.isPlaying()){
      promoviert.loop();
      document.getElementById("promoviert").style["color"] = 'black';
      document.getElementById("promoviert").style["background-color"] = 'white';
    } else { promoviert.stop();
      document.getElementById("promoviert").style["color"] = 'white';
      document.getElementById("promoviert").style["background-color"] = 'transparent';
  } }

  function sRadfahrer() {
    if (!radfahrer.isPlaying()){
      radfahrer.loop();
      document.getElementById("radfahrer").style["color"] = 'black';
      document.getElementById("radfahrer").style["background-color"] = 'white';
    } else { radfahrer.stop();
      document.getElementById("radfahrer").style["color"] = 'white';
      document.getElementById("radfahrer").style["background-color"] = 'transparent';
  } }

  function sRaucher() {
    if (!raucher.isPlaying()){
      raucher.loop();
      document.getElementById("raucher").style["color"] = 'black';
      document.getElementById("raucher").style["background-color"] = 'white';
    } else { raucher.stop();
      document.getElementById("raucher").style["color"] = 'white';
      document.getElementById("raucher").style["background-color"] = 'transparent';
  } }

  function sRave() {
    if (!rave.isPlaying()){
      rave.loop();
      document.getElementById("rave").style["color"] = 'black';
      document.getElementById("rave").style["background-color"] = 'white';
    } else { rave.stop();
      document.getElementById("rave").style["color"] = 'white';
      document.getElementById("rave").style["background-color"] = 'transparent';
  } }

  function sRock() {
    if (!rock.isPlaying()){
      rock.loop();
      document.getElementById("rock").style["color"] = 'black';
      document.getElementById("rock").style["background-color"] = 'white';
    } else { rock.stop();
      document.getElementById("rock").style["color"] = 'white';
      document.getElementById("rock").style["background-color"] = 'transparent';
  } }

  function sRot() {
    if (!rot.isPlaying()){
      rot.loop();
      document.getElementById("rot").style["color"] = 'black';
      document.getElementById("rot").style["background-color"] = 'white';
    } else { rot.stop();
      document.getElementById("rot").style["color"] = 'white';
      document.getElementById("rot").style["background-color"] = 'transparent';
  } }

  function sRtl() {
    if (!rtl.isPlaying()){
      rtl.loop();
      document.getElementById("rtl").style["color"] = 'black';
      document.getElementById("rtl").style["background-color"] = 'white';
    } else { rtl.stop();
      document.getElementById("rtl").style["color"] = 'white';
      document.getElementById("rtl").style["background-color"] = 'transparent';
  } }

  function sSaechsisch() {
    if (!saechsisch.isPlaying()){
      saechsisch.loop();
      document.getElementById("saechsisch").style["color"] = 'black';
      document.getElementById("saechsisch").style["background-color"] = 'white';
    } else { saechsisch.stop();
      document.getElementById("saechsisch").style["color"] = 'white';
      document.getElementById("saechsisch").style["background-color"] = 'transparent';
  } }

  function sScheindungskind() {
    if (!scheidungskind.isPlaying()){
      scheidungskind.loop();
      document.getElementById("scheidungskind").style["color"] = 'black';
      document.getElementById("scheidungskind").style["background-color"] = 'white';
    } else { scheidungskind.stop();
      document.getElementById("scheidungskind").style["color"] = 'white';
      document.getElementById("scheidungskind").style["background-color"] = 'transparent';
  } }

  function sSchuetze() {
    if (!schuetze.isPlaying()){
      schuetze.loop();
      document.getElementById("schuetze").style["color"] = 'black';
      document.getElementById("schuetze").style["background-color"] = 'white';
    } else { schuetze.stop();
      document.getElementById("schuetze").style["color"] = 'white';
      document.getElementById("schuetze").style["background-color"] = 'transparent';
  } }

  function sSchule1() {
    if (!schule1.isPlaying()){
      schule1.loop();
      document.getElementById("schule1").style["color"] = 'black';
      document.getElementById("schule1").style["background-color"] = 'white';
    } else { schule1.stop();
      document.getElementById("schule1").style["color"] = 'white';
      document.getElementById("schule1").style["background-color"] = 'transparent';
  } }

  function sSchule2() {
    if (!schule2.isPlaying()){
      schule2.loop();
      document.getElementById("schule2").style["color"] = 'black';
      document.getElementById("schule2").style["background-color"] = 'white';
    } else { schule2.stop();
      document.getElementById("schule2").style["color"] = 'white';
      document.getElementById("schule2").style["background-color"] = 'transparent';
  } }

  function sSchule3() {
    if (!schule3.isPlaying()){
      schule3.loop();
      document.getElementById("schule3").style["color"] = 'black';
      document.getElementById("schule3").style["background-color"] = 'white';
    } else { schule3.stop();
      document.getElementById("schule3").style["color"] = 'white';
      document.getElementById("schule3").style["background-color"] = 'transparent';
  } }

  function sSchule4() {
    if (!schule4.isPlaying()){
      schule4.loop();
      document.getElementById("schule4").style["color"] = 'black';
      document.getElementById("schule4").style["background-color"] = 'white';
    } else { sSchule4.stop();
      document.getElementById("schule4").style["color"] = 'white';
      document.getElementById("schule4").style["background-color"] = 'transparent';
  } }

  function sSchwaebisch() {
    if (!schwaebisch.isPlaying()){
      schwaebisch.loop();
      document.getElementById("schwaebisch").style["color"] = 'black';
      document.getElementById("schwaebisch").style["background-color"] = 'white';
    } else { schwaebisch.stop();
      document.getElementById("schwaebisch").style["color"] = 'white';
      document.getElementById("schwaebisch").style["background-color"] = 'transparent';
  } }

  function sSchwanger() {
    if (!schwanger.isPlaying()){
      schwanger.loop();
      document.getElementById("schwanger").style["color"] = 'black';
      document.getElementById("schwanger").style["background-color"] = 'white';
    } else { schwanger.stop();
      document.getElementById("schwanger").style["color"] = 'white';
      document.getElementById("schwanger").style["background-color"] = 'transparent';
  } }

  function sSchwarz() {
    if (!schwarz.isPlaying()){
      schwarz.loop();
      document.getElementById("schwarz").style["color"] = 'black';
      document.getElementById("schwarz").style["background-color"] = 'white';
    } else { schwarz.stop();
      document.getElementById("schwarz").style["color"] = 'white';
      document.getElementById("schwarz").style["background-color"] = 'transparent';
  } }

  function sSerioes() {
    if (!serioes.isPlaying()){
      serioes.loop();
      document.getElementById("serioes").style["color"] = 'black';
      document.getElementById("serioes").style["background-color"] = 'white';
    } else { serioes.stop();
      document.getElementById("serioes").style["color"] = 'white';
      document.getElementById("serioes").style["background-color"] = 'transparent';
  } }

  function sSkorpion() {
    if (!skorpion.isPlaying()){
      skorpion.loop();
      document.getElementById("skorpion").style["color"] = 'black';
      document.getElementById("skorpion").style["background-color"] = 'white';
    } else { skorpion.stop();
      document.getElementById("skorpion").style["color"] = 'white';
      document.getElementById("skorpion").style["background-color"] = 'transparent';
  } }

  function sSport() {
    if (!sport.isPlaying()){
      sport.loop();
      document.getElementById("sport").style["color"] = 'black';
      document.getElementById("sport").style["background-color"] = 'white';
    } else { sport.stop();
      document.getElementById("sport").style["color"] = 'white';
      document.getElementById("sport").style["background-color"] = 'transparent';
  } }

  function sSportverein() {
    if (!sportverein.isPlaying()){
      sportverein.loop();
      document.getElementById("sportverein").style["color"] = 'black';
      document.getElementById("sportverein").style["background-color"] = 'white';
    } else { sportverein.stop();
      document.getElementById("sportverein").style["color"] = 'white';
      document.getElementById("sportverein").style["background-color"] = 'transparent';
  } }

  function sStaedtisch() {
    if (!staedtisch.isPlaying()){
      staedtisch.loop();
      document.getElementById("staedtisch").style["color"] = 'black';
      document.getElementById("staedtisch").style["background-color"] = 'white';
    } else { staedtisch.stop();
      document.getElementById("staedtisch").style["color"] = 'white';
      document.getElementById("staedtisch").style["background-color"] = 'transparent';
  } }

  function sStar() {
    if (!star.isPlaying()){
      star.loop();
      document.getElementById("star").style["color"] = 'black';
      document.getElementById("star").style["background-color"] = 'white';
    } else { star.stop();
      document.getElementById("star").style["color"] = 'white';
      document.getElementById("star").style["background-color"] = 'transparent';
  } }

  function sSteinbock() {
    if (!steinbock.isPlaying()){
      steinbock.loop();
      document.getElementById("steinbock").style["color"] = 'black';
      document.getElementById("steinbock").style["background-color"] = 'white';
    } else { steinbock.stop();
      document.getElementById("steinbock").style["color"] = 'white';
      document.getElementById("steinbock").style["background-color"] = 'transparent';
  } }

  function sSteuer() {
    if (!steuer.isPlaying()){
      steuer.loop();
      document.getElementById("steuer").style["color"] = 'black';
      document.getElementById("steuer").style["background-color"] = 'white';
    } else { steuer.stop();
      document.getElementById("steuer").style["color"] = 'white';
      document.getElementById("steuer").style["background-color"] = 'transparent';
  } }

  function sStier() {
    if (!stier.isPlaying()){
      stier.loop();
      document.getElementById("stier").style["color"] = 'black';
      document.getElementById("stier").style["background-color"] = 'white';
    } else { stier.stop();
      document.getElementById("stier").style["color"] = 'white';
      document.getElementById("stier").style["background-color"] = 'transparent';
  } }

  function sStraftaeter() {
    if (!straftaeter.isPlaying()){
      straftaeter.loop();
      document.getElementById("straftaeter").style["color"] = 'black';
      document.getElementById("straftaeter").style["background-color"] = 'white';
    } else { straftaeter.stop();
      document.getElementById("straftaeter").style["color"] = 'white';
      document.getElementById("straftaeter").style["background-color"] = 'transparent';
  } }

  function sSued() {
    if (!sued.isPlaying()){
      sued.loop();
      document.getElementById("sued").style["color"] = 'black';
      document.getElementById("sued").style["background-color"] = 'white';
    } else { sued.stop();
      document.getElementById("sued").style["color"] = 'white';
      document.getElementById("sued").style["background-color"] = 'transparent';
  } }

  function sTattoo() {
    if (!tattoo.isPlaying()){
      tattoo.loop();
      document.getElementById("tattoo").style["color"] = 'black';
      document.getElementById("tattoo").style["background-color"] = 'white';
    } else { tattoo.stop();
      document.getElementById("tattoo").style["color"] = 'white';
      document.getElementById("tattoo").style["background-color"] = 'transparent';
  } }

  function sTierlieb() {
    if (!tierlieb.isPlaying()){
      tierlieb.loop();
      document.getElementById("tierlieb").style["color"] = 'black';
      document.getElementById("tierlieb").style["background-color"] = 'white';
    } else { tierlieb.stop();
      document.getElementById("tierlieb").style["color"] = 'white';
      document.getElementById("tierlieb").style["background-color"] = 'transparent';
  } }

  function sTrainiert() {
    if (!trainiert.isPlaying()){
      trainiert.loop();
      document.getElementById("trainiert").style["color"] = 'black';
      document.getElementById("trainiert").style["background-color"] = 'white';
    } else { trainiert.stop();
      document.getElementById("trainiert").style["color"] = 'white';
      document.getElementById("trainiert").style["background-color"] = 'transparent';
  } }

  function sTrans() {
    if (!trans.isPlaying()){
      trans.loop();

      document.getElementById("trans").style["color"] = 'black';
      document.getElementById("trans").style["background-color"] = 'white';
    } else { trans.stop();
      document.getElementById("trans").style["color"] = 'white';
      document.getElementById("trans").style["background-color"] = 'transparent';
    } }

  function sTwitter() {
    if (!twitter.isPlaying()){
      twitter.loop();
      document.getElementById("twitter").style["color"] = 'black';
      document.getElementById("twitter").style["background-color"] = 'white';
    } else { twitter.stop();
      document.getElementById("twitter").style["color"] = 'white';
      document.getElementById("twitter").style["background-color"] = 'transparent';
  } }

  function sUebergewicht() {
    if (!uebergewicht.isPlaying()){
      uebergewicht.loop();
      document.getElementById("uebergewicht").style["color"] = 'black';
      document.getElementById("uebergewicht").style["background-color"] = 'white';
    } else { uebergewicht.stop();
      document.getElementById("uebergewicht").style["color"] = 'white';
      document.getElementById("uebergewicht").style["background-color"] = 'transparent';
  } }

  function sUnten() {
    if (!unten.isPlaying()){
      unten.loop();
      document.getElementById("unten").style["color"] = 'black';
      document.getElementById("unten").style["background-color"] = 'white';
    } else { unten.stop();
      document.getElementById("unten").style["color"] = 'white';
      document.getElementById("unten").style["background-color"] = 'transparent';
  } }

  function sUntergewicht() {
    if (!untergewicht.isPlaying()){
      untergewicht.loop();
      document.getElementById("untergewicht").style["color"] = 'black';
      document.getElementById("untergewicht").style["background-color"] = 'white';
    } else { untergewicht.stop();
      document.getElementById("untergewicht").style["color"] = 'white';
      document.getElementById("untergewicht").style["background-color"] = 'transparent';
  } }

  function sVeganer() {
    if (!veganer.isPlaying()){
      veganer.loop();
      document.getElementById("veganer").style["color"] = 'black';
      document.getElementById("veganer").style["background-color"] = 'white';
    } else { veganer.stop();
      document.getElementById("veganer").style["color"] = 'white';
      document.getElementById("veganer").style["background-color"] = 'transparent';
  } }

  function sVegetarisch() {
    if (!vegetarisch.isPlaying()){
      vegetarisch.loop();
      document.getElementById("vegetarisch").style["color"] = 'black';
      document.getElementById("vegetarisch").style["background-color"] = 'white';
    } else { vegetarisch.stop();
      document.getElementById("vegetarisch").style["color"] = 'white';
      document.getElementById("vegetarisch").style["background-color"] = 'transparent';
  } }

  function sVerbindung() {
    if (!verbindung.isPlaying()){
      verbindung.loop();
      document.getElementById("verbindung").style["color"] = 'black';
      document.getElementById("verbindung").style["background-color"] = 'white';
    } else { verbindung.stop();
      document.getElementById("verbindung").style["color"] = 'white';
      document.getElementById("verbindung").style["background-color"] = 'transparent';
  } }

  function sVerheiratet() {
    if (!verheiratet.isPlaying()){
      verheiratet.loop();
      document.getElementById("verheiratet").style["color"] = 'black';
      document.getElementById("verheiratet").style["background-color"] = 'white';
    } else { verheiratet.stop();
      document.getElementById("verheiratet").style["color"] = 'white';
      document.getElementById("verheiratet").style["background-color"] = 'transparent';
  } }

  function sVermieter() {
    if (!vermieter.isPlaying()){
      vermieter.loop();
      document.getElementById("vermieter").style["color"] = 'black';
      document.getElementById("vermieter").style["background-color"] = 'white';
    } else { vermieter.stop();
      document.getElementById("vermieter").style["color"] = 'white';
      document.getElementById("vermieter").style["background-color"] = 'transparent';
  } }

  function sVerwitwet() {
    if (!verwitwet.isPlaying()){
      verwitwet.loop();
      document.getElementById("verwitwet").style["color"] = 'black';
      document.getElementById("verwitwet").style["background-color"] = 'white';
    } else { verwitwet.stop();
      document.getElementById("verwitwet").style["color"] = 'white';
      document.getElementById("verwitwet").style["background-color"] = 'transparent';
  } }

  function sVielflieger() {
    if (!vielflieger.isPlaying()){
      vielflieger.loop();
      document.getElementById("vielflieger").style["color"] = 'black';
      document.getElementById("vielflieger").style["background-color"] = 'white';
    } else { vielflieger.stop();
      document.getElementById("vielflieger").style["color"] = 'white';
      document.getElementById("vielflieger").style["background-color"] = 'transparent';
  } }

  function sVolksmusik() {
    if (!volksmusik.isPlaying()){
      volksmusik.loop();
      document.getElementById("volksmusik").style["color"] = 'black';
      document.getElementById("volksmusik").style["background-color"] = 'white';
    } else { volksmusik.stop();
      document.getElementById("volksmusik").style["color"] = 'white';
      document.getElementById("volksmusik").style["background-color"] = 'transparent';
  } }

  function sWaage() {
    if (!waage.isPlaying()){
      waage.loop();
      document.getElementById("waage").style["color"] = 'black';
      document.getElementById("waage").style["background-color"] = 'white';
    } else { waage.stop();
      document.getElementById("waage").style["color"] = 'white';
      document.getElementById("waage").style["background-color"] = 'transparent';
  } }

  function sWaffe() {
    if (!waffe.isPlaying()){
      waffe.loop();
      document.getElementById("waffe").style["color"] = 'black';
      document.getElementById("waffe").style["background-color"] = 'white';
    } else { waffe.stop();
      document.getElementById("waffe").style["color"] = 'white';
      document.getElementById("waffe").style["background-color"] = 'transparent';
  } }

  function sWaisenkind() {
    if (!waisenkind.isPlaying()){
      waisenkind.loop();
      document.getElementById("waisenkind").style["color"] = 'black';
      document.getElementById("waisenkind").style["background-color"] = 'white';
    } else { waisenkind.stop();
      document.getElementById("waisenkind").style["color"] = 'white';
      document.getElementById("waisenkind").style["background-color"] = 'transparent';
  } }

  function sWassermann() {
    if (!wassermann.isPlaying()){
      wassermann.loop();
      document.getElementById("wassermann").style["color"] = 'black';
      document.getElementById("wassermann").style["background-color"] = 'white';
    } else { wassermann.stop();
      document.getElementById("wassermann").style["color"] = 'white';
      document.getElementById("wassermann").style["background-color"] = 'transparent';
  } }

  function sWeiss() {
    if (!weiss.isPlaying()){
      weiss.loop();
      document.getElementById("weiss").style["color"] = 'black';
      document.getElementById("weiss").style["background-color"] = 'white';
    } else { weiss.stop();
      document.getElementById("weiss").style["color"] = 'white';
      document.getElementById("weiss").style["background-color"] = 'transparent';
  } }

  function sWidder() {
    if (!widder.isPlaying()){
      widder.loop();
      document.getElementById("widder").style["color"] = 'black';
      document.getElementById("widder").style["background-color"] = 'white';
    } else { widder.stop();
      document.getElementById("widder").style["color"] = 'white';
      document.getElementById("widder").style["background-color"] = 'transparent';
  } }

  function sWindows() {
    if (!windows.isPlaying()){
      windows.loop();
      document.getElementById("windows").style["color"] = 'black';
      document.getElementById("windows").style["background-color"] = 'white';
    } else { windows.stop();
      document.getElementById("windows").style["color"] = 'white';
      document.getElementById("windows").style["background-color"] = 'transparent';
  } }

  function sZivi() {
    if (!zivi.isPlaying()){
      zivi.loop();
      document.getElementById("zivi").style["color"] = 'black';
      document.getElementById("zivi").style["background-color"] = 'white';
    } else { zivi.stop();
      document.getElementById("zivi").style["color"] = 'white';
      document.getElementById("zivi").style["background-color"] = 'transparent';
  } }

  function sZugfahrer() {
    if (!zugfahrer.isPlaying()){
      zugfahrer.loop();
      document.getElementById("zugfahrer").style["color"] = 'black';
      document.getElementById("zugfahrer").style["background-color"] = 'white';
    } else { zugfahrer.stop();
      document.getElementById("zugfahrer").style["color"] = 'white';
      document.getElementById("zugfahrer").style["background-color"] = 'transparent';
  } }

  function sZwillinge() {
    if (!zwillinge.isPlaying()){
      zwillinge.loop();
      document.getElementById("zwillinge").style["color"] = 'black';
      document.getElementById("zwillinge").style["background-color"] = 'white';
    } else { zwillinge.stop();
      document.getElementById("zwillinge").style["color"] = 'white';
      document.getElementById("zwillinge").style["background-color"] = 'transparent';
  } }


  function sAdidas() {
    if (!adidas.isPlaying()){
      adidas.loop();
      document.getElementById("adidas").style["color"] = 'black';
      document.getElementById("adidas").style["background-color"] = 'white';
    } else { adidas.stop();
      document.getElementById("adidas").style["color"] = 'white';
      document.getElementById("adidas").style["background-color"] = 'transparent';
  } }

  function sAsex() {
    if (!asex.isPlaying()){
      asex.loop();
      document.getElementById("asex").style["color"] = 'black';
      document.getElementById("asex").style["background-color"] = 'white';
    } else { asex.stop();
      document.getElementById("asex").style["color"] = 'white';
      document.getElementById("asex").style["background-color"] = 'transparent';
  } }

  function sAusbildung() {
    if (!ausbildung.isPlaying()){
      ausbildung.loop();
      document.getElementById("ausbildung").style["color"] = 'black';
      document.getElementById("ausbildung").style["background-color"] = 'white';
    } else { ausbildung.stop();
      document.getElementById("ausbildung").style["color"] = 'white';
      document.getElementById("ausbildung").style["background-color"] = 'transparent';
  } }

  function sBisex() {
    if (!bisex.isPlaying()){
      bisex.loop();
      document.getElementById("bisex").style["color"] = 'black';
      document.getElementById("bisex").style["background-color"] = 'white';
    } else { bisex.stop();
      document.getElementById("bisex").style["color"] = 'white';
      document.getElementById("bisex").style["background-color"] = 'transparent';
  } }

  function sFokus() {
    if (!fokus.isPlaying()){
      fokus.loop();
      document.getElementById("fokus").style["color"] = 'black';
      document.getElementById("fokus").style["background-color"] = 'white';
    } else { fokus.stop();
      document.getElementById("fokus").style["color"] = 'white';
      document.getElementById("fokus").style["background-color"] = 'transparent';
  } }

  function sFreundlich() {
    if (!freundlich.isPlaying()){
      freundlich.loop();
      document.getElementById("freundlich").style["color"] = 'black';
      document.getElementById("freundlich").style["background-color"] = 'white';
    } else { freundlich.stop();
      document.getElementById("freundlich").style["color"] = 'white';
      document.getElementById("freundlich").style["background-color"] = 'transparent';
  } }

  function sGesund() {
    if (!gesund.isPlaying()){
      gesund.loop();
      document.getElementById("gesund").style["color"] = 'black';
      document.getElementById("gesund").style["background-color"] = 'white';
    } else { gesund.stop();
      document.getElementById("gesund").style["color"] = 'white';
      document.getElementById("gesund").style["background-color"] = 'transparent';
  } }

  function sGlatze() {
    if (!glatze.isPlaying()){
      glatze.loop();
      document.getElementById("glatze").style["color"] = 'black';
      document.getElementById("glatze").style["background-color"] = 'white';
    } else { glatze.stop();
      document.getElementById("glatze").style["color"] = 'white';
      document.getElementById("glatze").style["background-color"] = 'transparent';
  } }

  function sLedig() {
    if (!ledig.isPlaying()){
      ledig.loop();
      document.getElementById("ledig").style["color"] = 'black';
      document.getElementById("ledig").style["background-color"] = 'white';
    } else { ledig.stop();
      document.getElementById("ledig").style["color"] = 'white';
      document.getElementById("ledig").style["background-color"] = 'transparent';
  } }

  function sNike() {
    if (!nike.isPlaying()){
      nike.loop();
      document.getElementById("nike").style["color"] = 'black';
      document.getElementById("nike").style["background-color"] = 'white';
    } else { nike.stop();
      document.getElementById("nike").style["color"] = 'white';
      document.getElementById("nike").style["background-color"] = 'transparent';
  } }

  function sOp() {
    if (!op.isPlaying()){
      op.loop();
      document.getElementById("op").style["color"] = 'black';
      document.getElementById("op").style["background-color"] = 'white';
    } else { op.stop();
      document.getElementById("op").style["color"] = 'white';
      document.getElementById("op").style["background-color"] = 'transparent';
  } }

  function sPuma() {
    if (!puma.isPlaying()){
      puma.loop();
      document.getElementById("puma").style["color"] = 'black';
      document.getElementById("puma").style["background-color"] = 'white';
    } else { puma.stop();
      document.getElementById("puma").style["color"] = 'white';
      document.getElementById("puma").style["background-color"] = 'transparent';
  } }

  function sRedbull() {
    if (!redbull.isPlaying()){
      redbull.loop();
      document.getElementById("redbull").style["color"] = 'black';
      document.getElementById("redbull").style["background-color"] = 'white';
    } else { redbull.stop();
      document.getElementById("redbull").style["color"] = 'white';
      document.getElementById("redbull").style["background-color"] = 'transparent';
  } }

  function sWestdeutsch() {
    if (!westdeutsch.isPlaying()){
      westdeutsch.loop();
      document.getElementById("westdeutsch").style["color"] = 'black';
      document.getElementById("westdeutsch").style["background-color"] = 'white';
    } else { westdeutsch.stop();
      document.getElementById("westdeutsch").style["color"] = 'white';
      document.getElementById("westdeutsch").style["background-color"] = 'transparent';
  } }

function windowResized() { resizeCanvas(windowWidth, windowHeight); }
