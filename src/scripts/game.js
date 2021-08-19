import Player from './player';
import Coins from './coins';
import Guard from './guards';

class Game{
    constructor(canvas){
        this.canvas = canvas;
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
        this.level = 1;
        this.win = false;
        // this.coinCollect = new Audio('src/assets/coin.mp3');
        // this.gameOverSound = new Audio('src/assets/coin.mp3');
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

    collisionDetectionGuard(obj1, obj2) {

        if (!(obj1.x > (obj2.x + obj2.width) - 75 ||
            (obj1.x + obj1.width) - 75 < obj2.x ||
            obj1.y > (obj2.y + obj2.height) - 100 ||
            (obj1.y + obj1.height) - 100 < obj2.y)) {
            return true;

        };
    };

    

    handleCoins(ctx){
        if (this.level> 1) {
            if (this.frames % 100 === 0) {
                this.coinArr.push(new Coins(this.dimensions));
            }
        }else{
            if(this.frames % 50 === 0){
                this.coinArr.push(new Coins(this.dimensions));
            }
        };
        for (let i = 0; i < this.coinArr.length; i++) {
            this.coinArr[i].animate(ctx);
            if (this.coinArr[i] && this.player && this.collisionDetection(this.player, this.coinArr[i])) {
                this.coinArr.splice(i, 1);
                this.score += 1;
                // console.log('test');
                // this.coinCollect.play();
                if(this.score > 19){
                    this.win = true;
                    this.gameOver = true;
                }
                i--; //makes sure next element isnt skipped
            };
        };
    };

    handleGuards(ctx){
        if(this.level === 1){
            if(this.frames % 250 === 0){
                this.guardsArr.push(new Guard(this.dimensions));
            }
        } else if (this.level === 2){
            if (this.frames % 150 === 0) {
                this.guardsArr.push(new Guard(this.dimensions));
            }
        }else{
            if (this.frames % 100 === 0) {
                this.guardsArr.push(new Guard(this.dimensions));
            }
        }
        for (let i = 0; i < this.guardsArr.length; i++) {
            this.guardsArr[i].animate(ctx);   
            if (this.guardsArr[i] && this.player && this.collisionDetectionGuard(this.player, this.guardsArr[i])) {
                console.log('break - player')
                console.log(this.player.x);
                console.log(this.player.y);
                console.log(this.player.height);
                console.log(this.player.width);
                console.log('break - guard')
                console.log(this.guardsArr[i].x);
                console.log(this.guardsArr[i].y);
                console.log(this.guardsArr[i].height);
                console.log(this.guardsArr[i].width);
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
            const startGame = document.getElementById('startGame');
            startGame.style.display = "none";
            this.canvas.style.display = "block";
            this.animate();
        }

        if(e.code === 'KeyA' && this.start === true){
            const endGame = document.getElementById('endGame');
            endGame.style.display = "none";
            this.canvas.display = "block";
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
            // this.ctx.filter = 'blur(10px)';
            this.ctx.fillStyle = 'black';
            this.ctx.font = "100px Amatic SC";
            this.ctx.fillText("PAUSED", 350, 300);
        };
    };

    keyPressed(e){
        this.player.keyDown(e);
    }

    keyReleased(e){
        this.player.keyUp(e);
    }

    drawScore(){
        if(this.score > 9){
            this.level = 2;
        }
        if(this.score > 14){
            this.level = 3
        }
        this.ctx.font = "40px Amatic SC";
        this.ctx.fillStyle = "#5DADE2";
        this.ctx.fillText("Score: "+ this.score, 20, 60);
        this.ctx.fillText("Level: " + this.level, 160, 60);

        if (this.win) {
            this.ctx.fillStyle = 'black';
            this.ctx.font = "100px Amatic SC";
            this.ctx.fillText("YOU WON", 300, 300);
        }else if(this.gameOver){
            startGame.style.display = "none";
            const endGame = document.getElementById('endGame');
            endGame.style.display = "block";
            const endContext = endGame.getContext('2d');
            endContext.fillStyle = 'black';
            endContext.font = "100px Amatic SC";
            endContext.fillText("GAME OVER", 300, 150);
            endContext.font = "50px Amatic SC";
            endContext.fillText("...You're off to the big house", 375, 200);
            
        }
    }


    animate(){
        if (this.start === true && this.playing === true) {
            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.player.animate(this.ctx);
            this.handleGuards(this.ctx);
            this.handleCoins(this.ctx);
            this.frames++;
            this.drawScore();
            if (!this.gameOver) {
                requestAnimationFrame(this.animate.bind(this));
            };
        }else if(!this.start){
            const startGame = document.getElementById('startGame');
            const startCtx = startGame.getContext('2d');
            startCtx.fillStyle = 'black';
            startCtx.font = "30px Amatic SC";
            startCtx.fillText("Robby the robber is trying to leave the bank....", 20, 50);
            startCtx.fillText("Help him escape those pesky guards.", 20, 100);
            startCtx.font = "35px Amatic SC";
            startCtx.fillText("Press ENTER to start.", 20, 200);
        }
    };

    
    
}

export default Game;