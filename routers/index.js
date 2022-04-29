import combineRoutes from 'koa-combine-routers';
import publicRouter from './public-router';
import loginRouter from './login-router';
import userRouter from './user-router';

export default combineRoutes(publicRouter, loginRouter, userRouter);
