var canvas;
var mic;
var amplitude;
var fft;
var delay;
let angle = 0;

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
  console.log("FARBE EINS SLIDER: " + value);
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
  console.log("FARBE ZWEI SLIDER: " + value);
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
  console.log("FARBE DREI SLIDER: " + value);
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
  console.log("SPEED SLIDER: " + value);
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
  console.log("DEALY AMP SLIDER: " + value);
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
  console.log("VOLUMEN SLIDER: " + value);
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
  console.log("PAN SLIDER: " + value);
  pan = value;
});

//BUBBLE SIZE
var bubbleSize;
var sliderBubbleSize = document.getElementById('sliderBubbleSize');
noUiSlider.create(sliderBubbleSize, {
  start: [10],
  step: 1,
  range: {
    min: [0 ],
    max: [50]
  }
});

sliderBubbleSize.noUiSlider.on('update', function( value ){
  console.log("BUBBLE SIZE: " + value);
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
  console.log("BUBBLE ANGLE: " + value);
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
  console.log("BUBBLE SPREAD: " + value);
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
  console.log("BUBBLE ROTATE: " + value);
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
  console.log("BUBBLE HEIGHT: " + value);
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
  console.log("BUBBLE WIDTH: " + value);
  bubbleWidth = value;
});

/////////////////////////////////////////////////////////
///////////////////////PRELOAD///////////////////////////
/////////////////////////////////////////////////////////

function preload() {
  afrika = loadSound('sounds/Afrika.mp3');
  akademiker = loadSound('sounds/Akademiker.mp3');
  akademikerkind = loadSound('sounds/Akademikerkind.mp3');
  allergiker = loadSound('sounds/Allergiker.mp3');
  alt = loadSound('sounds/alt.mp3');
  antark = loadSound('sounds/Antark.mp3');
  arbeiterkind = loadSound('sounds/Arbeiterkind.mp3');
  asien = loadSound('sounds/Asien.mp3');
  austra = loadSound('sounds/Austra.mp3');
  autofahrer = loadSound('sounds/autofahrer.mp3');
  bauernkind = loadSound('sounds/Bauernkind.mp3');
  bayerisch = loadSound('sounds/bayerisch.mp3');
  berlinerisch = loadSound('sounds/berlinerisch.mp3');
  bus = loadSound('sounds/bus.mp3');
  doerflich = loadSound('sounds/doerflich.mp3');
  einzelkind = loadSound('sounds/einzelkind.mp3');
  euro = loadSound('sounds/Euro.mp3');
  frau = loadSound('sounds/Frau.mp3');
  fussgaenger = loadSound('sounds/Fussgaenger.mp3');
  geschieden = loadSound('sounds/geschieden.mp3');
  geschwisterkind = loadSound('sounds/geschwisterkind.mp3');
  hessisch = loadSound('sounds/hessisch.mp3');
  jung = loadSound('sounds/jung.mp3');
  koelsch = loadSound('sounds/koelsch.mp3');
  mann = loadSound('sounds/Mann.mp3');
  mitte = loadSound('sounds/Mitte.mp3');
  mittleresAlter = loadSound('sounds/mittleresAlter.mp3');
  nord = loadSound('sounds/Nord.mp3');
  ober = loadSound('sounds/Ober.mp3');
  pendler = loadSound('sounds/pendler.mp3');
  radfahrer = loadSound('sounds/radfahrer.mp3');
  rechts = loadSound('sounds/rechts.mp3');
  saechsisch = loadSound('sounds/saechsisch.mp3');
  scheidungskind = loadSound('sounds/Scheidungskind.mp3');
  schwaebisch = loadSound('sounds/schwaebisch.mp3');
  schwanger = loadSound('sounds/schwanger.mp3');
  staedtisch = loadSound('sounds/staedtisch.mp3');
  sued = loadSound('sounds/Sued.mp3');
  tattoo = loadSound('sounds/Tattoo.mp3');
  trans = loadSound('sounds/Trans.mp3');
  unten = loadSound('sounds/Unten.mp3');
  verheiratet = loadSound('sounds/verheiratet.mp3');
  verwitwet = loadSound('sounds/verwitwet.mp3');
  waisenkind = loadSound('sounds/waisenkind.mp3');
  zugfahrer = loadSound('sounds/Zugfahrer.mp3');
}

/////////////////////////////////////////////////////////
////////////////////////SETUP////////////////////////////
/////////////////////////////////////////////////////////

function setup(){
  amplitude = new p5.Amplitude(0.9);
  fft = new p5.FFT(0.9, 512);
  delay = new p5.Delay();
  reverb = new p5.Reverb();
  mic = new p5.AudioIn();
  mic.start();

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-3');
//  angleMode(DEGREES);
}

/////////////////////////////////////////////////////////
////////////////////////DRAW///////////////////////////
/////////////////////////////////////////////////////////

function draw() {
  var micLevel = mic.getLevel()*100;
  var level = amplitude.getLevel();
  var size = map(level, 0, 100, 0, 500);
  var h = hour();
  var m = minute();
  var s = second();
  e = constrain(farbeEins, 0, 255);
  z = constrain(farbeZwei, 0, 255);
  d = constrain(farbeDrei, 0, 255);


  micLevelSize = constrain(micLevel, 0, 200);


  //background(micLevelSize+e, micLevelSize+z, micLevelSize+d);
  background(e, z, d);


  identityBubble();
//  filter(BLUR, 1);

  frau.rate(speed);
  frau.pan(pan);
  delay.process(frau, .30, .7, 2300);

  mann.rate(speed);
  mann.pan(pan);
  delay.process(mann, .30, .7, 2300);

  trans.rate(speed);
  trans.pan(pan);
  delay.process(trans, .30, .7, 2300);

  afrika.rate(speed);
  afrika.pan(pan);
  delay.process(afrika, .30, .7, 2300);

  akademiker.rate(speed);
  akademiker.pan(pan);
  delay.process(akademiker, .30, .7, 2300);

  akademikerkind.rate(speed);
  akademikerkind.pan(pan);
  delay.process(akademikerkind, .30, .7, 2300);

  allergiker.rate(speed);
  allergiker.pan(pan);
  delay.process(allergiker, .30, .7, 2300);

  alt.rate(speed);
  alt.pan(pan);
  delay.process(alt, .30, .7, 2300);

  antark.rate(speed);
  antark.pan(pan);
  delay.process(antark, .30, .7, 2300);

  arbeiterkind.rate(speed);
  arbeiterkind.pan(pan);
  delay.process(arbeiterkind, .30, .7, 2300);

  asien.rate(speed);
  asien.pan(pan);
  delay.process(asien, .30, .7, 2300);

  austra.rate(speed);
  austra.pan(pan);
  delay.process(austra, .30, .7, 2300);

  autofahrer.rate(speed);
  autofahrer.pan(pan);
  delay.process(autofahrer, .30, .7, 2300);

  bauernkind.rate(speed);
  bauernkind.pan(pan);
  delay.process(bauernkind, .30, .7, 2300);

  bayerisch.rate(speed);
  bayerisch.pan(pan);
  delay.process(bayerisch, .30, .7, 2300);

  berlinerisch.rate(speed);
  berlinerisch.pan(pan);
  delay.process(berlinerisch, .30, .7, 2300);

  bus.rate(speed);
  bus.pan(pan);
  delay.process(bus, .30, .7, 2300);

  doerflich.rate(speed);
  doerflich.pan(pan);
  delay.process(doerflich, .30, .7, 2300);

  einzelkind.rate(speed);
  einzelkind.pan(pan);
  delay.process(einzelkind, .30, .7, 2300);

  euro.rate(speed);
  euro.pan(pan);
  delay.process(euro, .30, .7, 2300);

  fussgaenger.rate(speed);
  fussgaenger.pan(pan);
  delay.process(fussgaenger, .30, .7, 2300);

  geschieden.rate(speed);
  geschieden.pan(pan);
  delay.process(geschieden, .30, .7, 2300);

  geschwisterkind.rate(speed);
  geschwisterkind.pan(pan);
  delay.process(geschwisterkind, .30, .7, 2300);

  hessisch.rate(speed);
  hessisch.pan(pan);
  delay.process(hessisch, .30, .7, 2300);

  jung.rate(speed);
  jung.pan(pan);
  delay.process(jung, .30, .7, 2300);

  koelsch.rate(speed);
  koelsch.pan(pan);
  delay.process(koelsch, .30, .7, 2300);

  mitte.rate(speed);
  mitte.pan(pan);
  delay.process(mitte, .30, .7, 2300);

  mittleresAlter.rate(speed);
  mittleresAlter.pan(pan);
  delay.process(mittleresAlter, .30, .7, 2300);

  nord.rate(speed);
  nord.pan(pan);
  delay.process(nord, .30, .7, 2300);

  ober.rate(speed);
  ober.pan(pan);
  delay.process(ober, .30, .7, 2300);

  pendler.rate(speed);
  pendler.pan(pan);
  delay.process(pendler, .30, .7, 2300);

  radfahrer.rate(speed);
  radfahrer.pan(pan);
  delay.process(radfahrer, .30, .7, 2300);

  rechts.rate(speed);
  rechts.pan(pan);
  delay.process(rechts, .30, .7, 2300);

  saechsisch.rate(speed);
  saechsisch.pan(pan);
  delay.process(saechsisch, .30, .7, 2300);

  scheidungskind.rate(speed);
  scheidungskind.pan(pan);
  delay.process(scheidungskind, .30, .7, 2300);

  schwaebisch.rate(speed);
  schwaebisch.pan(pan);
  delay.process(schwaebisch, .30, .7, 2300);

  schwanger.rate(speed);
  schwanger.pan(pan);
  delay.process(schwanger, .30, .7, 2300);

  staedtisch.rate(speed);
  staedtisch.pan(pan);
  delay.process(staedtisch, .30, .7, 2300);

  sued.rate(speed);
  sued.pan(pan);
  delay.process(sued, .30, .7, 2300);

  tattoo.rate(speed);
  tattoo.pan(pan);
  delay.process(tattoo, .30, .7, 2300);

  unten.rate(speed);
  unten.pan(pan);
  delay.process(unten, .30, .7, 2300);

  verheiratet.rate(speed);
  verheiratet.pan(pan);
  delay.process(verheiratet, .30, .7, 2300);

  verwitwet.rate(speed);
  verwitwet.pan(pan);
  delay.process(verwitwet, .30, .7, 2300);

  waisenkind.rate(speed);
  waisenkind.pan(pan);
  delay.process(waisenkind, .30, .7, 2300);

  zugfahrer.rate(speed);
  zugfahrer.pan(pan);
  delay.process(zugfahrer, .30, .7, 2300);

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
  var micLevel = mic.getLevel();
  ml = constrain(micLevel, 0, 360);
  rotate(br+ml);
  fill(255);
  for (var i = 0; i < spectrum.length; i++){
    var freq = fft.analyze();
    var level = amplitude.getLevel();
    var l = (micLevel + level)*50;
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

function sFrau() {
  if (!frau.isPlaying()){
    frau.loop();
    mann.stop();
    trans.stop();
    document.getElementById("frau").style["color"] = 'black';
    document.getElementById("frau").style["background-color"] = 'white';
    document.getElementById("mann").style["color"] = 'white';
    document.getElementById("mann").style["background-color"] = 'transparent';
    document.getElementById("trans").style["color"] = 'white';
    document.getElementById("trans").style["background-color"] = 'transparent';
  } else {
    frau.stop();
    document.getElementById("frau").style["color"] = 'white';
    document.getElementById("frau").style["background-color"] = 'transparent';
  } }

function sMann() {
  if (!mann.isPlaying()){
    mann.loop();
    frau.stop();
    trans.stop();
    document.getElementById("mann").style["color"] = 'black';
    document.getElementById("mann").style["background-color"] = 'white';
    document.getElementById("frau").style["color"] = 'white';
    document.getElementById("frau").style["background-color"] = 'transparent';
    document.getElementById("trans").style["color"] = 'white';
    document.getElementById("trans").style["background-color"] = 'transparent';
  } else { mann.stop();
    document.getElementById("mann").style["color"] = 'white';
    document.getElementById("mann").style["background-color"] = 'transparent';
  } }

  function sTrans() {
    if (!trans.isPlaying()){
      trans.loop();
      frau.stop();
      mann.stop();
      document.getElementById("trans").style["color"] = 'black';
      document.getElementById("trans").style["background-color"] = 'white';
      document.getElementById("frau").style["color"] = 'white';
      document.getElementById("frau").style["background-color"] = 'transparent';
      document.getElementById("mann").style["color"] = 'white';
      document.getElementById("mann").style["background-color"] = 'transparent';
    } else { trans.stop();
      document.getElementById("trans").style["color"] = 'white';
      document.getElementById("trans").style["background-color"] = 'transparent';
    } }

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

  function sAntark() {
    if (!antark.isPlaying()){
      antark.loop();
      document.getElementById("antark").style["color"] = 'black';
      document.getElementById("antark").style["background-color"] = 'white';
    } else { antark.stop();
      document.getElementById("antark").style["color"] = 'white';
      document.getElementById("antark").style["background-color"] = 'transparent';
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

  function sAsien() {
    if (!asien.isPlaying()){
      asien.loop();
      document.getElementById("asien").style["color"] = 'black';
      document.getElementById("asien").style["background-color"] = 'white';
    } else { asien.stop();
      document.getElementById("asien").style["color"] = 'white';
      document.getElementById("asien").style["background-color"] = 'transparent';
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

  function sBerlinerisch() {
    if (!berlinerisch.isPlaying()){
      berlinerisch.loop();
      document.getElementById("berlinerisch").style["color"] = 'black';
      document.getElementById("berlinerisch").style["background-color"] = 'white';
    } else { berlinerisch.stop();
      document.getElementById("berlinerisch").style["color"] = 'white';
      document.getElementById("berlinerisch").style["background-color"] = 'transparent';
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

  function sDoerflich() {
    if (!doerflich.isPlaying()){
      doerflich.loop();
      document.getElementById("doerflich").style["color"] = 'black';
      document.getElementById("doerflich").style["background-color"] = 'white';
    } else { doerflich.stop();
      document.getElementById("doerflich").style["color"] = 'white';
      document.getElementById("doerflich").style["background-color"] = 'transparent';
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

  function sEuro() {
    if (!euro.isPlaying()){
      euro.loop();
      document.getElementById("euro").style["color"] = 'black';
      document.getElementById("euro").style["background-color"] = 'white';
    } else { euro.stop();
      document.getElementById("euro").style["color"] = 'white';
      document.getElementById("euro").style["background-color"] = 'transparent';
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

  function sHessisch() {
    if (!hessisch.isPlaying()){
      hessisch.loop();
      document.getElementById("hessisch").style["color"] = 'black';
      document.getElementById("hessisch").style["background-color"] = 'white';
    } else { hessisch.stop();
      document.getElementById("hessisch").style["color"] = 'white';
      document.getElementById("hessisch").style["background-color"] = 'transparent';
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

  function sKoelsch() {
    if (!koelsch.isPlaying()){
      koelsch.loop();
      document.getElementById("koelsch").style["color"] = 'black';
      document.getElementById("koelsch").style["background-color"] = 'white';
    } else { koelsch.stop();
      document.getElementById("koelsch").style["color"] = 'white';
      document.getElementById("koelsch").style["background-color"] = 'transparent';
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

  function sPendler() {
    if (!pendler.isPlaying()){
      pendler.loop();
      document.getElementById("pendler").style["color"] = 'black';
      document.getElementById("pendler").style["background-color"] = 'white';
    } else { pendler.stop();
      document.getElementById("pendler").style["color"] = 'white';
      document.getElementById("pendler").style["background-color"] = 'transparent';
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

  function sRechts() {
    if (!rechts.isPlaying()){
      rechts.loop();
      document.getElementById("rechts").style["color"] = 'black';
      document.getElementById("rechts").style["background-color"] = 'white';
    } else { rechts.stop();
      document.getElementById("rechts").style["color"] = 'white';
      document.getElementById("rechts").style["background-color"] = 'transparent';
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

  function sStaedtisch() {
    if (!staedtisch.isPlaying()){
      staedtisch.loop();
      document.getElementById("staedtisch").style["color"] = 'black';
      document.getElementById("staedtisch").style["background-color"] = 'white';
    } else { staedtisch.stop();
      document.getElementById("staedtisch").style["color"] = 'white';
      document.getElementById("staedtisch").style["background-color"] = 'transparent';
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

  function sUnten() {
    if (!unten.isPlaying()){
      unten.loop();
      document.getElementById("unten").style["color"] = 'black';
      document.getElementById("unten").style["background-color"] = 'white';
    } else { unten.stop();
      document.getElementById("unten").style["color"] = 'white';
      document.getElementById("unten").style["background-color"] = 'transparent';
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

  function sVerwitwet() {
    if (!verwitwet.isPlaying()){
      verwitwet.loop();
      document.getElementById("verwitwet").style["color"] = 'black';
      document.getElementById("verwitwet").style["background-color"] = 'white';
    } else { verwitwet.stop();
      document.getElementById("verwitwet").style["color"] = 'white';
      document.getElementById("verwitwet").style["background-color"] = 'transparent';
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

  function sZugfahrer() {
    if (!zugfahrer.isPlaying()){
      zugfahrer.loop();
      document.getElementById("zugfahrer").style["color"] = 'black';
      document.getElementById("zugfahrer").style["background-color"] = 'white';
    } else { zugfahrer.stop();
      document.getElementById("zugfahrer").style["color"] = 'white';
      document.getElementById("zugfahrer").style["background-color"] = 'transparent';
  } }

function windowResized() { resizeCanvas(windowWidth, windowHeight); }
