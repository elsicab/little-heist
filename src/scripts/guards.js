class Guard{
    constructor(dimensions){
        this.dimensions = dimensions;
        this.frameX = 0; 
        this.frameY = 0; 
        this.spriteHeight = 410;
        this.spriteWidth = 312;
        this.height = this.spriteHeight / 4;
        this.width = this.spriteWidth / 4;
        this.x = this.dimensions.width;
        this.y = Math.floor(Math.random() * ((this.dimensions.height -100) - 300) + 300);
        this.guardImg = new Image();
        this.guardImg.src = 'src/assets/cop.png';
        this.counter = 0;

    }

    drawGuard(ctx) {
        // ctx.drawImage(this.guardImg, this.x, this.y, this.height, this.width);
        ctx.drawImage(this.guardImg, this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
        if(this.counter < 7){
            this.counter ++ 
        }else{
            if (this.frameX < 8) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
            this.counter = 0; 
        }
        // if(this.x > 0){
            this.x--;
        // }
        // else{
        //     this.x++; //? never comes back 
        // }
            
    }
    animate(ctx){
        // ctx.clearRect(this.x, this.y, this.spriteHeight/5, this.spriteWidth) //?
        this.drawGuard(ctx);
    }
    
};


export default Guard;