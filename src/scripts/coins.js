class Coins{
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.frameX = 2; 
        this.frameY = 0; 
        this.spriteHeight = 1151;
        this.spriteWidth = 171;
        this.x = Math.random() * this.dimensions.width+100;
        this.y = Math.floor(Math.random() * ((this.dimensions.height -120) - 300) + 300);
        this.coinImg = new Image();
        this.coinImg.src = 'src/assets/coin.png';
        this.counter = 0;
    }

    drawCoin(ctx) {
        ctx.drawImage(this.coinImg, this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.spriteWidth/10, this.spriteHeight/10);
        if(this.counter < 12){
            this.counter ++ 
        }else{
            if (this.frameX < 3) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
            this.counter = 0; 
        }
        
    }

    animate(ctx) {
        // ctx.clearRect(this.x,this.y, this.spriteWidth/10, this.spriteHeight/10)
        this.drawCoin(ctx);
        
    }

}

export default Coins;