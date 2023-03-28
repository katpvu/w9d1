console.log("Webpack is working!")

let canvas = document.getElementById('game-canvas');
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;
const ctx = canvas.getContext('2d');


// let m = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
//   });
// m.draw(ctx);
// m.move();
// for (let i = 0; i < 20; i++) {
//     m.move();
//     m.draw(ctx)
// }

// let a = new Asteroid([30, 30]);
// a.draw(ctx);

// let g = new Game();
// g.draw(ctx);
// g.moveObjects();

let gv = new GameView(ctx);
gv.start();




import MovingObject from "./movingobject.js";
import Asteroid from "./asteroid.js";
window.MovingObject = MovingObject;
import Game from "./game.js";
import GameView from "./gameview";