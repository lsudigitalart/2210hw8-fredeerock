function setup() {
  createCanvas(640, 480);

}

var actualtime = 0;
var timesinceimagesloaded = 0;

function draw() {
  var m = millis();
  println(m);

  loadImage(path,imageloaded());
  actualtime = millis() - timesinceimagesloaded;

}

function imageloaded(){
  timesinceimagesloaded = millis();
}

function scene1(x, y, r) {
  ellipse(x, y, r);
}

function scene2(x, y, r) {
  rect(100, 100, 20, 20);
}
