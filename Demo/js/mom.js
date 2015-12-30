var momObj = function()
{
    this.x;
    this.y;
    this.angle;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
}
momObj.prototype.init = function()
{
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.bigEye.src = './images/bigEye0.png';
    this.bigBody.src = './images/bigSwim0.png';
    this.bigTail.src = './images/bigTail0.png';
    this.angle = 0;
}
momObj.prototype.draw = function()
{
    this.x = lerpDistance(mx,this.x,0.98);
    this.y = lerpDistance(my,this.y,0.98);
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.6);
    ctx_one.save();
    ctx_one.translate(this.x,this.y);
    ctx_one.rotate(this.angle)
    ctx_one.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx_one.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx_one.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
    ctx_one.restore();
}

