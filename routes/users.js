const router = require('koa-router')()
const Person = require('../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//这里用post，对应下面的 request.body 的获取形式
//这点我在python的flask中，就已经领会到了
router.post('/addPerson', async function (ctx) {
  const person = new Person({
    name:ctx.request.body.name,
    age:ctx.request.body.age
  })
  let code 
  try{
    await person.save()
    code=0
  }catch{
    code=1
  }
  ctx.body = {
    code:code
  }
})

module.exports = router
