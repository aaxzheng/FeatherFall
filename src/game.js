import Player from './player';
import Obstacle from './obstacle'
import Collectable from './collectable';
import Treasure from './treasure';
import Snowflakes from './snowflakes';
import Sound from './sfx';

class Game {
  constructor() {

     this.img = new Image();
    this.img.src = "../FeatherFall/assets/ROfalcon.png";
    this.sound = new Sound("src/Snowfall.ogg")
     this.canvas = document.getElementById('canvas');
     this.offscreenCanvas = document.createElement('canvas');
     this.context = this.offscreenCanvas.getContext('2d');
    this.offscreenCanvas.width = "700";
    this.offscreenCanvas.height = '6000';
    this.canvas.tabIndex = 1;
    this.offsetX = 0
    this.offsetY = 0
    this.scrollY = -1.65
     this.ctx = canvas.getContext('2d');
     this.snow = new Snowflakes(this.canvas,this.ctx,this.offsetY);
    this.snow.fillParticles();
     this.obs1 = new Obstacle(this.context,this.ctx,0,400);
     this.obs2 = new Obstacle(this.context,this.ctx,0,1000);
     this.obs3 = new Obstacle(this.context,this.ctx,0,1600);
     this.obs4 = new Obstacle(this.context,this.ctx,0,2200);
     this.obs5 = new Obstacle(this.context,this.ctx,0,2800);
     this.obs6 = new Obstacle(this.context,this.ctx,0,3400);
     this.obs7 = new Obstacle(this.context,this.ctx,0,4200);
     this.obs8 = new Obstacle(this.context,this.ctx,0,5000);
     this.player = new Player(this.img,320,100,this.offsetY);
     this.imgIndex = [1,1,1,1,1,1,
                     2,2,2,2,2,2,
                     3,3,3,3,3,3,
                     4,4,4,4,4,4,
                     5,5,5,5,5,5,
                     6,6,6,6,6,6];
     this.idx = 0;
     this.frameCount = 0;
     this.upArrow = false;
     this.rightArrow = false;
     this.downArrow = false;
     this.leftArrow = false;
     this.space = false;
     this.draw = this.draw.bind(this);
     this.init = this.init.bind(this);
     this.fillOffscreen = this.fillOffscreen.bind(this);
     this.step = this.step.bind(this);
     this.gameWin = this.gameWin.bind(this);
     this.sound.play();
  }


     draw() {
      this.canvas.focus();
      this.ctx.clearRect(-this.offsetX,-this.offsetY, 700,6000);
      this.fillOffscreen();
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.drawImage(this.offscreenCanvas,0,0);
      this.moveCharacter();
      if (this.offsetY + this.scrollY <= -5400) {
        this.scrollY = 0;
        setTimeout(()=> this.changeDirection(),4000);
      } else if (this.offsetY + this.scrollY > 0) {
        this.scrollY = 0;
        setTimeout(()=>this.gameWin(),2000);
      }
      this.ctx.translate(0,this.scrollY);
      this.offsetY += this.scrollY;
      this.ctx.closePath();
      this.playerBounds();
      this.updateStatus();
      this.checkDeath();
      window.requestAnimationFrame(this.draw);
    }


     fillOffscreen() {
      this.obs1.borderWall(this.player);
      let x = 0;
      let y = 100;

      this.obs1.render(this.player,this.offsetX,this.offsetY);
      this.obs2.render(this.player,this.offsetX,this.offsetY);
      this.obs3.render(this.player,this.offsetX,this.offsetY);
      this.obs4.render(this.player,this.offsetX,this.offsetY);
      this.obs5.render(this.player,this.offsetX,this.offsetY);
      this.obs6.render(this.player,this.offsetX,this.offsetY);
      this.obs7.render(this.player,this.offsetX,this.offsetY);
      this.obs8.render(this.player,this.offsetX,this.offsetY);

      return this.offscreenCanvas;
    }

     playerBounds() {
      if (this.player.playerY - 3 < 1 - this.offsetY) {
        this.player.playerY += 4;
      } else if (this.player.playerY + 3 > this.canvas.height - this.offsetY - 40) {

        this.player.playerY -= 6;
      }
    }

     changeDirection() {
      this.scrollY = 2.65;
      // this.ctx.clearRect(-this.offsetX,-this.offsetY, 700,3000);
    }






     step() {
      this.frameCount++;
      if (this.frameCount < 1) {
        // console.log(this.frameCount);
        window.requestAnimationFrame(this.step);
        return;
      }
      this.ctx.beginPath();
       this.frameCount = 0;
        this.snow.draw(this.offsetY);
        this.player.drawSprite(this.ctx,this.imgIndex[this.idx],this.leftArrow,this.rightArrow);
        this.ctx.closePath();

        // this.ctx.clearRect(-this.offsetX,-this.offsetY, 700,3000);
      let x = 0;
      let y = 200;

      this.idx++
      if (this.idx > this.imgIndex.length - 1) {
        this.idx = 0;
      }
      window.requestAnimationFrame(this.step);
    }


     init() {
      window.requestAnimationFrame(this.step);
    }

    // let gameKeys = [];
    // movement(playerX,playerY,this.offsetY);
    checkKeyUp(e) {

        // gameKeys[e.keyCode] = false;
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
        // if (e.keyCode == 32) {
        //   this.space = true;
        // }
    }
    checkKeyDown(e) {


      // gameKeys = gameKeys || [];
      // gameKeys[e.keyCode] = true;
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
       if (this.leftArrow) {

          if (this.player.playerX - 3 < 0) {
            this.player.playerX += 8;
          } else {
            this.player.playerX -= 4;
            if (this.space && this.player.dashReady > 0) {
              this.player.dashReady -= 1
              let interval =  setInterval(() => this.player.dashLeft(),20);
              setTimeout(() => this.player.stopDash(interval),360);
            }
            this.space = false
          }
       }
        if (this.upArrow) {
         if(this.player.playerY - 3 < 1 - this.offsetY) {
           this.player.playerY += 8;
         } else {
           this.player.playerY -= 4.25;
           if (this.space && this.player.dashReady > 0) {
             this.player.dashReady -= 1
             let interval =  setInterval(() => this.player.dashUp(),20);
             setTimeout(() => this.player.stopDash(interval),360);
           }
           this.space = false
         }
       }
        if (this.downArrow) {
           if(this.player.playerY + 3 > this.canvas.height - this.offsetY - 50) {
             this.player.playerY -= 8;
           } else {
             this.player.playerY += 3.75;
             if (this.space && this.player.dashReady > 0) {
               this.player.dashReady -= 1
               let interval =  setInterval(() => this.player.dashDown(),20);
               setTimeout(() => this.player.stopDash(interval),360);
             }
             this.space = false
           }
         }
     }



      //  draw();
      // window.requestAnimationFrame(draw);

       updateStatus() {
        this.player.tallyScore();
        document.getElementById('score').innerHTML= `Score: ${this.player.score}`;
        document.getElementById('dash').innerHTML= `Dashes: ${this.player.dashReady}`;
        document.getElementById('coins').innerHTML= `Crystals Collected: ${this.player.coins}`;
        document.getElementById('hp').innerHTML= `Health: ${this.player.health}`;
        document.getElementById('jewels').innerHTML= `Clusters: ${this.player.jewels}`
      }

      gameWin() {
        document.getElementById('win-score').innerHTML= `Score: ${this.player.score}`;
        document.getElementById('final-score').innerHTML= `Final Score: ${this.player.score + 15000}`;
        document.getElementById("win-retry").addEventListener("click", () => location.reload());
        document.getElementById("game-win").classList.add("show");
        debugger;
        // return;
      }

       checkDeath() {
        if (this.player.health <= 0 || this.player.outOfBounds(this.canvas,this.offsetY)) {
          this.ctx.clearRect(-this.offsetX,-this.offsetY,700,10000);
          this.context.clearRect(-this.offsetX,-this.offsetY,700,10000);
          this.sound.pause();
          document.getElementById("game-over").classList.add("show");
          document.getElementById('end-score').innerHTML= `Score: ${this.player.score}`;

          document.getElementById("end-retry").addEventListener("click", () => location.reload());
          return;
          // game();
        } else {
          return;
        }
      }
    }
  export default Game;
