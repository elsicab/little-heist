class Guard{
    constructor(dimensions){
        this.dimensions = dimensions;
        this.height = 80; 
        this.width = 80; 
        this.x = this.dimensions.width-80;
        this.y = (Math.random() * this.dimensions.height)-20;
        this.speed = 4;
        this.guardImg = new Image();
        this.guardImg.src = 'src/assets/p-run/__Policeman_11. Walk Aim_000.png';

    }

    drawGuard(ctx) {
        ctx.drawImage(this.guardImg, this.x, this.y, this.height, this.width);
        this.x--;
        if(this.x < -100){
            this.x = this.dimensions.width
        }
    }
    animate(ctx){
        // ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.clearRect(this.x, this.y, this.height, this.width)
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