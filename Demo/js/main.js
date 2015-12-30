/**
 * Created by Administrator on 2015/12/1.
 */

var can_one;
var can_two;
var ctx_one,ctx_two;

var lastTime,deltaTime;
var bgPic = new Image();
var canWidth,canHeight;
var ane;
var fruit;
var mom;
//鼠标位置
var mx,my;
var baby;

document.body.onload = game;
function game(){
    deltaTime =0;
    lastTime = Date.now();
    init();
    gameloop();
}

function init()
{
      can_one = document.getElementById('canvas_one');
      ctx_one = can_one.getContext('2d');
      can_two = document.getElementById('canvas_two');
      ctx_two = can_two.getContext('2d');
      can_one.addEventListener('mousemove',onMouseMove,false);
      bgPic.src = './images/background.jpg';
      canWidth = can_one.width
      canHeight = can_one.height;
      ane = new aneObj();
      ane.init();   
      fruit = new fruitObj();
      fruit.init();
      mom = new momObj();
      mom.init();
      mx = canWidth*0.5;
      my = canHeight* 0.5;
      baby = new babyObj();
      baby.init();
}

function gameloop(){
    window.requestAnimationFrame(gameloop);  //帧数刷新的频率不一定
    var now = Date.now();
    deltaTime = now - lastTime;
    if(deltaTime >20 )
    {
        deltaTime = 20
    }
    lastTime = now;
    drawBackground();
    fruitMonitor();
    ane.draw();
    fruit.draw();
    ctx_one.clearRect(0,0,canWidth,canHeight)
    mom.draw();
    momFruitCollision();
    baby.draw();
}


function onMouseMove(e)
{
    if(e.offSetX || e.layerX)
    {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}