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
        this.playing = true;
        this.start = false;
        this.registerEvents();
        this.restart();       
    }


    
    restart(){
        this.score = 0;  
        this.player = new Player(this.dimensions);
        this.guardsArr = [];
        this.coinArr = [];
        this.frames = 0;
        this.gameOver = false;
        this.playing = true;
        this.animate();
    }

    collisionDetection(obj1, obj2){
        if( !( obj1.x > obj2.x + obj2.width ||
                obj1.x + obj1.width < obj2.x ||
                obj1.y > obj2.y + obj2.height ||
                obj1.y + obj1.height < obj2.y)){
            return true;
        };
    };

    handleCoins(ctx){
        if(this.frames % 110 === 0){
            this.coinArr.push(new Coins(this.dimensions));
        }
        for (let i = 0; i < this.coinArr.length; i++) {
            this.coinArr[i].animate(ctx);
            if (this.coinArr[i] && this.player && this.collisionDetection(this.player, this.coinArr[i])) {
                console.log('coin collision')
        
                this.score += 1;
                this.coinArr.splice(i, 1);
                i--; //makes sure next element isnt skipped
            };
        };
    };

    handleGuards(ctx){
         if(this.frames % 250 === 0){
            this.guardsArr.push(new Guard(this.dimensions));
        }
        for (let i = 0; i < this.guardsArr.length; i++) {
            this.guardsArr[i].animate(ctx);   
            if (this.guardsArr[i] && this.player && this.collisionDetection(this.player, this.guardsArr[i])) {
                this.gameOver = true;
            };         
        };
    };

    registerEvents(){
        window.addEventListener("keydown", this.keyPressed.bind(this));
        window.addEventListener("keyup", this.keyReleased.bind(this));
        window.addEventListener("keypress", this.startPause.bind(this));
    }

    startPause(e){
        
        if(e.code === 'Enter' && this.frames < 2){
            this.start = true;
            this.animate();
        }

        if(e.code === 'KeyA' && this.start === true){
            this.restart();
        }

        if(e.code === 'Space' && this.gameOver === false && this.frames > 1){
            if (this.playing) {
                this.playing = false;
            } else {
                this.playing = true;
                this.animate();
            };
        };
        if (!this.playing) {
            this.ctx.fillStyle = 'black';
            this.ctx.font = "100px Amatic SC";
            this.ctx.fillText("PAUSED", 350, 300);
        }
        // if(e.code === "Space")
    };

    keyPressed(e){
        this.player.keyDown(e);
    }

    keyReleased(e){
        this.player.keyUp(e);
    }

    drawScore(){
        this.ctx.font = "40px Amatic SC";
        this.ctx.fillStyle = "#5DADE2";
        this.ctx.fillText("Score: "+ this.score, 20, 60);
        if(this.gameOver){
            this.ctx.fillStyle = 'black';
            this.ctx.font = "100px Amatic SC";
            this.ctx.fillText("GAME OVER", 300, 300 );
        }
    }


    animate(){
        if (this.start === true && this.playing === true) {
            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.player.animate(this.ctx);
            // this.guard.animate(this.ctx);
            // this.guard2.animate(this.ctx);
            this.handleGuards(this.ctx);
            this.handleCoins(this.ctx);
            this.frames++;
            this.drawScore();
            if (!this.gameOver) {
                requestAnimationFrame(this.animate.bind(this));
            };
        }else if(!this.start){
            this.ctx.fillStyle = 'black';
            this.ctx.font = "60px Amatic SC";
            this.ctx.fillText("Press ENTER to begin", 500, 550);
        }
    };

    
    
}

export default Game;