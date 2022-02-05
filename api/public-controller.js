import svg from 'svg-captcha'

class PublicController{
  constructor(){}

  async getCaptcha(ctx){
    const newCaptcha = new svg.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random()*3),
      width: 150,
      height: 38
    })
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()
