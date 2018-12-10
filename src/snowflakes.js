class Snowflakes {
  constructor(canvas,ctx,offsetY) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.maxCount = 225;
    this.particles = [];
    this.angle = 0;
    this.height = canvas.height + -offsetY;
  }

  fillParticles() {
    for (let i = 0; i < this.maxCount; i++) {
      this.particles.push({
        x: Math.random()*this.canvas.width,
        y: Math.random()*this.height,
        r: Math.random()*3+1,
        d: Math.random()*this.maxCount,
        a: Math.random()* 0.100,
      })
    }
  }

  draw(offsetY) {
    this.ctx.fillStyle = "rgba(255,255,255,1.0)";
    this.ctx.beginPath();
    for (let i = 0; i < this.maxCount; i++) {
      let snowflake = this.particles[i];
      this.ctx.moveTo(snowflake.x,snowflake.y);
      this.ctx.arc(snowflake.x,snowflake.y,snowflake.r,0,Math.PI*2,true);
    }
    this.ctx.fill();
    this.updatePosition(offsetY);
  }

  updatePosition(offsetY) {
    // debugger;
    this.height = canvas.height + -offsetY;
    for (let i = 0; i < this.maxCount; i++) {
      let snowflake = this.particles[i];
      snowflake.a += 0.02;
      snowflake.y += Math.cos(snowflake.a+snowflake.d) + 1 + snowflake.r/2;
      snowflake.x += Math.sin(snowflake.a) * 2;
      if (snowflake.x >= this.canvas.width + 5 || snowflake.x < -5 || snowflake.y >= this.height ) {
        // console.log(this.height);
        if (i % 3 > 0) {
          this.particles[i] = {x: Math.random()*this.canvas.width,y:-offsetY-10,r:snowflake.r,d:snowflake.d,a:snowflake.a}
        } else {
          if (Math.sin(snowflake.a) > 0) {
            this.particles[i] = {x: -5, y:Math.random()*this.height,r:snowflake.r,d:snowflake.d,a:snowflake.a}
          } else {
            this.particles[i] = {x: this.canvas.width + 5, y:Math.random()*this.height,r:snowflake.r,d:snowflake.d,a:snowflake.a}
          }
        }
      }
    }
  }
}

export default Snowflakes;
