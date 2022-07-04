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
        this.bgAudio = new Audio()
        this.bgAudio.src = "/audio/tranceLoop.wav"
        this.bgAudio.volume = 0.3;
        this.bgAudio.loop = true;
        this.bgAudioMoto = new Audio()
        this.bgAudioMoto.src = "/audio/vespaSoundFinal.mp3"
        this.bgAudioMoto.volume = 0.5;
        this.bgAudioMoto.loop = true;
        this.gameOverAudio = new Audio()
        this.gameOverAudio.src = "/audio/coffinDance.mp3"
        this.gameOverAudio.volume = 0.5;
        this.gameOverAudio.loop = true;
        this.explotionAudio = new Audio()
        this.explotionAudio.src = "/audio/explotion.wav"
        this.explotionAudio.volume = 0.5;
    }

start() {
    this.bgAudio.play()
    this.bgAudioMoto.play()
    this.intervalId = setInterval( () => {
        this.clear();
        this.draw();
        this.checkCollisions();
        this.move();
        this.countPoints();
        this.tickObstacle++

        if(this.tickObstacle % 60 === 0) {
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

stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.bgAudio.pause()
    this.bgAudioMoto.pause()
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
        this.explotionAudio.play()
        this.gameOver();
        this.explotion();
     }
  })
}

gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    const gOver = document.querySelector(".game-over")
    
    setTimeout( () => {
    gOver.style.visibility = "visible"; this.gameOverAudio.play();
    }, 1500)

    this.bgAudio.pause()
    this.bgAudioMoto.pause()
  }
}
