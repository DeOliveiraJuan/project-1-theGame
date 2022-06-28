class Player {
    constructor() {
        this.ctx = ctx;
        this.x = CANVAS_WIDTH / 3;
        this.y = CANVAS_HEIGHT / 1.2;
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        this.img.src = "../images/riderPurpleNB.png"

        this.vx = 2;
        this.vy = 2;

        this.actions = {
            w: false,
            s: false,
            d: false,
            a: false
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
        this.applyActions()
        if(this.actions.w) {
            this.y -= this.vy
        } else if (this.actions.s) {
            this.y += this.vy
        } else if (this.actions.d) {
            this.x += this.vx 
        } else if (this.actions.a) {
            this.x -= this.vx
        }
    }

    applyActions()  {
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
    }
}