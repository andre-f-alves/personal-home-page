"use client"

import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded p-2 border text-black bg-white"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded p-2 border text-black bg-white"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="subject">Assunto</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className="rounded p-2 border text-black bg-white"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="rounded p-2 border h-32 text-black bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 py-2 px-6 font-bold rounded-full bg-brand hover:bg-hover"
      >
        {status === "loading" ? "Enviando..." : "Enviar email"}
      </button>
    </form>
  )
}
