import ContactLinks from "./contact-links"

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-full lg:h-[30rem]">
      <div className="max-w-7xl h-full mx-auto rounded-4xl border-1">
        <div className="flex flex-col justify-center items-center md:items-start gap-[1.5rem] h-full p-[3rem] text-center md:text-left">

          <div className="w-full flex flex-col items-center md:items-start gap-[10px]">
            
            <h1 className="font-[Consolas] text-[1.25rem] text-brand">&lt;André Alves/&gt;</h1>
            <div className="w-[60%] h-[2px] bg-brand"></div>

            <h2 className="font-bold text-title">Desenvolvedor Full Stack</h2>
            <p className="text-headline">
              Crio sites e aplicações web rápidos, intuitivos e atraentes<br /> do design ao produto final.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[24px] w-full md:w-max">
            <a
              href="#projects"
              className="text-nowrap p-[16px_24px] font-bold rounded-full border-2 border-brand text-center leading-none bg-brand"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="text-nowrap p-[16px_24px] font-bold rounded-full border-2 border-brand text-center leading-none text-brand"
            >
              Entrar em contato
            </a>
            
            <div className="w-[50%] md:w-[2px] h-[2px] md:h-[3rem] bg-brand"></div>
            
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
