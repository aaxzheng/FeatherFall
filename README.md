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
A small snippet of how the player is able to control the avatar based on direction
![image](https://user-images.githubusercontent.com/40276721/50575988-5adb6180-0dd6-11e9-815d-01e9010ca9dd.png)


   Another snippet of how collision is detected per obstacle
![image](https://user-images.githubusercontent.com/40276721/50576001-b4dc2700-0dd6-11e9-8d2c-352b2dd4ce06.png)


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
