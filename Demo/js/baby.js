var babyObj = function()
{
    this.x;
    this.y;
    this.angle;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
}
babyObj.prototype.init = function()
{
    this.x = canWidth * 0.5 - 80;
    this.y = canHeight * 0.5 + 80;
    this.bigEye.src = './images/babyEye0.png';
    this.bigBody.src = './images/babyFade0.png';
    this.bigTail.src = './images/babyTail0.png';
    this.angle = 0;
}
babyObj.prototype.draw = function()
{
    this.x = lerpDistance(mom.x,this.x,0.99);
    this.y = lerpDistance(mom.y,this.y,0.99);
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.9);
    ctx_one.save();
    ctx_one.translate(this.x,this.y);
    ctx_one.rotate(this.angle)
    ctx_one.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx_one.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx_one.drawImage(this.bigTail,-this.bigTail.width*0.5+23,-this.bigTail.height*0.5);
    ctx_one.restore();
}

