class Pipe {
    constructor(groundHeight, nextPipe) {
        this.width = 80
        this.height = random(canvas.height - 100) + groundHeight
        this.x = canvas.width + this.width
        if(nextPipe) {
            this.x = (this.x *1.5) + (this.width/2)
        }
        
    }

    show() {
        fill (0, 200, 0)
        rect(this.x, canvas.height - this.height, this.width, canvas.height)
    }

    update() {
        this.x -= scrollSpeed
    }
}