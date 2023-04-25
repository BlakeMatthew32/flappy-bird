const gravity = 1
let scrollSpeed = 5
let playing = false
const startText = 'Press "P" to start'
const resetText = `
  You Died
  Press "R" to Reset`

let pipeCounter = 0

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
}

function draw() {
  background(canvas.color);
  bird.show()
  ground.show() 

  if(playing) {
    bird.update()
  } else {
    startScreen()
  }

  if (bird.dead) {
    reset()
  }
  
}

function keyPressed() {
  switch (key) {
    case ' ':
      bird.flap()
      break
    case 'p': 
      playing = true
      break
    case 'r':
      resetGame()
  }
}


function startScreen() {
  fill(0, 255, 0)
  text(startText, canvas.width / 2, 50)
  textSize(30)
  textAlign(CENTER)
}

function reset() {
  fill(255, 0, 0)
  text(resetText, canvas.width / 2, 50)
  textSize(30)
  textAlign(CENTER)
}

// function score() {
//   if(bird.pipes1.pipesOffScreen || bird.pipes2.pipesOffScreen) {
//     pipeCounter += 1
//   }
// }

function resetGame() {
  bird = new Bird()
  playing = false
  pipeCounter = 0
}

