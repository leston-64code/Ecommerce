const nodemailer = require("nodemailer")
const ErrorHandler = require("../utils/ErrorHandler");

exports.sendEmail = async (data) => {

  try {

    // if (!data.to || !data.subject || !data.text || !data.html) {
    //   return next(new ErrorHandler("Missing required fields for sending email", 400))
    // }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MP,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.MAIL_ID, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler("Email could not be sent", 400))
  }
}

