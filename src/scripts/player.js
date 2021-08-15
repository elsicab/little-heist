class Player{
    constructor(dimensions){
        console.log('in player const.');
        this.dimensions = dimensions;
        this.height = 100; 
        this.width = 100; 
        this.x = 0; 
        this.y = 500; 
        // this.moving = false; 
        this.speed = 4;
        this.playerImg = new Image();
        this.playerImg.src = './src/assets/Idle/Idle0001.png';
        this.registerEvents();
        this.keys = [];
    }

    drawPlayer(ctx) {

        ctx.drawImage(this.playerImg, this.x, this.y, this.height, this.width);
    }

    // movePlayer(){

    // }

    animate(ctx){
        // ctx.clearRect(0,0, canvas.width, canvas.height)
        this.movePlayer();
        this.drawPlayer(ctx);
    }

    movePlayer(){
        if(this.keys[38]){
            this.y -= this.speed;
        }
        if(this.keys[37]){
            this.x -= this.speed;
        }
    }

    // function animate(){
    //     ctx.clearRect(0,0,canvas.width, canvas.height);
    //     ctx.fillStyle = "#c8d6e5";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height)
    //     ctx.drawImage(playerImg, 0, 0, 100, 100);
    //     requestAnimationFrame(animate);

    // }
    // animate();
    // registerEvents(){
    //     window.addEventListener("keydown", function (e) { //e is the same as event object
    //         this.keys[e.key] = true;
    //     });
    //     window.addEventListener("keyup", function (e) {
    //         delete this.keys[e.key];
    //     });
    // }
    
};

// window.addEventListener("keydown", function (e){ //e is the same as event object
//     keys[e.key] = true;
// });
// window.addEventListener("keyup", function (e) { 
//     delete keys[e.key];
// });


export default Player;
