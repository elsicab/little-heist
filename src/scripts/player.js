class Player{

    constructor(dimensions){
        this.dimensions = dimensions;
        this.frameX = 0; 
        this.frameY = 0; 
        this.spriteHeight = 625;
        this.spriteWidth = 625;
        this.x = 0;
        this.y = 460;
        this.playerImg = new Image();
        // this.playerImg.src = 'src/assets/thief.png';
        this.playerImg.src = 'src/assets/player.png';
        this.counter = 0;
        this.keys = [];
    }

    drawPlayer(ctx) {
        
        ctx.drawImage(this.playerImg, this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
        if(this.counter < 3){
            this.counter ++ 
        }else{
            if (this.frameX < 5) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
            this.counter = 0; 
        }
    }

    keyDown(e){
        this.keys[e.key] = true;
    }

    keyUp(e){
        delete this.keys[e.key];
    }

    movePlayer(){
        if(this.keys['ArrowUp']){
            this.y -= 2;
        }
        if(this.keys['ArrowDown']){
            this.y += 2;

        }
        if(this.keys['ArrowRight']){
            this.x += 2;
        }
        if(this.keys['ArrowLeft']){
            this.x -= 2;
        }
    }

    animate(ctx){
        this.movePlayer();
        this.drawPlayer(ctx);
    }

    
    
};
// window.addEventListener('keydown', function(e){
//     keys[e.key] = true;
// });
// window.addEventListener('keyup', function(e){
//     delete keys[e.key];
// });




export default Player;
