class Collectable {
  constructor(ctx,x,y) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.collected = false;
    this.model = new Image();
    this.model.src = "../FeatherFall/assets/crystals.png";
    this.idx = 0;
    this.idxRange =
    [
      1,1,1,1,1,1,1,
      2,2,2,2,2,2,2,
      3,3,3,3,3,3,3,
      4,4,4,4,4,4,4,
      5,5,5,5,5,5,5,
      6,6,6,6,6,6,6,
      7,7,7,7,7,7,7
    ]
  }

  render(player,offsetY) {
    if (this.inViewport(offsetY,-500,700)) {

      if (this.collected === true) {
        return;
      } else {
      this.ctx.beginPath();
      this.ctx.arc(this.x,this.y,5,0,Math.PI*2);
      this.drawSprite();
      this.ctx.closePath();
      this.checkY(player,this.y,10,this.x,10);
      this.checkX(player,this.x,10,this.y,10);
      }
    } else {
      return;
    }
  }
  drawSprite() {
    this.ctx.drawImage(this.model,17*this.idxRange[this.idx],65,16,27,this.x-5,this.y-10,10,20);
    this.idx += 1;
    if (this.idx > this.idxRange.length - 1) {
      this.idx = 0;
    }
  }
  checkY(player,partY,height,partX,width) {
    if (player.checkModelY(partY,height/1.5) && player.playerY <= partY && player.checkModelX(partX,width*1.25)) {
      this.collected = true;
      player.coins += 0.5;
    }
    else if (player.checkModelY(partY,height/1.5) && player.playerY >= partY && player.checkModelX(partX,width*1.25)) {
      this.collected = true;
      player.coins += 0.5;
    } else {
      return;
    }
  }
  checkX(player,x,width,y,height) {
    if (player.checkModelX(x,width*1.25) && player.playerX <= x && player.checkModelY(y,height/1.5)) {
      this.collected = true;
      player.coins += 0.5;
    }
    else if (player.checkModelX(x,width*1.25) && player.playerX >= x && player.checkModelY(y,height/1.5)) {
      this.collected = true;
      player.coins += 0.5;
    } else {
      return;
    }
  }

  inViewport(offsetY,margin,canvas) {
    if (offsetY <= -this.y - margin && offsetY >= -this.y - margin - canvas) {
      return true;
    } else {
      return false;
    }
  }

}

export default Collectable;
