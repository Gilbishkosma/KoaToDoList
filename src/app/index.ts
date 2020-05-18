import * as Koa from 'koa'
import * as views from 'koa-views'
import * as koaBody from 'koa-body'
import * as Router from 'koa-router'
import * as koaSession from 'koa-session'
import { AppRoutes, UserRoutes } from '../Middleware/router'
import  UserCheck  from '../Middleware/User'
const path = require('path')


const app:Koa = new Koa()
const router = new Router()
router.use(UserCheck())



app.keys = ['asd asd sad wqe qweqwe Key']
const CONFIG = {
  signed: true, /** (boolean) signed or not (default true) */
};


UserRoutes.forEach(
	route => router[route.method](route.path, route.action)
)

AppRoutes.forEach(
	route => router[route.method](route.path, route.action)
)



app.use(koaBody())
app.use(views(path.join(__dirname,'../views'),{extension:'ejs'}))
app.use(koaSession(CONFIG,app))
app.use(router.routes())


export default app