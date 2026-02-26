import Section from "./section"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <Section id="contact" title="Contato">
      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </Section>
  )
}
