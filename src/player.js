class Player {
  constructor(img,startX,startY,offsetY) {
    this.playerX = startX;
    this.playerY = startY - offsetY;
    this.model = img;
    this.coins = 0 ;
    this.score = 1 ;
    this.health = 100;
    this.jewels = 0;
    this.dashReady = 2;
  }
  drawSprite(ctx,idx,leftArrow,rightArrow) {
    let width = 86;
    let height = 45;
    // ctx.scale(-1,1);
    // if (rightArrow === true ) {
      // this.model.src = "../FeatherFall/assets/ROfalconReverse.png";
      // ctx.clearRect(this.playerX,this.playerY,65,65);
      ctx.drawImage(this.model,width*idx,198,80,80,this.playerX,this.playerY,65,65);
    //
    // } else {
    //   this.model.src = "../FeatherFall/assets/ROfalcon.png";
    //   ctx.clearRect(this.playerX,this.playerY,65,65);
    //   ctx.drawImage(this.model,width*idx,198,80,80,this.playerX,this.playerY,65,65);
  }

  checkModelX(obsX,width) {
    for (let i = this.playerX + 12; i <= this.playerX + 40; i++) {
      // debugger;
      if (i >= obsX && i <= obsX + width) {
        return true;
      }
    }
     false;
  }

  checkModelY(obsY,height) {
    for (let i = this.playerY; i <= this.playerY + 48; i++) {
      if (i >= obsY && i <= obsY + height) {
        return true;
      }
    }
     false;
  }

  outOfBounds(canvas,offsetY) {
    if (this.playerY < 0 - offsetY- 50 || this.playerY > canvas.height - offsetY +50) {
      return true;
    } else {
      return false;
    }
  }

  tallyScore() {
    this.score = this.coins * 200 + this.jewels * 1000;
  }

  dashLeft() {
    // debugger;
    if (this.dashReady >= 0) {
      this.playerX -= 15;

    } else{
      return;
    }
  }
  stopDash(interval) {
    clearTimeout(this.timeout);
      clearInterval(interval);
    this.timeout = setTimeout(()=>this.refreshDash(),2000);
  }

  dashRight() {
    if (this.dashReady >= 0) {
      this.playerX += 15;
    } else {
      return;
    }
  }
  dashUp() {
    if (this.dashReady >= 0) {
      this.playerY -= 15;

    } else {
      return;
    }
  }

  dashDown() {
    if (this.dashReady >= 0) {
      this.playerY += 15;

    } else {
      return;
    }
  }

  refreshDash() {
    this.dashReady = 2;
  }

}
export default Player;
