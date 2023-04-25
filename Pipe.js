class Pipe {
    constructor(secondPair, topPipe, gap, bottomPipeHeight) {
        this.width = 80
        this.height = random(canvas.height - 160)
        this.x = canvas.width + this.width
        
        this.y = canvas.height - this.height

        if(topPipe) {
            this.y = 0
            this.height = bottomPipeHeight - gap
        }

        if(secondPair) {
            this.x = canvas.width * 1.5 + this.width  * 2
        }
        
    }

    show() {
        fill (0, 200, 0)
        rect(this.x, this.y, this.width, this.height)
    }
    
    update() {
        this.x -= scrollSpeed
    }
}