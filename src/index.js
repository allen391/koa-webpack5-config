import koa from 'koa';
//provides important security headers
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import jsonUtil from 'koa-json';
import compose from 'koa-compose';
import compress from 'koa-compress';
import cors from '@koa/cors';
import statics from 'koa-static';
import path from 'path';
import router from '../routers/router';

const app = new koa();
const isDev = process.env.NODE_ENV !== 'production';
/*
* use koa-compose to integrate middleware
*
* */
const middleware = compose([
  koaBody(),
  cors(),
  helmet(),
  jsonUtil({pretty: false, param: 'pretty'}),
  statics(path.join(__dirname, '../public'))
])

if (!isDev) {
  app.use(compress());
}

app.use(middleware)
app.use(router())
app.use(async ctx => {
  ctx.body = 'hello koa'
})

app.listen(3001)
