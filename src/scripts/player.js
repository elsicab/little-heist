class Player{

    constructor(dimensions){
        this.dimensions = dimensions;
        this.frameX = 0; 
        this.frameY = 0;
        this.spriteHeight = 625;
        this.spriteWidth = 625;
        this.height = this.spriteHeight / 4;
        this.width = this.spriteWidth / 4;
        this.x = 0;
        this.y = 460;
        this.playerImg = new Image();
        this.playerImg.src = 'src/assets/thief.png';
        this.counter = 0;
        this.keys = [];
    }

    drawPlayer(ctx) {   
        ctx.drawImage(this.playerImg, this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
        // ctx.strokeRect(this.x, this.y, this.frameX * this.spriteWidth,
        //     this.frameY * this.spriteHeight);
        this.frameY = 1;
        if(this.counter < 7){
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
        if(this.keys['ArrowUp'] && this.y > 220){
            this.y -= 2;
            this.frameY = 0;
            if (this.counter < 7) {
                this.counter++
            } else {
                if (this.frameX < 5) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
                this.counter = 0;
            }
        }
        if(this.keys['ArrowDown'] && this.y < this.dimensions.height-140){
            this.y += 2;
            this.frameY = 0;
            if (this.counter < 7) {
                this.counter++
            } else {
                if (this.frameX < 5) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
                this.counter = 0;
            }
        }
        if(this.keys['ArrowRight'] && this.x < this.dimensions.width-110){
            this.x += 2;
            this.frameY = 0;
            if (this.counter < 7) {
                this.counter++
            } else {
                if (this.frameX < 5) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
                this.counter = 0;
            }
        }
        if(this.keys['ArrowLeft'] && this.x > 0){
            this.x -= 2;
            this.frameY = 2;
            if (this.counter < 7) {
                this.counter++
            } else {
                if (this.frameX < 5) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
                this.counter = 0;
            }
        }
    }

    animate(ctx){
        this.movePlayer();
        this.drawPlayer(ctx);
    }

    
    
};
export default Player;
