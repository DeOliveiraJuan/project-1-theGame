class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.backgroundCity = new BackgroundCity(this.ctx);
        this.backgroundRoad = new BackgroundRoad(this.ctx);
        this.player = new Player(this.ctx);
        this.obstacles = [];
        this.tickObstacle = 0;
        this.points = 0;
    }

start() {
    this.intervalId = setInterval( () => {
        this.clear();
        this.draw();
        this.checkCollisions();
        this.move();
        this.countPoints();
        this.tickObstacle++

        if(this.tickObstacle % 50 === 0) {
            this.tickObstacle = 0;
            this.clearObstacles();
            this.addObstacle();
        }
    } , 1000/60)
}

clearObstacles() {
    this.obstacles = this.obstacles.filter(obs => obs.isVisible())
}

addObstacle() {
    this.obstacles.push(new Obstacle(this.ctx))
}

clear() {
    this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height,
    )
}

countPoints() {
    this.points++
    const score = document.getElementById("score")
    score.textContent = this.points
}

draw() {
    this.backgroundCity.draw()
    this.backgroundRoad.draw()
    this.obstacles.forEach(obs => obs.draw());
    this.player.draw()
    }

move() {
    this.backgroundCity.move()
    this.backgroundRoad.move()
    this.player.move()
    this.obstacles.forEach(obs => obs.move());
}

checkCollisions() {
   this.obstacles.forEach((obs, obsIndex) => {
    if(obs.collide(this.player)) {
        this.gameOver();
     }
  })
}

gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.ctx.font = "50px Comic Sans";
    this.ctx.fillStyle = "purple";
    this.ctx.textAlign = "center";
    this.ctx.fillText("GAME OVER", this.ctx.canvas.width/2, this.ctx.canvas.height/2);
    }
}
