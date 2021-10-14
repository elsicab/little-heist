# Little Heist
Coin collection and obstacle avoidance mini-game.

![App Overview Gid](https://media.giphy.com/media/YAs2TAr98EAAVLoEjQ/giphy.gif)

## Background
Little Heist is a mini-game which attempts to mimic the style of a coin collection and obstacle avoidance game. The objective is to have the player reach the next level by collecting coins and avoiding the guards. The game ends when the player is caught by the guard. The game is won when the player collects 30 coins. 
* Level 1 - 10 coins 
* Level 2 - 20 coins
* Level 3 - 30 coins

#### Check it out: [Little Heist](https://elsicab.github.io/little-heist/)

## Functionality & MVPs</h3>
In Little Heist, users will be able to:
* Start, pause and restart the game.
* Move character up, down, left and right taking rule set into account.
* Interact with guards will move in  unique patterns automatically.
* Walk through coins and collect them automatically.
* Enter next level by collecting a set amount of coins.
* Move through the map without going through walls through game collision logic.In the event of a collision, the player will remain in place until the direction of movement is changed.
* Collide with the guards which will cause an immediate Game Over.
    
In addition, this projet will include: 
* A README document.
* An Introduction document describing the game's rules and objective.

## Code Snippets
* Collision detection between player and guards - Collision detection is the heart functionality of Little Heist. As each frame is drawn, each guards' position will be compared to the player's position. If there is a collision within the x or y-axis, the game will end. Here, obj1 refers to the player and obj2 refers to the guard being compared. The same logic is used to detect collision with coins in order to collect them. 
```javascript 
collisionDetectionGuard(obj1, obj2) {

        if (!(obj1.x > (obj2.x + obj2.width) - 60 ||
            (obj1.x + obj1.width) - 60 < obj2.x ||
            obj1.y > (obj2.y + obj2.height) - 100 ||
            (obj1.y + obj1.height) - 100 < obj2.y)) {
            return true;

        };
    };
```
* Level difficulty increase - To make the game more challenging, the speed in which the guards are produced increases as the levels increase. In level one, guards are produced every 250 frames, in level two they appear after 150 frames and in level three after 100 frames. If at anypoint a collision occurs between the player and a guard, the game ends. 
```javascript 
handleGuards(ctx){
        if(this.level === 1){
            if(this.frames % 250 === 0){
                this.guardsArr.push(new Guard(this.dimensions));
            }
        } else if (this.level === 2){
            if (this.frames % 150 === 0) {
                this.guardsArr.push(new Guard(this.dimensions));
            }
        }else{
            if (this.frames % 100 === 0) {
                this.guardsArr.push(new Guard(this.dimensions));
            }
        }
        for (let i = 0; i < this.guardsArr.length; i++) {
            this.guardsArr[i].animate(ctx);   
            if (this.guardsArr[i] && this.player && this.collisionDetectionGuard(this.player, this.guardsArr[i])) {
                this.gameOver = true;
                this.gameEnded = true;
            };         
        };
    };
```

## Wireframes 
<img src="Homepage-2x.png" style="margin-left: 10%; max-width: 300px;">
* Game introduction will detail the main objective of the game as well as its rules.  
* Controls will include the Start, Pause and Quit buttons.
* Links will include links to the Github repo as well as my LinkedIn. 
* Score will keep track of amount of coins collected.


## Technologies, Libraries, APIs
This project will be implemented with the following technologies:
* Canvas API
* Webpack
* Babel
* npm

## Implementation Timeline
* Friday-Sunday: Do initial setup for project and verify that all parts are working. Soend time researching and becoming familiar with Canvas and three.js. By weekend's end, be able to render a preliminary version of the board and basic cells.
* Monday: Spend day working on and perfecting functionality of the board and its cells for level 1. Ensuring the correct actions and rendering are taking place.
* Tuesday: Dedicate day to perfecting the logic and rendering of levels 2 and 3. Ensure the game is playable from beginning to end the way it was meant to be.
* Wednesday: Focus on styling and perfecting visuals and animation. Create and test user buttons to start, pause and quit the game.
* Thursday: Host game and ensure all works properly. Dedicate time to any last minute adjustments.

## Bonus Features
Possible future updates may include:
* Add option for player to chose level of difficulty.
* Increase number of levels to five.
* Create and display a High Scores chart.
* Add sounds/ music to follow gameplay.
