import Collectable from "./collectable";
import Treasure from "./treasure";
class Obstacle {

  constructor(ctx,ctx2,x,y) {
      const collectOne = [
          new Collectable(ctx2,x+305,y+135),
          new Collectable(ctx2,x+305,y+165),
          new Collectable(ctx2,x+390,y+135),
          new Collectable(ctx2,x+390,y+165),
          new Collectable(ctx2,x+465,y+75),
          new Collectable(ctx2,x+495,y+75),
          new Collectable(ctx2,x+465,y+105),
          new Collectable(ctx2,x+495,y+105),
          new Treasure(ctx2,x+495,y+140),
          new Treasure(ctx2,x+180,y+140),
          new Collectable(ctx2,x+525,y+105),
          new Collectable(ctx2,x+465,y+135),
          new Collectable(ctx2,x+465,y+165),
          new Collectable(ctx2,x+465,y+195),
          new Collectable(ctx2,x+495,y+195),
          new Collectable(ctx2,x+525,y+195),
          new Collectable(ctx2,x+465,y+225),
          new Collectable(ctx2,x+495,y+225),
          new Collectable(ctx2,x+200,y+75),
          new Collectable(ctx2,x+230,y+75),
          new Collectable(ctx2,x+170,y+105),
          new Collectable(ctx2,x+200,y+105),
          new Collectable(ctx2,x+230,y+105),
          new Collectable(ctx2,x+230,y+135),
          new Collectable(ctx2,x+230,y+165),
          new Collectable(ctx2,x+170,y+195),
          new Collectable(ctx2,x+200,y+195),
          new Collectable(ctx2,x+230,y+195),
          new Collectable(ctx2,x+200,y+225),
          new Collectable(ctx2,x+230,y+225),
      ];
      const collectTwo = [
         new Collectable(ctx2,x+550,y+50), // ez-path
         new Collectable(ctx2,x+550,y+90),
         new Collectable(ctx2,x+550,y+130),
         new Collectable(ctx2,x+550,y+170),
         new Collectable(ctx2,x+550,y+210),
         new Collectable(ctx2,x+230,y+70), //row 1
         new Collectable(ctx2,x+270,y+70),
         new Collectable(ctx2,x+310,y+70),
         new Collectable(ctx2,x+350,y+70),
         new Collectable(ctx2,x+390,y+70),
         new Collectable(ctx2,x+230,y+100), //row 2
         new Collectable(ctx2,x+270,y+100),
         new Collectable(ctx2,x+350,y+100),
         new Collectable(ctx2,x+390,y+100),
         new Collectable(ctx2,x+230,y+130), //row 3
         new Collectable(ctx2,x+390,y+130),
         new Treasure(ctx2,x+310,y+130),
         new Collectable(ctx2,x+230,y+160), //row 4
         new Collectable(ctx2,x+270,y+160),
         new Collectable(ctx2,x+350,y+160),
         new Collectable(ctx2,x+390,y+160),
         new Collectable(ctx2,x+230,y+190), //row 5
         new Collectable(ctx2,x+270,y+190),
         new Collectable(ctx2,x+310,y+190),
         new Collectable(ctx2,x+350,y+190),
         new Collectable(ctx2,x+390,y+190),
         new Collectable(ctx2,x+100,y+70), //left notch
         new Collectable(ctx2,x+100,y+100),
         new Collectable(ctx2,x+100,y+130),
         new Collectable(ctx2,x+100,y+160),
         new Collectable(ctx2,x+100,y+190),
      ];
      const collectTwoB = [
         new Collectable(ctx2,x+150,y+50), // ez-path
         new Collectable(ctx2,x+150,y+90),
         new Collectable(ctx2,x+150,y+130),
         new Collectable(ctx2,x+150,y+170),
         new Collectable(ctx2,x+150,y+210),
         new Collectable(ctx2,x+310,y+70), //row 1
         new Collectable(ctx2,x+350,y+70),
         new Collectable(ctx2,x+390,y+70),
         new Collectable(ctx2,x+430,y+70),
         new Collectable(ctx2,x+470,y+70),
         new Collectable(ctx2,x+310,y+100), //row 2
         new Collectable(ctx2,x+350,y+100),
         new Collectable(ctx2,x+430,y+100),
         new Collectable(ctx2,x+470,y+100),
         new Collectable(ctx2,x+310,y+130), //row 3
         new Treasure(ctx2,x+383,y+115),
         new Collectable(ctx2,x+470,y+130),
         new Collectable(ctx2,x+310,y+160), //row 4
         new Collectable(ctx2,x+350,y+160),
         new Collectable(ctx2,x+430,y+160),
         new Collectable(ctx2,x+470,y+160),
         new Collectable(ctx2,x+310,y+190), //row 5
         new Collectable(ctx2,x+350,y+190),
         new Collectable(ctx2,x+390,y+190),
         new Collectable(ctx2,x+430,y+190),
         new Collectable(ctx2,x+470,y+190),
         new Collectable(ctx2,x+600,y+70), //left notch
         new Collectable(ctx2,x+600,y+100),
         new Collectable(ctx2,x+600,y+130),
         new Collectable(ctx2,x+600,y+160),
         new Collectable(ctx2,x+600,y+190),
       ];
      const collectThree = [
       new Collectable(ctx2,x+475,y+25), //top gap
       new Collectable(ctx2,x+525,y+25),
       new Collectable(ctx2,x+175,y+175), //mid gap
       new Collectable(ctx2,x+225,y+175),
       new Collectable(ctx2,x+325,y+325), //bot gap
       new Collectable(ctx2,x+375,y+325),
       new Collectable(ctx2,x+625,y+100), // tri-1
       new Collectable(ctx2,x+605,y+125),
       new Collectable(ctx2,x+585,y+100),
       new Collectable(ctx2,x+605,y+75),
       new Collectable(ctx2,x+75,y+275),//tri-2
       new Collectable(ctx2,x+95,y+225),
       new Collectable(ctx2,x+115,y+275),
       new Collectable(ctx2,x+75,y+75),//tri-3
       new Collectable(ctx2,x+95,y+125),
       new Collectable(ctx2,x+115,y+75), ];
      const collectFour = [
       new Collectable(ctx2,x+210,y+70), //mid
       new Collectable(ctx2,x+250,y+70),
       new Collectable(ctx2,x+290,y+70),
       new Collectable(ctx2,x+330,y+70),
       new Collectable(ctx2,x+370,y+70),
       new Collectable(ctx2,x+410,y+70),
       new Collectable(ctx2,x+450,y+70),
       new Collectable(ctx2,x+490,y+70),
       new Collectable(ctx2,x+90,y+170), //left-bot
       new Treasure(ctx2,x+110,y+150),
       new Collectable(ctx2,x+110,y+190),
       new Collectable(ctx2,x+90,y+190),
       new Collectable(ctx2,x+610,y+170), //right-bot
       new Treasure(ctx2,x+570,y+150),
       new Collectable(ctx2,x+610,y+190),
       new Collectable(ctx2,x+590,y+190),
       new Collectable(ctx2,x+100,y+20), //left-top
       new Collectable(ctx2,x+135,y+20),
       new Collectable(ctx2,x+170,y+20),
       new Collectable(ctx2,x+525,y+20), //right-top
       new Collectable(ctx2,x+560,y+20),
       new Collectable(ctx2,x+595,y+20),];
      const collectFive = [
         new Collectable(ctx2,x+80,y+95), //dia1
         new Collectable(ctx2,x+120,y+95),
         new Collectable(ctx2,x+100,y+65),
         new Collectable(ctx2,x+100,y+125),
         new Collectable(ctx2,x+210,y+95), //dia2
         new Collectable(ctx2,x+250,y+95),
         new Collectable(ctx2,x+230,y+65),
         new Collectable(ctx2,x+230,y+125),
         new Collectable(ctx2,x+330,y+95), //dia3
         new Collectable(ctx2,x+370,y+95),
         new Collectable(ctx2,x+350,y+65),
         new Collectable(ctx2,x+350,y+125),
         new Collectable(ctx2,x+460,y+95), //dia4
         new Collectable(ctx2,x+500,y+95),
         new Collectable(ctx2,x+480,y+65),
         new Collectable(ctx2,x+480,y+125),
         new Collectable(ctx2,x+580,y+95), //dia5
         new Collectable(ctx2,x+620,y+95),
         new Collectable(ctx2,x+600,y+65),
         new Collectable(ctx2,x+600,y+125),
         new Collectable(ctx2,x+80,y+245), //dia1-2
         new Collectable(ctx2,x+120,y+245),
         new Collectable(ctx2,x+100,y+215),
         new Collectable(ctx2,x+100,y+275),
         new Collectable(ctx2,x+205,y+245), //dia2-2
         new Collectable(ctx2,x+245,y+245),
         new Collectable(ctx2,x+225,y+215),
         new Collectable(ctx2,x+225,y+275),
         new Collectable(ctx2,x+330,y+245), //dia3-3
         new Collectable(ctx2,x+370,y+245),
         new Collectable(ctx2,x+350,y+215),
         new Collectable(ctx2,x+350,y+275),
         new Collectable(ctx2,x+455,y+245), //dia4-4
         new Collectable(ctx2,x+495,y+245),
         new Collectable(ctx2,x+475,y+215),
         new Collectable(ctx2,x+475,y+275),
         new Collectable(ctx2,x+580,y+245), //dia5-5
         new Collectable(ctx2,x+620,y+245),
         new Collectable(ctx2,x+600,y+215),
         new Collectable(ctx2,x+600,y+275),
      ];
      const collectSix = [
        new Collectable(ctx2,x+100,y+20), //left-col
        new Collectable(ctx2,x+100,y+50),
        new Collectable(ctx2,x+100,y+80),
        new Collectable(ctx2,x+100,y+110),
        new Collectable(ctx2,x+180,y+160), //left-ent
        new Collectable(ctx2,x+220,y+190),
        new Collectable(ctx2,x+180,y+220),
        new Collectable(ctx2,x+520,y+70), //right-ent
        new Collectable(ctx2,x+480,y+100),
        new Collectable(ctx2,x+520,y+130),
        new Collectable(ctx2,x+600,y+180), //right-col
        new Collectable(ctx2,x+600,y+210),
        new Collectable(ctx2,x+600,y+240),
        new Collectable(ctx2,x+600,y+270),
      ];
      this.designs = [
      [ //design 1
         {x:x,y:y,width:150,height:300,collect:collectOne}, //top_left
         {x:x+550,y:y,width:150,height:300}, //top_right
         {x:x+100,y:y,width:150,height:50}, //top_left_notch
         {x:x+450,y:y,width:150,height:50}, //top_right_notch
         {x:x+100,y:y+250,width:150,height:50}, //bottom_left_notch
         {x:x+450,y:y+250,width:150,height:50}, //bottom_right_notch
         {x:x+328,y:y+100,width:40,height:100}, //mid_box
      ],
      [ //design 2
         {x:x,y:y,width:80,height:250,collect:collectTwo},  //left
         {x:x+600,y:y,width:100,height:250}, //right
         {x:x+70,y:y,width:55,height:40}, //left-notch1
         {x:x+70,y:y+210,width:55,height:40}, //left-notch2
         {x:x+200,y:y,width:300,height:40}, //mid-top
         {x:x+200,y:y+210,width:300,height:40}, //mid-bot
         {x:x+420,y:y,width:80,height:250},//mid-column
      ],
      [ //design 2 -flipped
         {x:x,y:y,width:100,height:250,collect:collectTwoB},  //left
         {x:x+620,y:y,width:80,height:250}, //right
         {x:x+590,y:y,width:55,height:40}, //left-notch1
         {x:x+590,y:y+210,width:55,height:40}, //left-notch2
         {x:x+200,y:y,width:310,height:40}, //mid-top
         {x:x+200,y:y+210,width:310,height:40}, //mid-bot
         {x:x+200,y:y,width:80,height:250},//mid-column
      ],
      [ //design 3
         {x:x,y:y,width:450,height:50,collect:collectThree}, // left-bar
         {x:x+550,y:y,width:150,height:50}, // right-bar
         {x:x,y:y+300,width:300,height:50}, //left-bar2
         {x:x+400,y:y+300,width:300,height:50}, //right-bar2
         {x:x,y:y+150,width:150,height:50}, //left-bar3
         {x:x+250,y:y+150,width:450,height:50},//right-bar3
      ],
      [ //design 4
         {x:x+195,y:y,width:310,height:40,collect:collectFour}, //mid-top
         {x:x,y:y,width:80,height:250}, //left
         {x:x+620,y:y,width:80,height:250}, //right
         {x:x+60,y:y+200,width:210,height:50},//left-notch
         {x:x+460,y:y+200,width:210,height:50},//right-notch
      ],
      [ //design 5
         {x:x,y:y,width:70,height:40,collect:collectFive}, //layer1-block1
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
      [ //design 6
        {x:x+150,y:y,width:450,height:50,collect:collectSix}, //top-bar
        {x:x+150,y:y+50,width:100,height:80}, //top-notch
        {x:x+100,y:y+250,width:450,height:50}, //bot-bar
        {x:x+400,y:y+150,width:150,height:150}, //bot-notch
      ]
    ];
      let idx = Math.floor(Math.random()*this.designs.length);
      this.obs = this.designs[idx];
      this.ctx = ctx;
      this.params = {};
      this.tile = new Image();
      this.tile.src = "../FeatherFall/assets/icetiles.png";
    }
    render(player,offsetX,offsetY) {
      for (let j = 0; j < this.obs.length; j++) {
        let part = this.obs[j];
        this.ctx.fillRect(part.x,part.y,part.width,part.height);
        this.checkY(player,part.y,part.height,part.x,part.width);
        this.checkX(player,part.x,part.width,part.y,part.height);
        this.ctx.drawImage(this.tile,50,12,15,11,part.x,part.y,part.width,part.height);
      }
        this.renderCollects(player);
    }

    renderCollects(player) {
      let collects = this.obs[0].collect
      for (let i = 0; i < collects.length; i++) {
        collects[i].render(player);
      }
    }
    checkY(player,partY,height,partX,width) {
      if (player.checkModelY(partY,height) && player.playerY <= partY && player.checkModelX(partX,width)) {
        player.playerY -= 6;
      }
      else if (player.checkModelY(partY,height) && player.playerY >= partY && player.checkModelX(partX,width)) {
        player.playerY += 6;
      } else {
        return;
      }
    }
    checkX(player,x,width,y,height) {
      if (player.checkModelX(x,width) && player.playerX <= x && player.checkModelY(y,height)) {
        player.playerX -= 6;
      }
      else if (player.checkModelX(x,width) && player.playerX >= x && player.checkModelY(y,height)) {
        player.playerX += 6;
      } else {
        return;
      }
    }
    borderWall(player) {
      this.ctx.fillRect(0,0,50,2500); //left wall
      this.ctx.fillRect(650,0,50,2500); //right wall
      this.ctx.fillRect(0,2800,700,100); //bottom layer
      this.ctx.drawImage(this.tile,50,12,3,11,0,0,50,2500);
      this.ctx.drawImage(this.tile,50,12,3,11,650,0,50,2500);
      this.ctx.drawImage(this.tile,50,12,15,11,0,2800,700,100);
      this.checkX(player,0,50,0,2500);
      this.checkY(player,0,2500,0,50);
      this.checkX(player,650,50,0,2500);
      this.checkY(player,0,2500,650,50);
      this.checkX(player,0,700,2800,100);
      this.checkY(player,2800,100,0,700);
    }

}

export default Obstacle;
