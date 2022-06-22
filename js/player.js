class Player {
    constructor() {
        this.ctx = ctx;
        this.x = CANVAS_WIDTH / 3;
        this.y = CANVAS_HEIGHT / 1.2;
        this.w = 70;
        this.h = 70;
        this.img = new Image();
        this.img.src = "../images/Rider.png"

        this.vx = 2;
        this.vy = 2;

        this.actions = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowRight: false,
            ArrowLeft: false
        }
        this.setListeners()
    }

    setListeners() {
        document.onkeydown = e => this.switchAction(e.key, true)
        document.onkeyup = e => this.switchAction(e.key, false)
      }

    switchAction(key, apply) {
        this.actions[key] = apply
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
        if(this.y <= CANVAS_HEIGHT - ROAD_HEIGHT - (this.h/2)) {
            this.y = CANVAS_HEIGHT - ROAD_HEIGHT - (this.h/2);
        } else if (this.y >= CANVAS_HEIGHT - this.h) {
            this.y = CANVAS_HEIGHT - this.h;
        } 
        
        if (this.x >= CANVAS_WIDTH - this.w) {
            this.x = CANVAS_WIDTH - this.w;
        } else if (this.x <= 0) {
            this.x = 0;
        } 

        if(this.actions.ArrowUp) {
            this.y -= this.vy
        } else if (this.actions.ArrowDown) {
            this.y += this.vy
        } else if (this.actions.ArrowRight) {
            this.x += this.vx 
        } else if (this.actions.ArrowLeft) {
            this.x -= this.vx
        }
    }
}