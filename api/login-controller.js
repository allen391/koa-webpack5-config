
class LoginController {
  constructor(){}

  async forget(ctx){
    const {body} = ctx.request
    ctx.body = {
      body
    }
  }
}

export default new LoginController()
