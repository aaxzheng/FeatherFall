class Player {
  constructor(img,startX,startY,offsetY) {
    this.playerX = startX;
    this.playerY = startY - offsetY;
    this.model = img;
  }
  drawSprite(ctx,idx) {
    let width = 86;
    let height = 45;
    ctx.drawImage(this.model,width*idx,198,80,80,this.playerX,this.playerY,65,65);
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
}
export default Player;
