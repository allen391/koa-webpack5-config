/**
 * user controller
 * @author Allen Chen
 */

import User from '../models/userSchema';
import util from '../utils/utils';

class UserController {
  constructor() {}

  async login(ctx) {
    const { userName, userPwd } = ctx.request.body;
    console.log(userName, userPwd);
    const res = await User.findOne({
      userName,
      userPwd,
    });
    if (res) {
      ctx.body = util.success(res);
    } else {
      ctx.body = util.fail('username or password is not correct');
    }
  }
}

export default new UserController();
