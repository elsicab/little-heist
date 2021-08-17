class Guard{
    constructor(dimensions){
        this.dimensions = dimensions;
        this.frameX = 0; 
        this.frameY = 0; 
        this.spriteHeight = 410;
        this.spriteWidth = 312;
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
            
        // if (this.frameX < 8) {
        //     this.frameX++;
        // } else {
        //     this.frameX = 0;
        // }
        if(this.x < this.dimensions.width + this.spriteWidth/4){
            this.x -= 1;
        }
        else{
            this.x = this.dimensions.width; //? never comes back 
        }
            
    }
    animate(ctx){
        // ctx.clearRect(this.x, this.y, this.spriteHeight/5, this.spriteWidth) //?
        this.drawGuard(ctx);
    }

    
};

// window.addEventListener("keydown", function (e){ //e is the same as event object
//     keys[e.key] = true;
// });
// window.addEventListener("keyup", function (e) { 
//     delete keys[e.key];
// });


export default Guard;