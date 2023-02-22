import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: process.env.SMTP_host,
    port: process.env.SMTP_port,
    auth: {
      user: process.env.SMTP_user,
      pass: process.env.SMTP_pass,
    },
  });
  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
