const router = require('koa-router')()
const Redis = require('koa-redis')

const store = new Redis().client;

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {

  const a = await new Promise((resolve)=>{
    setTimeout(function(){
      resolve(123)
    },3000)
  })
  ctx.body = {
    a
  }
})

router.get('/xm',async (ctx)=>{
  const st = await store.hset('yyyyyyy','name','孙悟空')
  ctx.body = "ok"
})

module.exports = router
