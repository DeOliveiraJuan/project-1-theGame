class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.backgroundCity = new BackgroundCity(this.ctx);
        this.backgroundRoad = new BackgroundRoad(this.ctx);
    }


start() {
    this.intervalId = setInterval( () => {
        this.clear();
        this.draw();
        this.move();

    } , 1000/60)
}

clear() {
    this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height,
    )
}

draw() {
    this.backgroundCity.draw()
    this.backgroundRoad.draw()
    }

move() {
    this.backgroundCity.move()
    this.backgroundRoad.move()
}
}
    

