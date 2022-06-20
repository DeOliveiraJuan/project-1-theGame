class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.background = new Background(this.ctx);
    }


start() {
    this.intervalId = setInterval( () => {
        this.clear();
        this.draw();

    } , 1000/60)
}

draw() {
    this.background.draw()
    }
}
    

