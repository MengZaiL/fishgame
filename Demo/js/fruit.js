var fruitObj = function()
{
    this.alive = [] //bool
    this.x = [];
    this.y = [];
    this.l = []; //果实的大小
    this.spd = []; //果实的速度没个都不一样
    this.type = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
    for(var i=0;i<this.num;i++)
    {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random()* 0.017+0.003;
        this.type[i] = '';
    }
    this.orange.src = './images/fruit.png';
    this.blue.src = './images/blue.png';
}

fruitObj.prototype.draw = function()
{
    for(var i=0;i<this.num;i++)
    {
        //draw
        //知道到海葵，长大，往上飘
        if(this.alive[i])
        {
            if(this.type[i] == 'blue')
            {
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            if(this.l[i] <= 20)
            {
                 this.l[i] += this.spd[i] * deltaTime;
            }else
            {
                 this.y[i] -= this.spd[i] * 4 * deltaTime;
            }
            ctx_two.drawImage(pic, this.x[i]-this.l[i] * 0.5, this.y[i]-this.l[i] * 0.5, this.l[i], this.l[i]);
            if(this.y[i] < 10)
            {
                this.alive[i] =false; 
            }
        }
    }
}

/*fruitObj.prototype.update = function()
{
    var num = 0;
    for(var i = 0;i<this.num;i++)
    {
      
    }
}*/

fruitObj.prototype.dead =function(i)
{
    this.alive[i] = false;
}

fruitObj.prototype.bron = function(i)
{
    var aneID = Math.floor(Math.random()*ane.num);
    //需要取出重复
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.hei[aneID]
    this.l[i] = 0;
    this.alive[i] =true;
    var ran = Math.random();
    if(ran < 0.2)
    {
         this.type[i] = 'blue';
    }else{
         this.type[i] = 'orange';
    }
    //orange,blue
}

function fruitMonitor()
{
    var num =0;
    for(var i=0;i<fruit.num;i++)
    {
        if(fruit.alive[i]) num++;
    }
    if(num < 15)
    {
        sendFruit();
        return; 
    }
}

function sendFruit()
{
    for(var i=0;i<fruit.num;i++)
    {
        if(!fruit.alive[i])
        {
            fruit.bron(i);
            return;
        }
    }
}


