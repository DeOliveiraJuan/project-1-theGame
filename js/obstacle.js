class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "../images/carObstaclesnb.png"
        this.img.frames = 4;
        this.img.frameIndex = Math.floor(Math.random() * 4);
        this.w = 90;
        this.h = 40;
        this.x = CANVAS_WIDTH;
        this.y = Math.floor(Math.random() * (CANVAS_HEIGHT - (this.h * 1.5) - CITY_HEIGHT) + CITY_HEIGHT);
        this.vx = -6;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * this.img.width / this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        ) 
    }

    collide(el) {
        const TRESHOLD = 30;
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
        const collideY = el.y + TRESHOLD < this.y + this.h && el.y + el.h > this.y;
    
        return collideX && collideY;
      }

    move() {
        this.x += this.vx
    }

    isVisible() {
        return this.x + this.w >= 0
    }
}