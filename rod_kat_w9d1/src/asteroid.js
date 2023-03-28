// src/asteroid.js
import MovingObject from "./movingobject.js";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static RADIUS = 50;
    static COLOR = 'green';

    constructor (callPos, game) {
        let options = {
            pos: callPos,
            color: Asteroid.COLOR,
            radius: Asteroid.RADIUS,
            vel: Util.randomVec(5),
            game: game
        }
        super(options);
    }
    
}


export default Asteroid;
