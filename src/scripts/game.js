import Player from './player';
import Coins from './coins';
import Guard from './guards';

class Game{
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.player = new Player(this.dimensions);
        this.guardsArr = [];
        this.coinArr = [];
        this.score = 0;
        this.gameOver = false;
        this.frames = 0;
        this.registerEvents();
        this.restart(this.ctx); 

      
    }

    restart(){
        this.score = 0;  
        this.player = new Player(this.dimensions);
        // this.guard = new Guard(this.dimensions);
        // this.guard2 = new Guard(this.dimensions)
        // this.coins = [];
        // this.addCoins();
        this.animate();
    }

    handleCoins(ctx){
        if(this.frames % 150 === 0){
            this.coinArr.push(new Coins(this.dimensions));
        }
        for (let i = 0; i < this.coinArr.length; i++) {
            this.coinArr[i].animate(ctx);
            
        }
    }

    handleGuards(ctx){
        // debugger
        console.log('HandleGuards')
         if(this.frames % 250 === 0){
            this.guardsArr.push(new Guard(this.dimensions));
            // debugger
        }
        for (let i = 0; i < this.guardsArr.length; i++) {
            // debugger
            this.guardsArr[i].animate(ctx);            
        }
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
    //         this.coins[i].drawCoin(this.ctx);
            
    //     }
    // }

    animate(){
        this.ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
        this.player.animate(this.ctx);
        // this.guard.animate(this.ctx);
        // this.guard2.animate(this.ctx);
        this.handleGuards(this.ctx);
        this.handleCoins(this.ctx);
        this.frames++;
        this.drawScore();
        requestAnimationFrame(this.animate.bind(this));

    }

    
    
}

export default Game;