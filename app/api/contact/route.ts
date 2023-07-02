//Aqui ele recebe os dados do servidor e envia o email. Se for realizar validações do email, aqui é o lugar.
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = request.body;

  const user = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //updrade later with STARTTLS
    auth: {
      user: user,
      pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "vitorschelb.contact@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
      <p>Name: ${name} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>`,
    });

    console.log("Message sent:", mail.messageId);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Nao foi possivel" });
  }
}
