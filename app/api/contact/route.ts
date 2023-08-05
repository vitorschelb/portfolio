import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { feedbackSchema } from "@/app/shared/Data";
import { limiter } from "../config/limiter";

export async function POST(request: Request) {
  const body = await request.json();

  const feedback = feedbackSchema.parse(body);

  const remaining = await limiter.removeTokens(1);

  if (remaining < 0) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

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
