import nodemailer from 'nodemailer';

export async function sendMail(subject, toEmail, otpText) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: toEmail,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(response.envelope);
        resolve(response);
      }
    });
  });
}
