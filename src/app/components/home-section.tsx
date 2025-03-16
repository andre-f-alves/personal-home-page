import ContactLinks from "./contact-links"

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-(--screen-height) bg-[url(/imgs/bg-img.jpg)] bg-cover bg-left-top">
      <div className="w-full h-full bg-white/75">
        <div className="flex flex-col justify-around items-center h-full p-[24px] text-center">

          <div className="w-full">
            <h1 className="inline-block w-[60%] border-b-[2px] mb-[16px] font-[Consolas] text-[1.25rem] text-[#ff6a00]">&lt;André Alves/&gt;</h1>
            <h2 className="font-semibold text-[1.5rem]">Desenvolvedor Full Stack e<br />Criador de Sites</h2>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-full">
            <a
              href="/docs/andre-alves-cv.pdf"
              download="André Alves - Currículo.pdf"
              className="inline-flex items-center gap-[5px] size-max p-[16px_24px] rounded-full text-center leading-none bg-[#ff6a00]"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                  {/* <!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --> */}
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                </svg>
              </span>
              <span>Baixar currículo</span>
            </a>
            
            <div className="w-[50%] h-[2px] bg-[#ff6a00]"></div>
            
            <ContactLinks />
          </div>

          <div className="w-[24px] h-[48px] flex justify-center">
            <div className="size-[4px] rounded bg-gray-500 animate-(--scroll-animation)"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
