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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let img = new Image();\n  img.src = \"../assets/ROfalcon.png\";\n  img.onload = function() {\n    init();\n  };\n\n\n\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.tabIndex = 1;\n  let playerX = 150\n  let playerY = 250\n\n  let offsetX = 0\n  let offsetY = 0\n  let scrollY = -0.75\n\n  function draw() {\n    ctx.save();\n    if (offsetY + scrollY <= -800) {\n      scrollY = 0;\n      setTimeout(()=> changeDirection(),4000);\n    } else if (offsetY + scrollY > 0) {\n      scrollY = -0.75\n    }\n    ctx.translate(0,scrollY);\n    offsetY += scrollY;\n    // ctx.clearRect(-offsetX,-offsetY, 300,10000);\n    playerBounds();\n    ctx.fillRect(140,200,20,10)\n  }\n\n  function changeDirection() {\n    scrollY = 0.75\n  }\n\n\n  function playerBounds() {\n    if (playerY - 3 < 1 - offsetY) {\n      playerY += 2;\n    } else if (playerY + 3 > canvas.height - offsetY - 40) {\n      playerY -= 4;\n    }\n  }\n\n\n  let imgIndex = [1,2,3,4,5,6];\n  let idx = 0;\n  let frameCount = 0;\n  function step() {\n    ctx.beginPath();\n    frameCount++;\n    if (frameCount < 6) {\n      window.requestAnimationFrame(step);\n      return;\n    }\n     frameCount = 0;\n     ctx.clearRect(-offsetX,-offsetY, canvas.width,canvas.height);\n\n    drawSprite(imgIndex[idx]);\n    idx++;\n    if (idx > imgIndex.length - 1) {\n      idx = 0;\n    }\n    window.requestAnimationFrame(step);\n  }\n\n  function drawSprite(idx) {\n    let width = 86;\n    let height = 45;\n    ctx.drawImage(img,width*idx,200,64,50,playerX,playerY,50,50);\n  }\n  function init() {\n    window.requestAnimationFrame(step);\n  }\n  //   let index = [1,2,3,4,5,6];\n  //   let width = 86;\n  //   let height = 45;\n  //   let scaledWidth = width * index;\n  //   let scaledHeight = height * index;\n  //   // ctx.drawImage(img,0,0,94,45,0,0,64,64)\n  //   // ctx.drawImage(img,width,0,width,height,0,0,64,64)\n  //   for (let i = 0; i < index.length; i++) {\n  //     ctx.drawImage(img,width*i,200,64,50,0,0,50,50)\n  //   }\n  //\n\n  // movement(playerX,playerY,offsetY);\n  canvas.addEventListener('keydown', function(e) {\n         if (e.keyCode === 37) {\n\n            if (playerX - 3 < 0) {\n              playerX += 2;\n            } else {\n              playerX -= 3;\n            }\n         } else if (e.keyCode === 39) {\n             if (playerX + 3 > 260) {\n               playerX -= 3;\n             } else {\n               playerX += 3\n             }\n\n         } else if (e.keyCode === 38) {\n           if(playerY - 3 < 1 - offsetY) {\n             playerY += 1;\n           } else {\n             playerY -= 5;\n           }\n         } else if (e.keyCode === 40) {\n             if(playerY + 3 > canvas.height - offsetY - 50) {\n               playerY -= 4;\n             } else {\n               playerY += 5;\n             }\n         } else {\n           return;\n         }\n     }, false);\n     draw();\n     setInterval(draw,10);\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// \n// const falcon = sprite\n//\n// function Player () {\n//   let that = {}, spriteIndex = 0, tickCount = 0, ticksPerFrame = 0;\n//\n//   player.render = () => {\n//     that.ctx.drawImage(\n//       that.image,0,0,\n//       that.width,\n//       that.height,\n//       0,\n//       0,\n//       that.width,\n//       that.height\n//     );\n//   }\n//\n//   player.render();\n// }\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });