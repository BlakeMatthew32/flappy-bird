class Bird {
    constructor() {
        this.x = canvas.width / 3
        this.y = canvas.height / 2
        this.velX = scrollSpeed
        this.velY = 0
        this.maxVelY = 6
        this.flapHeight = 20
        this.size = 40
        this.dead = false
        this.onGround = false
        this.ground = new Ground()
    }

    show() {
        fill(255)
        ellipse(this.x, this.y, this.size)
    }

    update() {
        if(this.velY < this.maxVelY){
            this.velY += gravity
        }
        
        this.y += this.velY      
    }

    move() {
        this.velY += gravity
    }

    flap() {
        this.velY -= this.flapHeight 
        if (!this.onGround) {
        }
    }

    // checkCollision() {
    //     if(this.ground.collided(this)) {
    //         this.onGround = true
    //         this.dead = true
    //     } if (!this.ground.collided(this)) {
    //         this.onGround = false
    //         this.dead = false 
    //     }
    // }
}