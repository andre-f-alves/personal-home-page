"use client"

import React, { useState } from "react"
import Section from "./section"

const RECIPIENT = "andre.fortes.alves06@gmail.com"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Nome: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <Section id="contact" title="Contato">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-1">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded p-2 border bg-white"
            />
          </div>
          
          <div className="grid gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded p-2 border bg-white"
            />
          </div>
          
          <div className="grid gap-1">
            <label htmlFor="subject">Assunto</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded p-2 border bg-white"
            />
          </div>
          
          <div className="grid gap-1">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="rounded p-2 border h-32 bg-white"
            />
          </div>

          <button type="submit" className="mt-2 py-2 px-6 font-bold rounded-full bg-brand">
            Enviar email
          </button>
        </form>
      </div>
    </Section>
  )
}
