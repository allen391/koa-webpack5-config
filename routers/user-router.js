/**
 * user router
 */
import Router from 'koa-router';
import UserController from '../api/user-controller';

const router = new Router({
  prefix: '/api/users',
});

//user login
router.post('/login', UserController.login);

export default router;
