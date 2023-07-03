import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FeedBack = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const body: FeedBack = await request.json();

  // Basic server side validation
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: "Invalid request body" });
  }

  const { name, email, message } = body;

  const user = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //Update later with STARTTLS. Study about safe.
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
