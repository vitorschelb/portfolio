import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { feedbackSchema } from "@/app/shared/Data";

export async function POST(request: Request) {
  const body = await request.json();

  const feedback = feedbackSchema.parse(body);

  // Basic server side validation

  // CSRF Token
  // Rate Limiting
  // Serialização(.stringfy) e Desserelização(.parse) de dados // Marshal e Unmarshal
  //Update later with STARTTLS. Study about safe.

  const { name, email, message } = feedback;

  const user = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: "vitorschelb.contact@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>`,
    });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" });
  }
}
