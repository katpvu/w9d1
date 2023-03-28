class Game {
    static DIM_X = 1000;
    static DIM_Y = 750;
    static NUM_ASTEROIDS = 30;

    constructor () {
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid(this.randomPosition(), this));
        }
    }
  
    randomPosition() {
      let pos = [];
      pos.push(Math.floor(Math.random() * Game.DIM_X))
      pos.push(Math.floor(Math.random() * Game.DIM_Y))
      return pos;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 1000, Game.DIM_Y);
        this.asteroids.forEach((asteroid) => {
            asteroid.draw(ctx)
        })
    }

    moveObjects() {
        this.asteroids.forEach((asteroid) => {
            asteroid.move()
        })
    }

    wrap(pos) {
        let newPos;
        newPos = [pos[0] % Game.DIM_X, pos[1] % Game.DIM_Y]
        return newPos;
    }

    checkCollisions() {
        for (let i = 0; i < this.asteroids.length; i++) {
            for (let j = 0; j < this.asteroids.length; j++) {
                if (i < j) {
                    if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                        this.asteroids[i].collideWith(this.asteroids[j]);
                    };
                }
            }
        }
    }

    step() {
        this.moveObjects();
        this.checkCollisions();
    }

    remove(asteroid) {
        let index = this.asteroids.indexOf(asteroid)
        if (index > -1) {
            this.asteroids.splice(index, 1)
        }
    }

  }

  export default Game;
  import Asteroid from "./asteroid";

