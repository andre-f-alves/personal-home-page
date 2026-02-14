import Icon from "./icon"

export default function ContactLinks() {
  return (
    <ul className="flex justify-around items-center md:gap-[24px] w-[80%] md:w-max list-none">
      <li>
        <a href="https://github.com/andre-f-alves" target="_blank" rel="noopener noreferrer">
          <Icon icon="github" />
        </a>
      </li>

      <li>
        <a href="http://www.linkedin.com/in/andré-alves-85ab73249">
          <Icon icon="linkedin" />
        </a>
      </li>

      <li>
        <a href="#">
          <Icon icon="whatsapp" />
        </a>
      </li>

      <li>
        <a href="mailto:andre.fortes.alves06@gmail.com">
          <Icon icon="email" />
        </a>
      </li>

      <li>
        <a href="#">
          <Icon icon="cv" />
        </a>
      </li>
    </ul>
  )
}
