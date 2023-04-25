class PipePair {
    constructor(secondPair) {
        this.pipeGap = 150
        this.bottomPipe = new Pipe(secondPair)
        this.topPipe = new Pipe(secondPair, true, this.pipeGap, this.bottomPipe.y)
        this.pipesOffScreen = false
    }

    show() {
        this.bottomPipe.show()
        this.topPipe.show()
    }

    update() {
        this.bottomPipe.update()
        this.topPipe.update()
        this.checkOffScreen()
    }

    checkOffScreen() {
        if (this.bottomPipe.x < 0 - this.bottomPipe.width) {
            this.bottomPipe = new Pipe()
            this.topPipe = new Pipe(false, true, this.pipeGap, this.bottomPipe.y)
            this.pipesOffScreen = true
        }
    }

    collided(b) {
        //check if collide with bottom pipe
        if(b.x + b.size/2 > this.bottomPipe.x && 
            b.x < this.bottomPipe.x + this.bottomPipe.width &&
            b.y + b.size/2 > this.bottomPipe.y) {

            return true
        }

        //check for collision with bottom pipe
        if(b.x + b.size/2  > this.topPipe.x && 
            b.x < this.topPipe.x + this.topPipe.width && 
            b.y - b.size/2 < this.topPipe.y + this.topPipe.height) {

            return true
        }
    }
}