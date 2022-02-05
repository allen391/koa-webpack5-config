import Router from 'koa-router';
import LoginController from '../api/login-controller';

const router = new Router();

router.post('/forget', LoginController.forget)

export default router;
