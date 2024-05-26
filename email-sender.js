import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

export async function sendEmail() {

    const info = await transporter.sendMail({

      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // adresse de l'expéditeur
      to: "test@test..com", // liste des destinataires
      subject: "Hello ✔", // sujet du mail
      text: "Hello world?", // corps du mail en texte brut
      html: "<b>Hello world?</b>", // corps du mail en HTML
    });
  
    console.log("Message sent: %s", info.messageId);
};