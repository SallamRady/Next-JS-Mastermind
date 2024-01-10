
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: "sallamrady99@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>Subject : {subject}</h1>
          <p>New message submitted from your portfolio:</p>
          <p>From :{email}</p>
          <p>Message :{message}</p>
        </>
      ),
    });
    return NextResponse.json({
      ok: true,
      message: "message sended successfully",
    });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Error", error });
  }
}
