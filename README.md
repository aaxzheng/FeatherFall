# FeatherFall Proposal
## Object of the Game 
The player will navigate a small avatar down a simple obstacle course as the screen scrolls down. On the way there will be collectables that will add points to the player's score and once the avatar reaches the bottom, the screen will begin to scroll upward and the player will need to navigate the obstacle course backwards.
## MVPs
### Screen Scrolling
The screen should be able to move downward by itself and when it hits the bottom of the "map" will reverse direction
### Player Avatar
Render a player character that has collision detection and will be moved via keybindings
### Obstacles 
Render "walls" that will have collison and will move with the screen
### Collectables 
Render coins that can be collected by the player through collision detection and move with the screen
### Enemies 
Render either static or moving enemies that act as additional obstacles
### Bonus MVPs
#### Score 
Add points according to how many collectables are grabbed and how far the avatar goes.
#### Attacking 
Allow the player to incapacitate or remove enemies from the game
## Technologies 
* Vanilla JS
* Canvas
* Google Firebase** (for scores and rankings)
## WireFrame 
![](https://user-images.githubusercontent.com/40276721/49189346-f5f69c80-f33b-11e8-9c82-7c22df36f036.png)
## Timeline 
### Day 1 
* Screen Scrolling
* Player Avatar
### Day 2
* Obstacles
* Enemies
### Day 3
* Collectables 
* Bonus