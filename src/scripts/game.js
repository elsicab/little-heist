import Player from './player';
import Coins from './coins';
import Guard from './guards';

class Game{
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart(this.ctx); 
        // this.coins = [];
        this.score = 0;
      
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
        this.coin2 = new Coins(this.dimensions);
        this.coin3 = new Coins(this.dimensions);
        this.coin4 = new Coins(this.dimensions);
        this.coin5 = new Coins(this.dimensions);
        this.coin6 = new Coins(this.dimensions);
        this.coin7 = new Coins(this.dimensions);
        this.coin8 = new Coins(this.dimensions);
        this.coin9 = new Coins(this.dimensions);
        this.coin10 = new Coins(this.dimensions);
        this.guard = new Guard(this.dimensions);
        this.guard2 = new Guard(this.dimensions)
        // this.coins = [];
        // console.log(this)
        // this.addCoins();
        this.animate();
    }

    registerEvents(){
        window.addEventListener("keydown", this.keyPressed.bind(this));
        window.addEventListener("keyup", this.keyReleased.bind(this));
    }

    keyPressed(e){
        this.player.keyDown(e);
    }

    keyReleased(e){
        this.player.keyUp(e);
    }

    drawScore(){
        this.ctx.font = "30px Lato";
        this.ctx.fillStyle = "#5DADE2";
        this.ctx.fillText("Score: "+ this.score, 20, 40);
    }

    // addCoins(){
    //     for(let i = 0; i < 10; i++){
    //         console.log(this)
    //         this.coins.push(new Coins(this.dimensions));
    //     }
    // }

    animate(){
        this.ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
        this.player.animate(this.ctx);
        this.coin.animate(this.ctx);
        this.coin2.animate(this.ctx);
        this.coin3.animate(this.ctx);
        this.coin4.animate(this.ctx);
        this.coin5.animate(this.ctx);
        this.coin6.animate(this.ctx);
        this.coin7.animate(this.ctx);
        this.coin8.animate(this.ctx);
        this.coin9.animate(this.ctx);
        this.coin10.animate(this.ctx);
        this.guard.animate(this.ctx);
        this.guard2.animate(this.ctx);
        // for(let i = 0; i < this.coins.length; i++){
        //     this.coins[i].animate(this.ctx);
        //     // console.log(this.coins[i]);
        // }
       
        this.drawScore();
        requestAnimationFrame(this.animate.bind(this));

    }

    
    
}

export default Game;