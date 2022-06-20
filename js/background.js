class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        tbis.y =0;
        this.vx = 0;
        this.img = new Image();
        this.img.src = "../images/Background.jpg";
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
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
}