// src/moving_object.js
import * as Util from "./util.js";
class MovingObject {
    constructor(options) {
        console.log(options)
        this.pos = options.pos; //[30, 30]
        this.vel = options.vel; //[10, 10]
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.pos = this.game.wrap(this.pos);
    }

    isCollidedWith(otherObject) {
        return Util.distance(this.pos, otherObject.pos) <= this.radius
    }

    collideWith(otherObject) {
        this.game.remove(this);
        this.game.remove(otherObject);
    }
}

  
export default MovingObject;
