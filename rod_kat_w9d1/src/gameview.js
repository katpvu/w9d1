class GameView {
    constructor(ctx) {
        this.game = new Game;
        this.ctx = ctx;
    }

    start()  {
        let that = this;
        function fcn() {
            that.game.step();
            that.game.draw(that.ctx);
        }
        window.setInterval(fcn.bind(this), 20);
    } 
}       
import Game from './game';
export default GameView;