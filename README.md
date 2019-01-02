# FeatherFall
## Object of the Game 
[Live Link](https://aaxzheng.github.io/FeatherFall)\
FeatherFall is a JavaScript-based browser game that utilizes vanilla JavaScript as well as Canvas to render and manipulate a game board. The player will navigate a small avatar down a simple obstacle course as the screen scrolls down. On the way there will be collectables that will add points to the player's score and once the avatar reaches the bottom, the screen will begin to scroll upward and the player will need to navigate the obstacle course backwards.
## Features
  * Smooth 8-way directional movement.
  * A vertical scrolling Canvas that has persistent map elements.
  * Pre-set obstacles are placed in random order everytime the page is reloaded.
  * Every obstacle and collectable has a hitbox and given special collision events when interacting with the player avatar.
  * The player can use the space bar to dash in any direction they choose.
  * The game is over when the player's avatar gets trapped between the viewable screen and an obstacle.
## Code Snippets 
I found that the arrow keys often have a slight delay before committing to a continous input. To avoid stuttering movement and restrictive directional inputs, I used booleans that are changed based on when the key is pressed down and released. 
```javascript    
    checkKeyUp(e) {

        if (e.keyCode == 38) {
          this.upArrow = false;
        }
        if (e.keyCode == 37) {
          this.leftArrow = false;
        }
        if (e.keyCode == 39) {
          this.rightArrow = false;
        }
        if (e.keyCode == 40) {
          this.downArrow = false;
        }
    }
    checkKeyDown(e) {
      if (e.keyCode == 38) {
        this.upArrow = true;
      }
      if (e.keyCode == 37) {
        this.leftArrow = true;
      }
      if (e.keyCode == 39) {
        this.rightArrow = true;
      }
      if (e.keyCode == 40) {
        this.downArrow = true;
      }
      if (e.keyCode == 32) {
        this.space = true;
      }
    }
```
  A small snippet of how the player is able to control the avatar based on direction. The space key is used to modify whether   or not the avatar is dashing at the moment.
```javascript     
     moveCharacter() {
       if (this.rightArrow) {

         if (this.player.playerX + 3 > 660) {
           this.player.playerX -= 8;
         } else {
           this.player.playerX += 4;
           if (this.space && this.player.dashReady > 0) {
             this.player.dashReady -= 1
             let interval =  setInterval(() => this.player.dashRight(),20);
             setTimeout(() => this.player.stopDash(interval),360);
           }
           this.space = false
         }

       }
```  



   Another snippet of how collision is detected per obstacle. Since every slice of the obstacle course is made of individual parts, the collision is detected on each component and pushes back an appropriate amount.
``` javascript     
     checkY(player,partY,height,partX,width) {
         if (player.checkModelY(partY,height) && player.playerY <= partY && player.checkModelX(partX,width)) {
           player.playerY -= 6;
         }
         else if (player.checkModelY(partY,height) && player.playerY >= partY && player.checkModelX(partX,width)) {
           player.playerY += 6;
         } else {
           return;
         }
       }
       checkX(player,x,width,y,height) {
         if (player.checkModelX(x,width) && player.playerX <= x && player.checkModelY(y,height)) {
           player.playerX -= 6;
         }
         else if (player.checkModelX(x,width) && player.playerX >= x && player.checkModelY(y,height)) {
           player.playerX += 6;
         } else {
           return;
         }
       }
```

## Technologies 
* Vanilla JS
* Canvas
## Future Features
 There are a few features I have not had time to implement but would like to in the near future. 
 * Enemies that reduce health and impede player movement.
 * More levels and obstacles.
 * Updates to the character sprite.
 * Keeping record of high scores using Google Firebase.
 * Fix noticeable clipping and other bugs.
