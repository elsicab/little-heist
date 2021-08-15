import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    canvas.width = 900; 
    canvas.height = 600; 
    // ctx.fillStyle = "#c8d6e5";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    new Game(canvas);

    // const playerImg = new Image();
    // playerImg.src ='src/assets/Idle/Idle0001.png';
    // function animate(){
    //     ctx.clearRect(0,0,canvas.width, canvas.height);
    //     ctx.drawImage(playerImg, 0, 0, 100, 100);
    //     requestAnimationFrame(animate);
        
    // }
    // animate();

});