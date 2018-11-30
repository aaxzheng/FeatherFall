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
  let playerX = 250
  let playerY = 40

  let offsetX = 0
  let offsetY = 0
  let scrollY = -0.75

  function draw() {
    ctx.save();
    if (offsetY + scrollY <= -1000) {
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


  let imgIndex = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6];
  let idx = 0;
  let frameCount = 0;
  function step() {
    ctx.beginPath();
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(step);
      return;
    }
     frameCount = 0;
     ctx.clearRect(-offsetX,-offsetY, canvas.width,canvas.height);

    drawSprite(imgIndex[idx]);
    let x = 0
    let y = 200
    let y2 = 600
    ctx.fillRect(x,y2,80,250);  //left
    ctx.fillRect(x+600,y2,100,250); //right
    ctx.fillRect(x+80,y2,45,40); //left-notch1
    ctx.fillRect(x+80,y2+210,45,40); //left-notch2
    ctx.fillRect(x+200,y2,300,40); //mid-top
    ctx.fillRect(x+200,y2+210,300,40); //mid-bot
    ctx.fillRect(x+420,y2,80,250);//mid-column

    ctx.fillRect(x,y,100,250);  //left
    ctx.fillRect(x+620,y,80,250); //right
    ctx.fillRect(x+600,y,45,40); //left-notch1
    ctx.fillRect(x+600,y+210,45,40); //left-notch2
    ctx.fillRect(x+200,y,310,40); //mid-top
    ctx.fillRect(x+200,y+210,310,40); //mid-bot
    ctx.fillRect(x+200,y,80,250);//mid-column


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
