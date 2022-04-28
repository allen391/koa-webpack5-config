import Router from 'koa-router';
import publicController from '../api/public-controller';

const router = new Router();
router.get('/getCaptcha', publicController.getCaptcha);

export default router;
