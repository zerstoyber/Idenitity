p5.disableFriendlyErrors = true; // disables FES

var canvas;
// var mic;
var amplitude;
var fft;
var delay;


var alkoholiker, alleinerziehend, allergiker, arbeitskleidung, arbeitslos, atheist, besorgt, bundeswehr, doerflich, eso, euro, facebook, fruehaufsteher, gang, geistigbehindert, geschaeftsfuehrer, geschwisterkind, hetero, jazz, linux, mercedes, mitte, mittleresAlter, national, nichtversichert, radfahrer, rave, rot, schwaebisch, star, tattoo, tierlieb, untergewicht, veganer, verbindung, waffe, zwillinge, adidas, gesund;


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
    max: [130]
  }
});

sliderFarbeEins.noUiSlider.on('update', function( value ){ farbeEins = value; });

//FARBE ZWEI SLIDER
var farbeZwei;
var sliderFarbeZwei = document.getElementById('sliderFarbeZwei');
noUiSlider.create(sliderFarbeZwei, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [130]
  }
});

sliderFarbeZwei.noUiSlider.on('update', function( value ){ farbeZwei = value; });

//FARBE DREI SLIDER
var farbeDrei;
var sliderFarbeDrei = document.getElementById('sliderFarbeDrei');
noUiSlider.create(sliderFarbeDrei, {
  start: [0],
  step: 1,
  range: {
    min: [0],
    max: [130]
  }
});

sliderFarbeDrei.noUiSlider.on('update', function( value ){ farbeDrei = value; });

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

sliderSpeed.noUiSlider.on('update', function( value ){  speed = value; });

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

sliderDelayAmp.noUiSlider.on('update', function( value ){ delayAmp = value;
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

sliderVol.noUiSlider.on('update', function( value ){  vol = value; });

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

sliderPan.noUiSlider.on('update', function( value ){ pan = value; });

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

sliderBubbleSize.noUiSlider.on('update', function( value ){ bubbleSize = value; });

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

sliderBubbleAngle.noUiSlider.on('update', function( value ){ bubbleAngle = value; });

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

sliderBubbleSpread.noUiSlider.on('update', function( value ){ bubbleSpread = value; });

//BUBBLE ROTATE
var bubbleRotate;
var sliderBubbleRotate = document.getElementById('sliderBubbleRotate');
noUiSlider.create(sliderBubbleRotate, {
  start: [5],
  step: 1,
  range: {
    min: [0],
    max: [10]
  }
});

sliderBubbleRotate.noUiSlider.on('update', function( value ){ bubbleRotate = value; });

//BUBBLE Height
var bubbleHeight;
var sliderBubbleHeight = document.getElementById('sliderBubbleHeight');
noUiSlider.create(sliderBubbleHeight, {
  start: [25],
  step: 1,
  range: {
    min: [0],
    max: [50]
  }
});

sliderBubbleHeight.noUiSlider.on('update', function( value ){ bubbleHeight = value; });

//BUBBLE Width
var bubbleWidth;
var sliderBubbleWidth = document.getElementById('sliderBubbleWidth');
noUiSlider.create(sliderBubbleWidth, {
  start: [25],
  step: 1,
  range: {
    min: [0],
    max: [50]
  }
});

sliderBubbleWidth.noUiSlider.on('update', function( value ){ bubbleWidth = value; });

/////////////////////////////////////////////////////////
///////////////////////PRELOAD///////////////////////////
/////////////////////////////////////////////////////////

function preload() {
  alkoholiker = loadSound('sounds/alkoholiker.mp3');
  alleinerziehend = loadSound('sounds/alleinerziehend.mp3');
  allergiker = loadSound('sounds/allergiker.mp3');
  arbeitskleidung = loadSound('sounds/arbeitskleidung.mp3');
  arbeitslos = loadSound('sounds/arbeitslos.mp3');
  atheist = loadSound('sounds/atheist.mp3');
  besorgt = loadSound('sounds/besorgt.mp3');
  bundeswehr = loadSound('sounds/bundeswehr.mp3');
  doerflich = loadSound('sounds/doerflich.mp3');
  drogenabhaengig = loadSound('sounds/drogenabhaengig.mp3');
  eso = loadSound('sounds/eso.mp3');
  euro = loadSound('sounds/euro.mp3');
  facebook = loadSound('sounds/facebook.mp3');
  fruehaufsteher = loadSound('sounds/fruehaufsteher.mp3');
  gang = loadSound('sounds/gang.mp3');
  geistigbehindert = loadSound('sounds/geistigbehindert.mp3');
  geschaeftsfuehrer = loadSound('sounds/geschaeftsfuehrer.mp3');
  geschwisterkind = loadSound('sounds/geschwisterkind.mp3');
  hetero = loadSound('sounds/hetero.mp3');
  jazz = loadSound('sounds/jazz.mp3');
  linux = loadSound('sounds/linux.mp3');
  mercedes = loadSound('sounds/mercedes.mp3');
  mitte = loadSound('sounds/mitte.mp3');
  mittleresAlter = loadSound('sounds/mittleresalter.mp3');
  national = loadSound('sounds/national.mp3');
  nichtversichert = loadSound('sounds/nichtversichert.mp3');
  radfahrer = loadSound('sounds/radfahrer.mp3');
  rave = loadSound('sounds/rave.mp3');
  rot = loadSound('sounds/rot.mp3');
  schwaebisch = loadSound('sounds/schwaebisch.mp3');
  star = loadSound('sounds/star.mp3');
  tattoo = loadSound('sounds/tattoo.mp3');
  tierlieb = loadSound('sounds/tierlieb.mp3');
  untergewicht = loadSound('sounds/untergewicht.mp3');
  veganer = loadSound('sounds/veganer.mp3');
  verbindung = loadSound('sounds/verbindung.mp3');
  zwillinge = loadSound('sounds/zwillinge.mp3');
  adidas = loadSound('sounds/adidas.mp3');
  gesund = loadSound('sounds/gesund.mp3');
}

/////////////////////////////////////////////////////////
////////////////////////SETUP////////////////////////////
/////////////////////////////////////////////////////////

function setup(){
  amplitude = new p5.Amplitude();
  amplitude.smooth(0.9);
  fft = new p5.FFT(0.9, 512);
  delay = new p5.Delay();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-3');
}

/////////////////////////////////////////////////////////
////////////////////////DRAW///////////////////////////
/////////////////////////////////////////////////////////

function draw() {
  var level = amplitude.getLevel();
  var l = level*100;
  e = constrain(farbeEins, 0, 200);
  z = constrain(farbeZwei, 0, 200);
  d = constrain(farbeDrei, 0, 200);
  background(e, z, d);
  fill(0,0,0,l)
  rect(0,0,windowWidth,windowHeight);
  identityBubble();

  alkoholiker.rate(speed); alkoholiker.pan(pan); delay.process(alkoholiker, .30, .7, 2300);
  alleinerziehend.rate(speed); alleinerziehend.pan(pan); delay.process(alleinerziehend, .30, .7, 2300);
  allergiker.rate(speed); allergiker.pan(pan);  delay.process(allergiker, .30, .7, 2300);
  arbeitskleidung.rate(speed); arbeitskleidung.pan(pan); delay.process(arbeitskleidung, .30, .7, 2300);
  arbeitslos.rate(speed); arbeitslos.pan(pan); delay.process(arbeitslos, .30, .7, 2300);
  atheist.rate(speed); atheist.pan(pan); delay.process(atheist, .30, .7, 2300);
  besorgt.rate(speed);  besorgt.pan(pan); delay.process(besorgt, .30, .7, 2300);
  bundeswehr.rate(speed); bundeswehr.pan(pan);  delay.process(bundeswehr, .30, .7, 2300);
  doerflich.rate(speed); doerflich.pan(pan); delay.process(doerflich, .30, .7, 2300);
  eso.rate(speed); eso.pan(pan); delay.process(eso, .30, .7, 2300);
  euro.rate(speed); euro.pan(pan); delay.process(euro, .30, .7, 2300);
  facebook.rate(speed); facebook.pan(pan); delay.process(facebook, .30, .7, 2300);
  fruehaufsteher.rate(speed); fruehaufsteher.pan(pan); delay.process(fruehaufsteher, .30, .7, 2300);
  gang.rate(speed); gang.pan(pan); delay.process(gang, .30, .7, 2300);
  geistigbehindert.rate(speed); geistigbehindert.pan(pan); delay.process(geistigbehindert, .30, .7, 2300);
  geschaeftsfuehrer.rate(speed); geschaeftsfuehrer.pan(pan); delay.process(geschaeftsfuehrer, .30, .7, 2300);
  geschwisterkind.rate(speed); geschwisterkind.pan(pan); delay.process(geschwisterkind, .30, .7, 2300);
  hetero.rate(speed); hetero.pan(pan); delay.process(hetero, .30, .7, 2300);
  jazz.rate(speed); jazz.pan(pan); delay.process(jazz, .30, .7, 2300);
  linux.rate(speed); linux.pan(pan); delay.process(linux, .30, .7, 2300);
  mercedes.rate(speed); mercedes.pan(pan); delay.process(mercedes, .30, .7, 2300);
  mitte.rate(speed); mitte.pan(pan); delay.process(mitte, .30, .7, 2300);
  mittleresAlter.rate(speed); mittleresAlter.pan(pan); delay.process(mittleresAlter, .30, .7, 2300);
  national.rate(speed); national.pan(pan); delay.process(national, .30, .7, 2300);
  nichtversichert.rate(speed); nichtversichert.pan(pan); delay.process(nichtversichert, .30, .7, 2300);
  radfahrer.rate(speed); radfahrer.pan(pan); delay.process(radfahrer, .30, .7, 2300);
  rave.rate(speed); rave.pan(pan); delay.process(rave, .30, .7, 2300);
  rot.rate(speed); rot.pan(pan); delay.process(rot, .30, .7, 2300);
  schwaebisch.rate(speed); schwaebisch.pan(pan); delay.process(schwaebisch, .30, .7, 2300);
  star.rate(speed); star.pan(pan); delay.process(star, .30, .7, 2300);
  tattoo.rate(speed); tattoo.pan(pan); delay.process(tattoo, .30, .7, 2300);
  tierlieb.rate(speed); tierlieb.pan(pan); delay.process(tierlieb, .30, .7, 2300);
  untergewicht.rate(speed); untergewicht.pan(pan); delay.process(untergewicht, .30, .7, 2300);
  veganer.rate(speed); veganer.pan(pan); delay.process(veganer, .30, .7, 2300);
  verbindung.rate(speed); verbindung.pan(pan); delay.process(verbindung, .30, .7, 2300);
  waffe.rate(speed); waffe.pan(pan); delay.process(waffe, .30, .7, 2300);
  zwillinge.rate(speed); zwillinge.pan(pan); delay.process(zwillinge, .30, .7, 2300);
  adidas.rate(speed); adidas.pan(pan); delay.process(adidas, .30, .7, 2300);
  gesund.rate(speed); gesund.pan(pan); delay.process(gesund, .30, .7, 2300);
}

/////////////////////////////////////////////////////////
////////////////////////BUBBLE///////////////////////////
/////////////////////////////////////////////////////////

function identityBubble() {
  var spectrum = fft.analyze();
  br = constrain(bubbleRotate, 0, 360);
  noStroke();
  translate((windowWidth/2)+(pan*300), windowHeight/2);
  rotate(br);
  fill(255);
  for (var i = 0; i < spectrum.length; i++){
  //  var freq = fft.analyze();
    var level = amplitude.getLevel();
//    var l = (micLevel + level)*50;
    var l = level*50;
    a = constrain(bubbleAngle, 0, 720);
    bs = constrain(bubbleSpread, 0, 720);
    s = constrain(bubbleSize, 0, 500);

    h = constrain(bubbleHeight, 0, 400);
    w = constrain(bubbleWidth, 0, 400);
    ie = constrain(i, 0, 150);
    var angle = map(i, 0, spectrum.length, 750-a, a);
    var amp = spectrum[i];
    var r = map(amp, 0, bs/2, bubbleSize*10, 0);
    var x = r * cos(angle);
    var y = r * sin(angle);


    noStroke();
    e = constrain(farbeEins, 0, 100);
    z = constrain(farbeZwei, 0, 100);
    d = constrain(farbeDrei, 0, 100);
    fill(ie+e,ie+z,ie+d);
    ellipse(x, y, l+s+w-20, l+s+h-20);
  //  ellipse(x, y, s+w, s+h);
  //blendMode(ADD);

  }
}

/////////////////////////////////////////////////////////
////////////////////////SOUNDS///////////////////////////
/////////////////////////////////////////////////////////

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

  function sAtheist() {
    if (!atheist.isPlaying()){
      atheist.loop();
      document.getElementById("atheist").style["color"] = 'black';
      document.getElementById("atheist").style["background-color"] = 'white';
    } else { atheist.stop();
      document.getElementById("atheist").style["color"] = 'white';
      document.getElementById("atheist").style["background-color"] = 'transparent';
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

  function sBundeswehr() {
    if (!bundeswehr.isPlaying()){
      bundeswehr.loop();
      document.getElementById("bundeswehr").style["color"] = 'black';
      document.getElementById("bundeswehr").style["background-color"] = 'white';
    } else { bundeswehr.stop();
      document.getElementById("bundeswehr").style["color"] = 'white';
      document.getElementById("bundeswehr").style["background-color"] = 'transparent';
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

  function sFacebook() {
    if (!facebook.isPlaying()){
      facebook.loop();
      document.getElementById("facebook").style["color"] = 'black';
      document.getElementById("facebook").style["background-color"] = 'white';
    } else { facebook.stop();
      document.getElementById("facebook").style["color"] = 'white';
      document.getElementById("facebook").style["background-color"] = 'transparent';
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

  function sGeschaeftsfuehrer() {
    if (!geschaeftsfuehrer.isPlaying()){
      geschaeftsfuehrer.loop();
      document.getElementById("geschaeftsfuehrer").style["color"] = 'black';
      document.getElementById("geschaeftsfuehrer").style["background-color"] = 'white';
    } else { geschaeftsfuehrer.stop();
      document.getElementById("geschaeftsfuehrer").style["color"] = 'white';
      document.getElementById("geschaeftsfuehrer").style["background-color"] = 'transparent';
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

  function sHetero() {
    if (!hetero.isPlaying()){
      hetero.loop();
      document.getElementById("hetero").style["color"] = 'black';
      document.getElementById("hetero").style["background-color"] = 'white';
    } else { hetero.stop();
      document.getElementById("hetero").style["color"] = 'white';
      document.getElementById("hetero").style["background-color"] = 'transparent';
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

  function sLinux() {
    if (!linux.isPlaying()){
      linux.loop();
      document.getElementById("linux").style["color"] = 'black';
      document.getElementById("linux").style["background-color"] = 'white';
    } else { linux.stop();
      document.getElementById("linux").style["color"] = 'white';
      document.getElementById("linux").style["background-color"] = 'transparent';
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

  function sRadfahrer() {
    if (!radfahrer.isPlaying()){
      radfahrer.loop();
      document.getElementById("radfahrer").style["color"] = 'black';
      document.getElementById("radfahrer").style["background-color"] = 'white';
    } else { radfahrer.stop();
      document.getElementById("radfahrer").style["color"] = 'white';
      document.getElementById("radfahrer").style["background-color"] = 'transparent';
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

  function sRot() {
    if (!rot.isPlaying()){
      rot.loop();
      document.getElementById("rot").style["color"] = 'black';
      document.getElementById("rot").style["background-color"] = 'white';
    } else { rot.stop();
      document.getElementById("rot").style["color"] = 'white';
      document.getElementById("rot").style["background-color"] = 'transparent';
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

  function sStar() {
    if (!star.isPlaying()){
      star.loop();
      document.getElementById("star").style["color"] = 'black';
      document.getElementById("star").style["background-color"] = 'white';
    } else { star.stop();
      document.getElementById("star").style["color"] = 'white';
      document.getElementById("star").style["background-color"] = 'transparent';
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


  function sVerbindung() {
    if (!verbindung.isPlaying()){
      verbindung.loop();
      document.getElementById("verbindung").style["color"] = 'black';
      document.getElementById("verbindung").style["background-color"] = 'white';
    } else { verbindung.stop();
      document.getElementById("verbindung").style["color"] = 'white';
      document.getElementById("verbindung").style["background-color"] = 'transparent';
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

  function sGesund() {
    if (!gesund.isPlaying()){
      gesund.loop();
      document.getElementById("gesund").style["color"] = 'black';
      document.getElementById("gesund").style["background-color"] = 'white';
    } else { gesund.stop();
      document.getElementById("gesund").style["color"] = 'white';
      document.getElementById("gesund").style["background-color"] = 'transparent';
  } }

function windowResized() { resizeCanvas(windowWidth, windowHeight); }
