import nodemailer from 'nodemailer';

export async function sendMail(subject, toEmail, text, cc) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    cc,
    subject,
    text,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}
