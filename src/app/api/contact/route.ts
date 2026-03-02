import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PW
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Portfólio" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT,
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao enviar email: ${error}` },
      { status: 500 }
    )
  }
}
