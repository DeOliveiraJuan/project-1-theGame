class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = ROAD_HEIGHT / 2;
        this.y = CANVAS_WIDTH / 2;
        this.img = new Image();
        this.img.src = "../images/cybertruck.png"
        this.w = 120;
        this.h = 40;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        ) 
    }

    move() {
        
    }
}