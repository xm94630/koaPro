function pv(ctx){
    global.console.log('xm =======>'+ctx.path);
}

//为什么这里是module.exports，而不是export default...呢？
module.exports = function(){
    return async function(ctx,next){
        pv(ctx)
        return await next()
    }
}

