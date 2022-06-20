class BackgroundRoad {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 480;
        this.vx = -5;
        this.img = new Image();
        this.img.src = "../images/Highway.png";
        this.w = this.ctx.canvas.width;
        this.h = 120;
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