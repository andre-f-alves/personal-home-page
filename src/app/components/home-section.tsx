import ContactLinks from "./contact-links"

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-full bg-cover bg-left-top">
      <div className="w-full h-full">
        <div className="flex flex-col justify-around items-center gap-[24px] h-full p-[48px_24px] text-center">

          <div className="w-full flex flex-col items-center gap-[10px]">
            
            <h1 className="font-[Consolas] text-[1.25rem] text-center text-brand">&lt;André Alves/&gt;</h1>
            <div className="w-[60%] h-[2px] bg-brand"></div>

            <h2 className="font-bold text-[1.5rem]">Desenvolvedor Full Stack</h2>
            <p>
              Crio sites e aplicações web rápidos, intuitivos e atraentes<br /> do design ao produto final.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-full">
            <a
              href="#projects"
              className="p-[16px_24px] font-bold rounded-full text-center leading-none bg-brand"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="p-[16px_24px] font-bold rounded-full border-2 border-brand text-center leading-none text-brand"
            >
              Entrar em contato
            </a>
            
            <div className="w-[50%] h-[2px] bg-brand"></div>
            
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
