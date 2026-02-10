import Image from "next/image"

export default function ContactLinks() {
  return (
    <ul className="flex justify-around items-center w-[80%] list-none">
      <li>
        <a href="https://github.com/andre-f-alves" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/github.svg" alt="GitHub logo" width={32} height={32} className="size-[24px] sm:size-[32px]" />
        </a>
      </li>

      <li>
        <a href="http://www.linkedin.com/in/andré-alves-85ab73249">
          <Image src="/icons/linkedin.svg" alt="LinkedIn logo" width={32} height={32} className="size-[24px] sm:size-[32px]" />
        </a>
      </li>

      <li>
        <a href="#">
          <Image src="/icons/whatsapp.svg" alt="Whatsapp logo" width={32} height={32} className="size-[24px] sm:size-[32px]" />
        </a>
      </li>
      
      <li>
        <a href="mailto:andre.fortes.alves06@gmail.com">
          <Image src="/icons/email.svg" alt="Email icon" width={32} height={32} className="size-[24px] sm:size-[32px]" />
        </a>
      </li>
      
      <li>
        <a href="#">
          <Image src="/icons/cv.svg" alt="CV icon" width={32} height={32} className="size-[24px] sm:size-[32px]" />
        </a>
      </li>
    </ul>
  )
}
