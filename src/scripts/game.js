import Player from './player';
import Coins from './coins';

class Game{
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.player = new Player(this.dimensions); 
        // this.player.drawPlayer(this.ctx);
        this.restart(this.ctx); 
      
    }

    // play(){
    //     this.runninng = true; 
    //     this.animate();
    // }

    restart(ctx){
        console.log('in restart');
        this.running = false; 
        this.score = 0;  
        // this.level = new Level();
        ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
        ctx.fillStyle = "#c8d6e5";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.player = new Player(this.dimensions);
        this.coin = new Coins(this.dimensions);

        this.animate();
    }

    animate(){
        this.player.animate(this.ctx);
        this.coin.animate(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

    }



    
}
export default Game;