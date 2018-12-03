class Obstacle {

constructor(ctx,x,y) {
  this.designs = [
    [
       {x:x,y:y,width:150,height:300},
       {x:x+550,y:y,width:150,height:300},
       {x:x+150,y:y,width:100,height:50},
       {x:x+450,y:y,width:100,height:50},
       {x:x+150,y:y+250,width:100,height:50},
       {x:x+450,y:y+250,width:100,height:50},
       {x:x+328,y:y+100,width:40,height:100},
    ],
    [ //design 2
       {x:x,y:y,width:80,height:250},  //left
       {x:x+600,y:y,width:100,height:250}, //right
       {x:x+80,y:y,width:45,height:40}, //left-notch1
       {x:x+80,y:y+210,width:45,height:40}, //left-notch2
       {x:x+200,y:y,width:300,height:40}, //mid-top
       {x:x+200,y:y+210,width:300,height:40}, //mid-bot
       {x:x+420,y:y,width:80,height:250},//mid-column
    ],
    [ //design 2 -flipped
       {x:x,y:y,width:100,height:250},  //left
       {x:x+620,y:y,width:80,height:250}, //right
       {x:x+600,y:y,width:45,height:40}, //left-notch1
       {x:x+600,y:y+210,width:45,height:40}, //left-notch2
       {x:x+200,y:y,width:310,height:40}, //mid-top
       {x:x+200,y:y+210,width:310,height:40}, //mid-bot
       {x:x+200,y:y,width:80,height:250},//mid-column
    ],
    [ //design 3
       {x:x,y:y,width:500,height:50}, // left-bar
       {x:x+600,y:y,width:100,height:50}, // right-bar
       {x:x,y:y+300,width:300,height:50}, //left-bar2
       {x:x+400,y:y+300,width:300,height:50}, //right-bar2
       {x:x,y:y+150,width:100,height:50}, //left-bar3
       {x:x+200,y:y+150,width:500,height:50},//right-bar3
    ],
    [ //design 4
       {x:x+195,y:y,width:310,height:40}, //mid-top
       {x:x,y:y,width:80,height:250}, //left
       {x:x+620,y:y,width:80,height:250}, //right
       {x:x+80,y:y+200,width:190,height:50},//left-notch
       {x:x+430,y:y+200,width:190,height:50},//right-notch
    ],
    [ //design 5
       {x:x,y:y,width:70,height:40}, //layer1-block1
       {x:x+130,y:y,width:70,height:40}, //layer1-block2
       {x:x+250,y:y,width:70,height:40}, //layer1-block3
       {x:x+630,y:y,width:70,height:40}, //layer1-block4
       {x:x+380,y:y,width:70,height:40}, //layer1-block5
       {x:x+500,y:y,width:70,height:40}, //layer1-block6
       {x:x+65,y:y+150,width:70,height:40}, //layer2-block1
       {x:x+195,y:y+150,width:70,height:40}, //layer2-block2
       {x:x+315,y:y+150,width:70,height:40}, //layer2-block3
       {x:x+445,y:y+150,width:70,height:40}, //layer2-block4
       {x:x+565,y:y+150,width:70,height:40}, //layer2-block5
       {x:x,y:y+300,width:70,height:40}, //layer3-block1
       {x:x+130,y:y+300,width:70,height:40}, //layer3-block2
       {x:x+250,y:y+300,width:70,height:40}, //layer3-block3
       {x:x+380,y:y+300,width:70,height:40}, //layer3-block4
       {x:x+500,y:y+300,width:70,height:40}, //layer3-block5
       {x:x+630,y:y+300,width:70,height:40}, //layer3-block6
    ],
  ];
  let idx = Math.floor(Math.random()*this.designs.length);
    this.obs = this.designs[idx];
    this.ctx = ctx;
  }
  render() {
    for (let j = 0; j < this.obs.length; j++) {
      this.ctx.fillRect(this.obs[j].x,this.obs[j].y,this.obs[j].width,this.obs[j].height);
    }
  }

}

export default Obstacle;
