const gravity = 1
let scrollSpeed = 5

let bird
let ground
let pipe1
let pipe2

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
  pipe1 = new Pipe(ground.height)
  pipe2 = new Pipe(ground.height, true)

}

function draw() {
  background(canvas.color);
  bird.show()
  ground.show() 
  pipe1.show()
  pipe2.show()    
  bird.update()  
  pipe1.update()  
  pipe2.update()
  if(pipe1.x < 0 - pipe1.width) {
    pipe1 = new Pipe(ground.height)
  } 
  if(pipe2.x < 0 - pipe2.width) {
    pipe2 = new Pipe(ground.height)
  } 
}

function keyPressed() {
  switch (key) {
    case ' ':
      bird.flap()
      break;
  }
}

