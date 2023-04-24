const gravity = 1
let scrollSpeed = 20

let bird
let ground

const canvas = {
  width: 800,
  height: 600,
  color: 'blue'
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  background(canvas.color);

  bird = new Bird()
  ground = new Ground() 
}

function draw() {
  background(canvas.color);
  bird.show()  
  bird.update()
  ground.show()             
}

function keyPressed() {
  switch (key) {
    case ' ':
      bird.flap()
      break;
  }
}

