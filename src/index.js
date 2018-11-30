import {drawPlayer, movement} from './player';

document.addEventListener("DOMContentLoaded", () => {
  let img = new Image();
  img.src = "../assets/ROfalcon.png";
  img.onload = function() {
    init();
  };



  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.tabIndex = 1;
  let playerX = 150
  let playerY = 250

  let offsetX = 0
  let offsetY = 0
  let scrollY = -0.75

  function draw() {
    ctx.save();
    if (offsetY + scrollY <= -800) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = -0.75
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    // ctx.clearRect(-offsetX,-offsetY, 300,10000);
    playerBounds();
  }

  function changeDirection() {
    scrollY = 0.75
  }


  function playerBounds() {
    if (playerY - 3 < 1 - offsetY) {
      playerY += 2;
    } else if (playerY + 3 > canvas.height - offsetY - 40) {
      playerY -= 4;
    }
  }


  let imgIndex = [1,2,3,4,5,6];
  let idx = 0;
  let frameCount = 0;
  function step() {
    ctx.beginPath();
    frameCount++;
    if (frameCount < 6) {
      window.requestAnimationFrame(step);
      return;
    }
     frameCount = 0;
     ctx.clearRect(-offsetX,-offsetY, canvas.width,canvas.height);

    drawSprite(imgIndex[idx]);
    ctx.fillRect(140,200,20,10);
    idx++;
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
  //   let index = [1,2,3,4,5,6];
  //   let width = 86;
  //   let height = 45;
  //   let scaledWidth = width * index;
  //   let scaledHeight = height * index;
  //   // ctx.drawImage(img,0,0,94,45,0,0,64,64)
  //   // ctx.drawImage(img,width,0,width,height,0,0,64,64)
  //   for (let i = 0; i < index.length; i++) {
  //     ctx.drawImage(img,width*i,200,64,50,0,0,50,50)
  //   }
  //

  // movement(playerX,playerY,offsetY);
  canvas.addEventListener('keydown', function(e) {
         if (e.keyCode === 37) {

            if (playerX - 3 < 0) {
              playerX += 2;
            } else {
              playerX -= 8;
            }
         } else if (e.keyCode === 39) {
             if (playerX + 3 > 660) {
               playerX -= 3;
             } else {
               playerX += 8
             }

         } else if (e.keyCode === 38) {
           if(playerY - 3 < 1 - offsetY) {
             playerY += 1;
           } else {
             playerY -= 8;
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
     setInterval(draw,10);

});
