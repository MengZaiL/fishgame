/**
 * Created by Administrator on 2015/12/1.
 */
var aneObj = function()
{
    this.x = [];
    this.hei = [];
}

aneObj.prototype.num = 40;
aneObj.prototype.init = function()
{
    for(var i=0;i<this.num;i++)
    {
        this.x[i]  = i*20+Math.random()*16;
        this.hei[i] = 200+Math.random()*50;
    }
}
aneObj.prototype.draw = function()
{
      //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globeAlpha
    ctx_two.save();
    ctx_two.globalAlpha = 0.4;
    ctx_two.lineWidth = 28;
    ctx_two.lineCap = 'round';
    ctx_two.strokeStyle = "#3b154e";
      for(var i=0;i<this.num;i++)
      {
          ctx_two.beginPath();
          ctx_two.moveTo(this.x[i],canHeight);
          ctx_two.lineTo(this.x[i],canHeight - this.hei[i]);
          ctx_two.stroke();
      }
    ctx_two.restore();
}