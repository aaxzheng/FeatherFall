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
    // this.ctx.fillStyle = "#ccc";
    // this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.checkY(player,this.y,10,this.x,10);
    this.checkX(player,this.x,10,this.y,10);
    }
  }

  checkY(player,partY,height,partX,width) {
    if (player.checkModelY(partY,height/1.5) && player.playerY <= partY && player.checkModelX(partX,width*1.25)) {
      this.collected = true;
      player.score += 0.5;
    }
    else if (player.checkModelY(partY,height/1.5) && player.playerY >= partY && player.checkModelX(partX,width*1.25)) {
      this.collected = true;
      player.score += 0.5;
    } else {
      return;
    }
  }
  checkX(player,x,width,y,height) {
    if (player.checkModelX(x,width*1.25) && player.playerX <= x && player.checkModelY(y,height/1.5)) {
      this.collected = true;
      player.score += 0.5;
    }
    else if (player.checkModelX(x,width*1.25) && player.playerX >= x && player.checkModelY(y,height/1.5)) {
      this.collected = true;
      player.score += 0.5;
    } else {
      return;
    }
  }
}

export default Collectable;
