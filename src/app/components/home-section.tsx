import ContactLinks from "./contact-links"

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-full">
      <div className="max-w-7xl h-full p-[3rem_1.5rem] md:p-[6rem_3rem] lg:px-20 mx-auto rounded-4xl bg-gray-500/5 border-1 border-gray-500/15 shadow-sm">
        <div className="flex flex-col justify-center items-center md:items-start gap-[3rem] h-full text-center md:text-left">

          <div className="w-full flex flex-col items-center md:items-start gap-[.8rem]">
            
            <h1 className="font-[Consolas] text-[1.25rem] text-brand">&lt;André Alves/&gt;</h1>
            <div className="w-[60%] h-[2px] bg-brand"></div>

            <h2 className="font-bold text-title text-title-color">Desenvolvedor Full Stack</h2>
            <p className="text-headline">
              Crio sites e aplicações web rápidos, intuitivos e atraentes<br /> do design ao produto final.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[2rem] w-full md:w-max">
            <a
              href="#projects"
              className="text-nowrap p-[1rem_2rem] font-bold rounded-full border-2 border-brand text-center leading-none bg-brand hover:bg-hover hover:border-hover"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="text-nowrap p-[1rem_2rem] font-bold rounded-full border-2 border-brand text-center leading-none text-brand hover:text-hover hover:border-hover"
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
