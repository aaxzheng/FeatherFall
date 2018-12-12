import Player from './player';
import Obstacle from './obstacle'
import Collectable from './collectable';
import Treasure from './treasure';
import Snowflakes from './snowflakes';
import Game from './game';
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  function setup() {
    document.getElementById("game-start").classList.add("hide");
    game.draw();
    game.img.onload = function() {
      game.init();
    };
  }

  game.canvas.addEventListener('keydown',(e) => {
    game.checkKeyDown(e);
  },false);

  game.canvas.addEventListener('keyup',(e) => {
    game.checkKeyUp(e);
  },false);

  document.getElementById("start-btn").addEventListener("click",setup());



});
