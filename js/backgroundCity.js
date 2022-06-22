class BackgroundCity {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.vx = -1;
        this.img = new Image();
        this.img.src = "../images/Background.jpg";
        this.w = CANVAS_WIDTH;
        this.h = CANVAS_HEIGHT - ROAD_HEIGHT;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )

        this.ctx.drawImage(
            this.img,
            this.x + this.ctx.canvas.width,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.x += this.vx
        if(this.x + this.w <= 0) {
            this.x = 0
        }
    }
}