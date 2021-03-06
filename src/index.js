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
import router from '../routers';
import log4j from '../utils/log4j';

const app = new koa();
const isDev = process.env.NODE_ENV !== 'production';

//load db configuration
require('../config/db');

//use koa-compose to integrate middleware
const middleware = compose([
  koaBody(),
  cors(),
  helmet(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  statics(path.join(__dirname, '../public')),
]);

if (!isDev) {
  app.use(compress());
}

app.use(middleware);
// logger middleware
app.use(async (ctx, next) => {
  log4j.info(`get - params: ${JSON.stringify(ctx.request.query)}`); // monitor get request
  log4j.info(`post - body: ${JSON.stringify(ctx.request.body)}`); // monitor post request
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(router());
app.use(async (ctx) => {
  ctx.body = 'hello koa';
});
app.listen(3001);
//error handling
app.on('error', (err) => {
  log4j.error(`${err.stack}`);
});
