import Player from './player';
import Obstacle from './obstacle'

document.addEventListener("DOMContentLoaded", () => {
  const img = new Image();
  img.src = "../FeatherFall/assets/ROfalcon.png";
  img.onload = function() {
    init();
  };



  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const obs1 = new Obstacle(ctx,0,400);
  const obs2 = new Obstacle(ctx,0,1000);
  const obs3 = new Obstacle(ctx,0,1600);
  const obs4 = new Obstacle(ctx,0,2200);
  canvas.tabIndex = 1;

  let offsetX = 0
  let offsetY = 0
  let scrollY = -.750
  const player = new Player(img,150,0,offsetY);

  function draw() {
    ctx.save();
    if (offsetY + scrollY <= -2400) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = -0.75;
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    ctx.clearRect(-offsetX,-offsetY, 300,10000);
    playerBounds();
    window.requestAnimationFrame(draw);
  }

  function playerBounds() {
    if (player.playerY - 3 < 1 - offsetY) {
      player.playerY += 2;
    } else if (player.playerY + 3 > canvas.height - offsetY - 40) {
      player.playerY -= 4;
    }
  }

  function changeDirection() {
    scrollY = 1.25;
    ctx.clearRect(-offsetX,-offsetY, 300,10000);
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
    ctx.beginPath();
    frameCount++;
    if (frameCount < 1) {
      window.requestAnimationFrame(step);
      return;
    }
     frameCount = 0;

    ctx.clearRect(-offsetX,-offsetY, canvas.width,canvas.height);
    player.drawSprite(ctx,imgIndex[idx]);
    obs1.borderWall(player)
      obs1.render(player,offsetX,offsetY);
      obs2.render(player,offsetX,offsetY);
      obs3.render(player,offsetX,offsetY);
      obs4.render(player,offsetX,offsetY);
    let x = 0;
    let y = 100;


    // ctx.fillRect()
    idx++
    if (idx > imgIndex.length - 1) {
      idx = 0;
    }
    window.requestAnimationFrame(step);
  }


  function init() {
    window.requestAnimationFrame(step);
  }


  // movement(playerX,playerY,offsetY);
  canvas.addEventListener('keydown', function(e) {
         if (e.keyCode === 37) {

            if (player.playerX - 3 < 0) {
              player.playerX += 2;
            } else {
              player.playerX -= 10;
            }
         } else if (e.keyCode === 39) {
             if (player.playerX + 3 > 660) {
               player.playerX -= 3;
             } else {
               player.playerX += 10
             }

         } else if (e.keyCode === 38) {
           if(player.playerY - 3 < 1 - offsetY) {
             player.playerY += 1;
           } else {
             player.playerY -= 12;
           }
         } else if (e.keyCode === 40) {
             if(player.playerY + 3 > canvas.height - offsetY - 50) {
               player.playerY -= 4;
             } else {
               player.playerY += 8;
             }
         } else {
           return;
         }
     }, false);
     draw();
    window.requestAnimationFrame(draw);

});
