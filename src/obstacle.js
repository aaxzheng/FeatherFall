const obstacleArray = [
  [ // design 1
    ctx.fillRect(x,y,150,300);
    ctx.fillRect(x+550,y,150,300);
    ctx.fillRect(x+150,y,100,50);
    ctx.fillRect(x+450,y,100,50);
    ctx.fillRect(x+150,y+250,100,50);
    ctx.fillRect(x+450,y+250,100,50);
    ctx.fillRect(x+328,y+100,40,100);
  ],
  [ //design 2
    ctx.fillRect(x,y2,80,250);  //left
    ctx.fillRect(x+600,y2,100,250); //right
    ctx.fillRect(x+80,y2,45,40); //left-notch1
    ctx.fillRect(x+80,y2+210,45,40); //left-notch2
    ctx.fillRect(x+200,y2,300,40); //mid-top
    ctx.fillRect(x+200,y2+210,300,40); //mid-bot
    ctx.fillRect(x+420,y2,80,250);//mid-column
  ],
  [ //design 2 -flipped
    ctx.fillRect(x,y,100,250);  //left
    ctx.fillRect(x+620,y,80,250); //right
    ctx.fillRect(x+600,y,45,40); //left-notch1
    ctx.fillRect(x+600,y+210,45,40); //left-notch2
    ctx.fillRect(x+200,y,310,40); //mid-top
    ctx.fillRect(x+200,y+210,310,40); //mid-bot
    ctx.fillRect(x+200,y,80,250);//mid-column
  ],
  [ //design 3
    ctx.fillRect(x,y,500,50); // left-bar
    ctx.fillRect(x+600,y,100,50); // right-bar
    ctx.fillRect(x,y+300,300,50); //left-bar2
    ctx.fillRect(x+400,y+300,300,50); //right-bar2
    ctx.fillRect(x,y+150,100,50); //left-bar3
    ctx.fillRect(x+200,y+150,500,50);//right-bar3
  ],
  [ //design 4
    ctx.fillRect(x+195,y,310,40); //mid-top
    ctx.fillRect(x,y,80,250); //left
    ctx.fillRect(x+620,y,80,250); //right
    ctx.fillRect(x+80,y+200,190,50);//left-notch
    ctx.fillRect(x+430,y+200,190,50);//right-notch
  ],
  [ //design 5
    ctx.fillRect(x,y,70,40); //layer1-block1
    ctx.fillRect(x+130,y,70,40); //layer1-block2
    ctx.fillRect(x+250,y,70,40); //layer1-block3
    ctx.fillRect(x+630,y,70,40); //layer1-block4
    ctx.fillRect(x+380,y,70,40); //layer1-block5
    ctx.fillRect(x+500,y,70,40); //layer1-block6

    ctx.fillRect(x+65,y+150,70,40); //layer2-block1
    ctx.fillRect(x+195,y+150,70,40); //layer2-block2
    ctx.fillRect(x+315,y+150,70,40); //layer2-block3
    ctx.fillRect(x+445,y+150,70,40); //layer2-block4
    ctx.fillRect(x+565,y+150,70,40); //layer2-block5

    ctx.fillRect(x,y+300,70,40); //layer3-block1
    ctx.fillRect(x+130,y+300,70,40); //layer3-block2
    ctx.fillRect(x+250,y+300,70,40); //layer3-block3
    ctx.fillRect(x+380,y+300,70,40); //layer3-block4
    ctx.fillRect(x+500,y+300,70,40); //layer3-block5
    ctx.fillRect(x+630,y+300,70,40); //layer3-block6
  ],
]


class Obstacle {
  constructor(ctx) {

  }
}
