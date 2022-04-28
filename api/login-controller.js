import moment from 'moment';
import send from '../src/mailConfig/mail-config';

class LoginController {
  constructor() {}

  async forget(ctx) {
    try {
      let result = await send({
        code: '1234',
        expire: moment().add(30, 'minute').format('YYYY-MM-DD HH:mm:ss'),
        email: 'chentinghan@outlook.com',
        user: 'Brian',
      });
      ctx.body = {
        code: 200,
        data: result,
        msg: 'mail sent successfully',
      };
    } catch (e) {
      console.log(e);
    }
  }
}

export default new LoginController();
