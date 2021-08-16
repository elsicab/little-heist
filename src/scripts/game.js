import Player from './player';
import Coins from './coins';
import Guard from './guards';

class Game{
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart(this.ctx); 
      
    }

    restart(ctx){
        console.log('in restart');
        this.running = false; 
        this.score = 0;  
        // ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
        // ctx.fillStyle = "#c8d6e5";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.player = new Player(this.dimensions);
        this.coin = new Coins(this.dimensions);
        this.guard = new Guard(this.dimensions);

        this.animate();
    }

    animate(){
        this.player.animate(this.ctx);
        this.coin.animate(this.ctx);
        this.guard.animate(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

    }



    
}
export default Game;