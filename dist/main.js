/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const img = new Image();\n  img.src = \"../FeatherFall/assets/ROfalcon.png\";\n  img.onload = function() {\n    init();\n  };\n\n\n\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  const obs1 = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,0,400);\n  const obs2 = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,0,1000);\n  const obs3 = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,0,1600);\n  const obs4 = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx,0,2200);\n  canvas.tabIndex = 1;\n\n  let offsetX = 0\n  let offsetY = 0\n  let scrollY = -1.05\n  const player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](img,150,0,offsetY);\n\n  function draw() {\n    ctx.clearRect(-offsetX,-offsetY, 700,3000);\n    ctx.save();\n    ctx.beginPath();\n    obs1.borderWall(player)\n    obs1.render(player,offsetX,offsetY);\n    obs2.render(player,offsetX,offsetY);\n    obs3.render(player,offsetX,offsetY);\n    obs4.render(player,offsetX,offsetY);\n    if (leftArrow) {\n\n       if (player.playerX - 3 < 0) {\n         player.playerX += 2;\n       } else {\n         player.playerX -= 2;\n       }\n    }\n     if (rightArrow) {\n        if (player.playerX + 3 > 660) {\n          player.playerX -= 2;\n        } else {\n          player.playerX += 2\n        }\n\n    }\n     if (upArrow) {\n      if(player.playerY - 3 < 1 - offsetY) {\n        player.playerY += 2.25;\n      } else {\n        player.playerY -= 2.25;\n      }\n    }\n     if (downArrow) {\n        if(player.playerY + 3 > canvas.height - offsetY - 50) {\n          player.playerY -= 1.75;\n        } else {\n          player.playerY += 1.75;\n        }\n      }\n    if (offsetY + scrollY <= -2400) {\n      scrollY = 0;\n      setTimeout(()=> changeDirection(),4000);\n    } else if (offsetY + scrollY > 0) {\n      scrollY = -1.05;\n    }\n    ctx.translate(0,scrollY);\n    offsetY += scrollY;\n    ctx.closePath();\n    playerBounds();\n    window.requestAnimationFrame(draw);\n  }\n\n  function playerBounds() {\n    if (player.playerY - 3 < 1 - offsetY) {\n      player.playerY += 2;\n    } else if (player.playerY + 3 > canvas.height - offsetY - 40) {\n\n      player.playerY -= 4;\n    }\n  }\n\n  function changeDirection() {\n    scrollY = 1.65;\n    // ctx.clearRect(-offsetX,-offsetY, 700,3000);\n  }\n\n\n\n\n  let imgIndex = [1,1,1,1,1,1,\n                  2,2,2,2,2,2,\n                  3,3,3,3,3,3,\n                  4,4,4,4,4,4,\n                  5,5,5,5,5,5,\n                  6,6,6,6,6,6];\n  let idx = 0;\n  let frameCount = 0;\n\n  function step() {\n    ctx.beginPath();\n    frameCount++;\n    if (frameCount < 1) {\n      window.requestAnimationFrame(step);\n      return;\n    }\n     frameCount = 0;\n\n    player.drawSprite(ctx,imgIndex[idx]);\n\n      ctx.closePath();\n      // ctx.clearRect(-offsetX,-offsetY, 700,3000);\n    // let x = 0;\n    // let y = 100;\n    idx++\n    if (idx > imgIndex.length - 1) {\n      idx = 0;\n    }\n    window.requestAnimationFrame(step);\n  }\n\n\n  function init() {\n    window.requestAnimationFrame(step);\n  }\n\n  let gameKeys = [];\n  let upArrow = false;\n  let rightArrow = false;\n  let downArrow = false;\n  let leftArrow = false;\n\n  // movement(playerX,playerY,offsetY);\n  canvas.addEventListener('keyup', function(e) {\n    // gameKeys[e.keyCode] = false;\n    if (e.keyCode == 38) {\n      upArrow = false;\n    }\n    if (e.keyCode == 37) {\n      leftArrow = false;\n    }\n    if (e.keyCode == 39) {\n      rightArrow = false;\n    }\n    if (e.keyCode == 40) {\n      downArrow = false;\n    }\n\n  })\n  canvas.addEventListener('keydown', function(e) {\n    // gameKeys = gameKeys || [];\n    // gameKeys[e.keyCode] = true;\n    if (e.keyCode == 38) {\n      upArrow = true;\n    }\n    if (e.keyCode == 37) {\n      leftArrow = true;\n    }\n    if (e.keyCode == 39) {\n      rightArrow = true;\n    }\n    if (e.keyCode == 40) {\n      downArrow = true;\n    }\n\n   // if (leftArrow) {\n   //\n   //    if (player.playerX - 3 < 0) {\n   //      player.playerX += 2;\n   //    } else {\n   //      player.playerX -= 10;\n   //    }\n   // }\n   //  if (rightArrow) {\n   //     if (player.playerX + 3 > 660) {\n   //       player.playerX -= 3;\n   //     } else {\n   //       player.playerX += 10\n   //     }\n   //\n   // }\n   //  if (upArrow) {\n   //   if(player.playerY - 3 < 1 - offsetY) {\n   //     player.playerY += 1;\n   //   } else {\n   //     player.playerY -= 12;\n   //   }\n   // }\n   //  if (downArrow) {\n   //     if(player.playerY + 3 > canvas.height - offsetY - 50) {\n   //       player.playerY -= 4;\n   //     } else {\n   //       player.playerY += 8;\n   //     }\n   // }\n\n   }, false);\n     draw();\n    window.requestAnimationFrame(draw);\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Obstacle {\n\n  constructor(ctx,x,y) {\n    this.designs = [\n      [\n         {x:x,y:y,width:150,height:300},\n         {x:x+550,y:y,width:150,height:300},\n         {x:x+150,y:y,width:100,height:50},\n         {x:x+450,y:y,width:100,height:50},\n         {x:x+150,y:y+250,width:100,height:50},\n         {x:x+450,y:y+250,width:100,height:50},\n         {x:x+328,y:y+100,width:40,height:100},\n      ],\n      [ //design 2\n         {x:x,y:y,width:80,height:250},  //left\n         {x:x+600,y:y,width:100,height:250}, //right\n         {x:x+80,y:y,width:45,height:40}, //left-notch1\n         {x:x+80,y:y+210,width:45,height:40}, //left-notch2\n         {x:x+200,y:y,width:300,height:40}, //mid-top\n         {x:x+200,y:y+210,width:300,height:40}, //mid-bot\n         {x:x+420,y:y,width:80,height:250},//mid-column\n      ],\n      [ //design 2 -flipped\n         {x:x,y:y,width:100,height:250},  //left\n         {x:x+620,y:y,width:80,height:250}, //right\n         {x:x+600,y:y,width:45,height:40}, //left-notch1\n         {x:x+600,y:y+210,width:45,height:40}, //left-notch2\n         {x:x+200,y:y,width:310,height:40}, //mid-top\n         {x:x+200,y:y+210,width:310,height:40}, //mid-bot\n         {x:x+200,y:y,width:80,height:250},//mid-column\n      ],\n      [ //design 3\n         {x:x,y:y,width:500,height:50}, // left-bar\n         {x:x+600,y:y,width:100,height:50}, // right-bar\n         {x:x,y:y+300,width:300,height:50}, //left-bar2\n         {x:x+400,y:y+300,width:300,height:50}, //right-bar2\n         {x:x,y:y+150,width:100,height:50}, //left-bar3\n         {x:x+200,y:y+150,width:500,height:50},//right-bar3\n      ],\n      [ //design 4\n         {x:x+195,y:y,width:310,height:40}, //mid-top\n         {x:x,y:y,width:80,height:250}, //left\n         {x:x+620,y:y,width:80,height:250}, //right\n         {x:x+80,y:y+200,width:190,height:50},//left-notch\n         {x:x+430,y:y+200,width:190,height:50},//right-notch\n      ],\n      [ //design 5\n         {x:x,y:y,width:70,height:40}, //layer1-block1\n         {x:x+130,y:y,width:70,height:40}, //layer1-block2\n         {x:x+250,y:y,width:70,height:40}, //layer1-block3\n         {x:x+630,y:y,width:70,height:40}, //layer1-block4\n         {x:x+380,y:y,width:70,height:40}, //layer1-block5\n         {x:x+500,y:y,width:70,height:40}, //layer1-block6\n         {x:x+65,y:y+150,width:70,height:40}, //layer2-block1\n         {x:x+195,y:y+150,width:70,height:40}, //layer2-block2\n         {x:x+315,y:y+150,width:70,height:40}, //layer2-block3\n         {x:x+445,y:y+150,width:70,height:40}, //layer2-block4\n         {x:x+565,y:y+150,width:70,height:40}, //layer2-block5\n         {x:x,y:y+300,width:70,height:40}, //layer3-block1\n         {x:x+130,y:y+300,width:70,height:40}, //layer3-block2\n         {x:x+250,y:y+300,width:70,height:40}, //layer3-block3\n         {x:x+380,y:y+300,width:70,height:40}, //layer3-block4\n         {x:x+500,y:y+300,width:70,height:40}, //layer3-block5\n         {x:x+630,y:y+300,width:70,height:40}, //layer3-block6\n      ],\n      [\n        {x:x+150,y:y,width:450,height:50}, //top-bar\n        {x:x+150,y:y+50,width:100,height:80}, //top-notch\n        {x:x+100,y:y+250,width:450,height:50}, //bot-bar\n        {x:x+450,y:y+150,width:100,height:150}, //bot-notch\n      ]\n    ];\n    let idx = Math.floor(Math.random()*this.designs.length);\n      this.obs = this.designs[idx];\n      this.ctx = ctx;\n      this.params = {};\n    }\n    render(player,offsetX,offsetY) {\n      for (let j = 0; j < this.obs.length; j++) {\n        let part = this.obs[j];\n        this.ctx.fillStyle =\"#ade7ed\"\n        this.ctx.fillRect(part.x,part.y,part.width,part.height);\n        this.checkY(player,part.y,part.height,part.x,part.width);\n        this.checkX(player,part.x,part.width,part.y,part.height);\n      }\n    }\n    checkY(player,partY,height,partX,width) {\n      if (player.checkModelY(partY,height) && player.playerY <= partY && player.checkModelX(partX,width)) {\n        player.playerY -= 8;\n      }\n      else if (player.checkModelY(partY,height) && player.playerY >= partY && player.checkModelX(partX,width)) {\n        player.playerY += 8;\n      } else {\n        return;\n      }\n    }\n    checkX(player,x,width,y,height) {\n      if (player.checkModelX(x,width) && player.playerX <= x && player.checkModelY(y,height)) {\n        player.playerX -= 8;\n      }\n      else if (player.checkModelX(x,width) && player.playerX >= x && player.checkModelY(y,height)) {\n        player.playerX += 8;\n      } else {\n        return;\n      }\n    }\n    borderWall(player) {\n      this.ctx.fillRect(0,0,50,2500);\n      this.ctx.fillRect(650,0,50,2500);\n      this.checkX(player,0,50,0,2500);\n      this.checkY(player,0,2500,0,50);\n      this.checkX(player,650,50,0,2500);\n      this.checkY(player,0,2500,650,50);\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(img,startX,startY,offsetY) {\n    this.playerX = startX;\n    this.playerY = startY - offsetY;\n    this.model = img;\n  }\n  drawSprite(ctx,idx) {\n    let width = 86;\n    let height = 45;\n    ctx.drawImage(this.model,width*idx,198,80,80,this.playerX,this.playerY,65,65);\n  }\n\n  checkModelX(obsX,width) {\n    for (let i = this.playerX + 12; i <= this.playerX + 40; i++) {\n      // debugger;\n      if (i >= obsX && i <= obsX + width) {\n        return true;\n      }\n    }\n     false;\n  }\n\n  checkModelY(obsY,height) {\n    for (let i = this.playerY; i <= this.playerY + 48; i++) {\n      if (i >= obsY && i <= obsY + height) {\n        return true;\n      }\n    }\n     false;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });