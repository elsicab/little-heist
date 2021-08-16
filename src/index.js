import Game from './scripts/game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');

    // let ctx = canvas.getContext("2d");
    canvas.width = 900; 
    canvas.height = 600; 
    var image = 'src/assets/emptyOffice.jpg'


    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundImage = 'url('+image+')';

    
    new Game(canvas);

    // canvas.addEventListener('keydown', function(e){

    // });
});

