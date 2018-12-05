import Player from './player';
import Obstacle from './obstacle'
import Collectable from './collectable';

document.addEventListener("DOMContentLoaded", () => {
  const img = new Image();
  img.src = "../FeatherFall/assets/ROfalcon.png";
  img.onload = function() {
    init();
  };



  const canvas = document.getElementById('canvas');
  const offscreenCanvas = document.createElement('canvas');
  const context = offscreenCanvas.getContext('2d');
  offscreenCanvas.width = "700";
  offscreenCanvas.height = '3000';
  const ctx = canvas.getContext('2d');
  const obs1 = new Obstacle(context,ctx,0,400);
  const obs2 = new Obstacle(context,ctx,0,1000);
  const obs3 = new Obstacle(context,ctx,0,1600);
  const obs4 = new Obstacle(context,ctx,0,2200);
  canvas.tabIndex = 1;

  let offsetX = 0
  let offsetY = 0
  let scrollY = -1.05
  const player = new Player(img,150,0,offsetY);

  function draw() {
    ctx.clearRect(-offsetX,-offsetY, 700,3000);
    fillOffscreen();
    ctx.save();
    ctx.beginPath();
    ctx.drawImage(offscreenCanvas,0,0);
    if (leftArrow) {

       if (player.playerX - 3 < 0) {
         player.playerX += 2;
       } else {
         player.playerX -= 2;
       }
    }
     if (rightArrow) {
        if (player.playerX + 3 > 660) {
          player.playerX -= 2;
        } else {
          player.playerX += 2
        }

    }
     if (upArrow) {
      if(player.playerY - 3 < 1 - offsetY) {
        player.playerY += 2.25;
      } else {
        player.playerY -= 2.25;
      }
    }
     if (downArrow) {
        if(player.playerY + 3 > canvas.height - offsetY - 50) {
          player.playerY -= 1.75;
        } else {
          player.playerY += 1.75;
        }
      }
    if (offsetY + scrollY <= -2400) {
      scrollY = 0;
      setTimeout(()=> changeDirection(),4000);
    } else if (offsetY + scrollY > 0) {
      scrollY = 0;
    }
    ctx.translate(0,scrollY);
    offsetY += scrollY;
    ctx.closePath();
    playerBounds();
    window.requestAnimationFrame(draw);
  }

  // let coll1 = new Collectable(ctx,475,125); //top gap
  // let coll2 = new Collectable(ctx,525,125);
  // let coll3 = new Collectable(ctx,175,275); //mid gap
  // let coll4 = new Collectable(ctx,225,275);
  // let coll5 = new Collectable(ctx,325,425); //bot gap
  // let coll6 = new Collectable(ctx,375,425);
  // let coll7 = new Collectable(ctx,625,200); // tri-1
  // let coll8 = new Collectable(ctx,605,225);
  // let coll9 = new Collectable(ctx,585,200);
  // let coll10 = new Collectable(ctx,605,175);
  // let coll11 = new Collectable(ctx,75,375);//tri-2
  // let coll12 = new Collectable(ctx,95,325);
  // let coll13 = new Collectable(ctx,115,375);
  // let coll14 = new Collectable(ctx,75,175);//tri-3
  // let coll15 = new Collectable(ctx,95,225);
  // let coll16 = new Collectable(ctx,115,175);

  function fillOffscreen() {
    obs1.borderWall(player);
    let x = 0;
    let y = 100;
       // context.fillRect(x,y,450,50); // left-bar
       // context.fillRect(x+550,y,150,50); // right-bar
       // context.fillRect(x,y+300,300,50); //left-bar2
       // context.fillRect(x+400,y+300,300,50); //right-bar2
       // context.fillRect(x,y+150,150,50); //left-bar3
       // context.fillRect(x+250,y+150,450,50);//right-bar3
       //
       // coll1.render(player);
       // coll2.render(player);
       // coll3.render(player);
       // coll4.render(player);
       // coll5.render(player);
       // coll6.render(player);
       // coll7.render(player);
       // coll8.render(player);
       // coll9.render(player);
       // coll10.render(player);
       // coll11.render(player);
       // coll12.render(player);
       // coll13.render(player);
       // coll14.render(player);
       // coll15.render(player);
       // coll16.render(player);

    obs1.render(player,offsetX,offsetY);
    obs2.render(player,offsetX,offsetY);
    obs3.render(player,offsetX,offsetY);
    obs4.render(player,offsetX,offsetY);
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
    ctx.beginPath();
    frameCount++;
    if (frameCount < 1) {
      window.requestAnimationFrame(step);
      return;
    }
     frameCount = 0;

    player.drawSprite(ctx,imgIndex[idx]);
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

  let gameKeys = [];
  let upArrow = false;
  let rightArrow = false;
  let downArrow = false;
  let leftArrow = false;

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


   }, false);
     draw();
    window.requestAnimationFrame(draw);

});
