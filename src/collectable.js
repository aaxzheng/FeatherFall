class Collectable {
  constructor(ctx,x,y) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.collected = false;
  }

  render(player) {
    if (this.collected === true) {
      return;
    } else {
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,5,0,Math.PI*2);
    this.ctx.fillStyle = "#ccc";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.checkY(player,this.y,10,this.x,10);
    this.checkX(player,this.x,10,this.y,10);
    }
  }

  checkY(player,partY,height,partX,width) {
    if (player.checkModelY(partY,height/2) && player.playerY <= partY && player.checkModelX(partX,width/2)) {
      this.collected = true;
    }
    else if (player.checkModelY(partY,height/2) && player.playerY >= partY && player.checkModelX(partX,width/2)) {
      this.collected = true;
    } else {
      return;
    }
  }
  checkX(player,x,width,y,height) {
    if (player.checkModelX(x,width/2) && player.playerX <= x && player.checkModelY(y,height/2)) {
      this.collected = true;
    }
    else if (player.checkModelX(x,width/2) && player.playerX >= x && player.checkModelY(y,height/2)) {
      this.collected = true;
    } else {
      return;
    }
  }
}

export default Collectable;
