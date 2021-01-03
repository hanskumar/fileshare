require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async ({ from, to, subject, text, html}) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.EMAIL_SMTP_SECURE, // true for 465, false for other ports
       
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
        logger: true,
        debug: true // include SMTP traffic in the logs
    });

    console.log(process.env.MAIL_PASSWORD);

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `Ishare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}