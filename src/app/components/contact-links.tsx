import Icon from "./icon"

interface ContactLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: string
}

const links: ContactLinkProps[] = [
  { href: "https://github.com/andre-f-alves", icon: "mdi:github", target: "_blank" },
  { href: "https://linkedin.com/in/andré-alves-85ab73249", icon: "mdi:linkedin", target: "_blank" },
  { href: "#", icon: "mdi:whatsapp", target: "_blank" },
  { href: "#", icon: "mdi:email-outline" }
]

function ContactLink({ icon, ...props }: Readonly<ContactLinkProps>) {
  return (
    <li>
      <a { ...props }>
        <Icon icon={icon} height={24} className="text-current" />
      </a>
    </li>
  )
}

export default function ContactLinks() {
  return (
    <ul className="flex justify-evenly items-center md:gap-[3vw] lg:gap-[2rem] w-full list-none">
      {
        links.map((link, index) => (
          <ContactLink key={index} { ...link } />
        ))
      }
    </ul>
  )
}
