class Ground {
    constructor() {
        this.height = 30
        this.topPixalCoord = canvas.height - this.height
        this.pixalOffset = 0
    }

    show() {
        fill(0)
        rect(0, this.topPixalCoord, canvas.width, this.height)
    }

    // collided(b) {
    //     if(b.y + b.size >= this.topPixalCoord) {
    //         return true
    //     }
    // }
}