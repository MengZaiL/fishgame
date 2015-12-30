//碰撞检测
function momFruitCollision()
{
    for(var i=0 ; i<fruit.num; i++)
    {
        if(fruit.alive[i])
        {
            var dis = calLength2(mom.x,mom.y,fruit.x[i],fruit.y[i])
            if(dis< 500)
            {
                fruit.dead(i)
            }
        }
    }
}