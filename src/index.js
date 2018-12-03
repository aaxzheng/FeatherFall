import {drawPlayer, movement} from './player';
import Obstacle from './obstacle'

document.addEventListener("DOMContentLoaded", () => {
  let img = new Image();
  img.src = "../assets/ROfalcon.png";
  img.onload = function() {
    init();
  };



  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const obs1 = new Obstacle(ctx,0,900);
  const obs2 = new Obstacle(ctx,0,1300);
  const obs3 = new Obstacle(ctx,0,1700);
  const obs4 = new Obstacle(ctx,0,2100);

  canvas.tabIndex = 1;
  let playerX = 250
  let playerY = 40

  let offsetX = 0
  let offsetY = 0
  let scrollY = -0.75

  function draw() {
    ctx.save();
    if (offsetY + scrollY <= -2500) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = -1.5;
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    ctx.clearRect(-offsetX,-offsetY, 300,10000);
    playerBounds();
  }

  function playerBounds() {
    if (playerY - 3 < 1 - offsetY) {
      playerY += 2;
    } else if (playerY + 3 > canvas.height - offsetY - 40) {
      playerY -= 4;
    }
  }

  function changeDirection() {
    scrollY = 2.25;
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
    drawSprite(imgIndex[idx]);
    const ob1 = obs1.render();
    const ob2 = obs2.render();
    const ob3 = obs3.render();
    const ob4 = obs4.render();
    let x = 0;
    let y = 200;

    ctx.fillRect(0,500,150,300);
    ctx.fillRect(550,500,150,300);
    idx++
    if (idx > imgIndex.length - 1) {
      idx = 0;
    }
    window.requestAnimationFrame(step);
  }

  function drawSprite(idx) {
    let width = 86;
    let height = 45;
    ctx.drawImage(img,width*idx,198,80,80,playerX,playerY,65,65);
  }
  function init() {
    window.requestAnimationFrame(step);
  }


  // movement(playerX,playerY,offsetY);
  canvas.addEventListener('keydown', function(e) {
         if (e.keyCode === 37) {

            if (playerX - 3 < 0) {
              playerX += 2;
            } else {
              playerX -= 10;
            }
         } else if (e.keyCode === 39) {
             if (playerX + 3 > 660) {
               playerX -= 3;
             } else {
               playerX += 10
             }

         } else if (e.keyCode === 38) {
           if(playerY - 3 < 1 - offsetY) {
             playerY += 1;
           } else {
             playerY -= 12;
           }
         } else if (e.keyCode === 40) {
             if(playerY + 3 > canvas.height - offsetY - 50) {
               playerY -= 4;
             } else {
               playerY += 8;
             }
         } else {
           return;
         }
     }, false);
     draw();
     setInterval(draw,15);

});
