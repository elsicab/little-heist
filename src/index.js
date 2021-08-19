import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');

    // let ctx = canvas.getContext("2d");
    canvas.width = 900; 
    canvas.height = 600; 

    //Game
    var image = 'src/assets/emptyOffice.jpg'
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundImage = 'url('+image+')';

    //Start Screen
    const startGame = document.getElementById('startGame');
    var startImage = 'src/assets/bank2.jpg'
    startGame.style.backgroundRepeat = "no-repeat";
    startGame.style.backgroundImage = 'url(' + startImage + ')';

    //End Screen
    const endGame = document.getElementById('endGame');
    var endImage = 'src/assets/gameOver.jpg'
    endGame.style.backgroundRepeat = "no-repeat";
    endGame.style.backgroundImage = 'url(' + endImage + ')';

    //Win Game
    const winGame = document.getElementById('winGame');
    var winImage = 'src/assets/win.jpg'
    winGame.style.backgroundRepeat = "no-repeat";
    winGame.style.backgroundImage = 'url(' + winImage + ')';

    new Game(canvas);


});

