import Player from './player';
import Obstacle from './obstacle'
import Collectable from './collectable';
import Treasure from './treasure';
import Snowflakes from './snowflakes';

document.addEventListener("DOMContentLoaded", () => {

  function game () {


  const img = new Image();
  img.src = "../FeatherFall/assets/ROfalcon.png";
  img.onload = function() {
    init();
  };
  const canvas = document.getElementById('canvas');
  const offscreenCanvas = document.createElement('canvas');
  const context = offscreenCanvas.getContext('2d');
  offscreenCanvas.width = "700";
  offscreenCanvas.height = '6000';
  canvas.tabIndex = 1;
  let offsetX = 0
  let offsetY = 0
  let scrollY = -.85
  const ctx = canvas.getContext('2d');
  const snow = new Snowflakes(canvas,ctx,offsetY);
  snow.fillParticles();
  const obs1 = new Obstacle(context,ctx,0,400);
  const obs2 = new Obstacle(context,ctx,0,1000);
  const obs3 = new Obstacle(context,ctx,0,1600);
  const obs4 = new Obstacle(context,ctx,0,2200);
  const obs5 = new Obstacle(context,ctx,0,2800);
  const obs6 = new Obstacle(context,ctx,0,3400);
  const obs7 = new Obstacle(context,ctx,0,4200);
  const obs8 = new Obstacle(context,ctx,0,5000);


  const player = new Player(img,320,100,offsetY);

  function draw() {
    canvas.focus();
    ctx.clearRect(-offsetX,-offsetY, 700,6000);
    fillOffscreen();
    ctx.save();
    ctx.beginPath();
    ctx.drawImage(offscreenCanvas,0,0);
    moveCharacter();
    if (offsetY + scrollY <= -5400) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = 0;
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    ctx.closePath();
    playerBounds();
    updateStatus();
    checkDeath();
    window.requestAnimationFrame(draw);
  }


  function fillOffscreen() {
    obs1.borderWall(player);
    let x = 0;
    let y = 100;

    obs1.render(player,offsetX,offsetY);
    obs2.render(player,offsetX,offsetY);
    obs3.render(player,offsetX,offsetY);
    obs4.render(player,offsetX,offsetY);
    obs5.render(player,offsetX,offsetY);
    obs6.render(player,offsetX,offsetY);
    obs7.render(player,offsetX,offsetY);
    obs8.render(player,offsetX,offsetY);

    return offscreenCanvas;
  }

  function playerBounds() {
    if (player.playerY - 3 < 1 - offsetY) {
      player.playerY += 2;
    } else if (player.playerY + 3 > canvas.height - offsetY - 40) {

      player.playerY -= 4;
    }
  }

  function changeDirection() {
    scrollY = 1.65;
    // ctx.clearRect(-offsetX,-offsetY, 700,3000);
  }




  let imgIndex = [1,1,1,1,1,1,
                  2,2,2,2,2,2,
                  3,3,3,3,3,3,
                  4,4,4,4,4,4,
                  5,5,5,5,5,5,
                  6,6,6,6,6,6];
  let idx = 0;
  let frameCount = 0;

  function step() {
    frameCount++;
    if (frameCount < 1) {
      // console.log(frameCount);
      window.requestAnimationFrame(step);
      return;
    }
    ctx.beginPath();
     frameCount = 0;
      snow.draw(offsetY);
      player.drawSprite(ctx,imgIndex[idx],leftArrow,rightArrow);
      ctx.closePath();

      // ctx.clearRect(-offsetX,-offsetY, 700,3000);
    let x = 0;
    let y = 200;

    idx++
    if (idx > imgIndex.length - 1) {
      idx = 0;
    }
    window.requestAnimationFrame(step);
  }


  function init() {
    window.requestAnimationFrame(step);
  }

  // let gameKeys = [];
  let upArrow = false;
  let rightArrow = false;
  let downArrow = false;
  let leftArrow = false;
  let space = false;
  // movement(playerX,playerY,offsetY);
  canvas.addEventListener('keyup', function(e) {
    // gameKeys[e.keyCode] = false;
    if (e.keyCode == 38) {
      upArrow = false;
    }
    if (e.keyCode == 37) {
      leftArrow = false;
    }
    if (e.keyCode == 39) {
      rightArrow = false;
    }
    if (e.keyCode == 40) {
      downArrow = false;
    }
    // if (e.keyCode == 32) {
    //   space = true;
    // }

  })
  canvas.addEventListener('keydown', function(e) {
    // gameKeys = gameKeys || [];
    // gameKeys[e.keyCode] = true;
    if (e.keyCode == 38) {
      upArrow = true;
    }
    if (e.keyCode == 37) {
      leftArrow = true;
    }
    if (e.keyCode == 39) {
      rightArrow = true;
    }
    if (e.keyCode == 40) {
      downArrow = true;
    }
    if (e.keyCode == 32) {
      space = true;
    }
   }, false);
   function moveCharacter() {
     if (rightArrow) {
       if (player.playerX + 3 > 660) {
         player.playerX -= 5;
       } else {
         player.playerX += 2
         if (space && player.dashReady > 0) {
           player.dashReady -= 1
           let interval =  setInterval(() => player.dashRight(),20);
           setTimeout(() => player.stopDash(interval),360);
         }
         space = false
       }

     }
     if (leftArrow) {

        if (player.playerX - 3 < 0) {
          player.playerX += 5;
        } else {
          player.playerX -= 2;
          if (space && player.dashReady > 0) {
            player.dashReady -= 1
            let interval =  setInterval(() => player.dashLeft(),20);
            setTimeout(() => player.stopDash(interval),360);
          }
          space = false
        }
     }
      if (upArrow) {
       if(player.playerY - 3 < 1 - offsetY) {
         player.playerY += 5;
       } else {
         player.playerY -= 2.25;
         if (space && player.dashReady > 0) {
           player.dashReady -= 1
           let interval =  setInterval(() => player.dashUp(),20);
           setTimeout(() => player.stopDash(interval),360);
         }
         space = false
       }
     }
      if (downArrow) {
         if(player.playerY + 3 > canvas.height - offsetY - 50) {
           player.playerY -= 5;
         } else {
           player.playerY += 1.75;
           if (space && player.dashReady > 0) {
             player.dashReady -= 1
             let interval =  setInterval(() => player.dashDown(),20);
             setTimeout(() => player.stopDash(interval),360);
           }
           space = false
         }
       }
   }



     draw();
    window.requestAnimationFrame(draw);

    function updateStatus() {
      player.tallyScore();
      document.getElementById('score').innerHTML= `Score: ${player.score}`;
      document.getElementById('dash').innerHTML= `Dashes: ${player.dashReady}`;
      document.getElementById('coins').innerHTML= `Crystals Collected: ${player.coins}`;
      document.getElementById('hp').innerHTML= `Health: ${player.health}`;
      document.getElementById('jewels').innerHTML= `Clusters: ${player.jewels}`
    }

    function checkDeath() {
      if (player.health <= 0 || player.outOfBounds(canvas,offsetY)) {
        ctx.clearRect(-offsetX,-offsetY,700,10000);
        context.clearRect(-offsetX,-offsetY,700,10000);
        document.location.reload();
        // game();
      } else {
        return;
      }
    }
  }
  game();
});
