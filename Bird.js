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
        this.pipes1 = new PipePair()
        this.pipes2 = new PipePair(true)
        this.ground = new Ground()
    }

    show() {
        fill(255)
        ellipse(this.x, this.y, this.size)
        this.pipes1.show()
        this.pipes2.show()
    }

    update() {
        this.checkCollision()
        if(!this.dead) {
            this.pipes1.update()
            this.pipes2.update()

            if(this.velY < this.maxVelY){
                this.move()
            }
            
            this.y += this.velY
        
        }    
    }

    move() {
        this.velY += gravity
    }

    flap() {
        this.velY -= this.flapHeight 
        if (!this.onGround) {
        }
    }

    checkCollision() {
        if(this.ground.collided(this)) {
            this.onGround = true
            this.dead = true
        } 
        
        if (this.pipes1.collided(this) || 
            this.pipes2.collided(this)) {

            this.onGround = false
            this.dead = true 
        }
    }
}