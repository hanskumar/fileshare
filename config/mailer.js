require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');


module.exports = async ({ from, to, subject, text, html}) => {
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST,
        tls: { rejectUnauthorized: false },
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    }));

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