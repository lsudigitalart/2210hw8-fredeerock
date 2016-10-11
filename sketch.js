function setup() {
  createCanvas(640, 480);

}

function draw() {
  background(0);
  var m = millis();
  println(m);

  if (m > 1000 && m < 4000) {
    scene1(20, 20, 100);
  }

  if (m > 4000 && m < 7000) {
    scene2();
  }

}

function scene1(x, y, r) {
  ellipse(x, y, r);
}

function scene2(x, y, r) {
  rect(100, 100, 20, 20);
}
