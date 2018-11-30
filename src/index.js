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
    if (offsetY + scrollY <= -2100) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = -1.5;
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    // ctx.clearRect(-offsetX,-offsetY, 300,10000);
    playerBounds();
  }

  function changeDirection() {
    scrollY = 2.25;
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
    let x = 0;
    let y = 300;
    let y2 = 700;
    let y3 = 1100;
    let y4 = 1700;
    let y5 = 2000;

    // ctx.fillRect(x,y,150,300);
    // ctx.fillRect(x+550,y,150,300);
    // ctx.fillRect(x+150,y,100,50);
    // ctx.fillRect(x+450,y,100,50);
    // ctx.fillRect(x+150,y+250,100,50);
    // ctx.fillRect(x+450,y+250,100,50);
    // ctx.fillRect(x+328,y+100,40,100);
    //
    // ctx.fillRect(x,y2,80,250);  //left
    // ctx.fillRect(x+600,y2,100,250); //right
    // ctx.fillRect(x+80,y2,45,40); //left-notch1
    // ctx.fillRect(x+80,y2+210,45,40); //left-notch2
    // ctx.fillRect(x+200,y2,300,40); //mid-top
    // ctx.fillRect(x+200,y2+210,300,40); //mid-bot
    // ctx.fillRect(x+420,y2,80,250);//mid-column
    //
    // ctx.fillRect(x,y3,500,50); // left-bar
    // ctx.fillRect(x+600,y3,100,50); // right-bar
    // ctx.fillRect(x,y3+450,300,50); //left-bar2
    // ctx.fillRect(x+400,y3+450,300,50); //right-bar2
    // ctx.fillRect(x,y3+250,100,50); //left-bar3
    // ctx.fillRect(x+200,y3+250,500,50);//right-bar3
    //
    // ctx.fillRect(x+195,y4,310,40); //mid-top
    // ctx.fillRect(x,y4,80,250); //left
    // ctx.fillRect(x+620,y4,80,250); //right
    // ctx.fillRect(x+80,y4+200,190,50);//left-notch
    // ctx.fillRect(x+430,y4+200,190,50);//right-notch
    //
    // ctx.fillRect(x,y5,70,40); //layer1-block1
    // ctx.fillRect(x+130,y5,70,40); //layer1-block2
    // ctx.fillRect(x+250,y5,70,40); //layer1-block3
    // ctx.fillRect(x+630,y5,70,40); //layer1-block4
    // ctx.fillRect(x+380,y5,70,40); //layer1-block5
    // ctx.fillRect(x+500,y5,70,40); //layer1-block6
    //
    // ctx.fillRect(x+65,y5+150,70,40); //layer2-block1
    // ctx.fillRect(x+195,y5+150,70,40); //layer2-block2
    // ctx.fillRect(x+315,y5+150,70,40); //layer2-block3
    // ctx.fillRect(x+445,y5+150,70,40); //layer2-block4
    // ctx.fillRect(x+565,y5+150,70,40); //layer2-block5
    //
    // ctx.fillRect(x,y5+300,70,40); //layer3-block1
    // ctx.fillRect(x+130,y5+300,70,40); //layer3-block2
    // ctx.fillRect(x+250,y5+300,70,40); //layer3-block3
    // ctx.fillRect(x+380,y5+300,70,40); //layer3-block4
    // ctx.fillRect(x+500,y5+300,70,40); //layer3-block5
    // ctx.fillRect(x+630,y5+300,70,40); //layer3-block6
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
