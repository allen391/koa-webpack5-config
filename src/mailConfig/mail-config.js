import nodemailer from 'nodemailer';

async function send(sendInfo){
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'haimencth@gmail.com',
      pass: 'cthwsn163.com'
    }
  })

  let mailDetails = {
    from: 'haimencth@gmail.com',
    to: sendInfo.email,
    subject: 'Test mail',
    text: `Nodejs testing mail sent automatically, ${sendInfo.expire}`,
  }
  let info = await mailTransporter.sendMail(mailDetails, (err) => {
    if (err) {
      console.log('error occurs')
    }else{
      console.log('Email sent successfully')
    }
  })
  return 'Message sent: %s', info.messageId
}

export default send


