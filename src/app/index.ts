import * as Koa from 'koa'


const app:Koa = new Koa()

app.use(ctx => ctx.body = 'hello world')


export default app