type SectionProps = {
  title: string
  children: React.ReactNode
  id: string
}

export default function Section({
  title,
  children,
  id
}: Readonly<SectionProps>) {
  return (
    <section id={id} className="w-full">
      <div className="py-4 px-8">
        <h2 className="text-h2 mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
}
